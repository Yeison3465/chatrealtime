import { supabase } from "../supabase";

export const getConctact = async (userId) => {
    if (!userId) return [];

    const { data, error } = await supabase
        .from("contacts")
        .select(
            `
      id,
      created_at,
      contact:profiles!contacts_contact_id_fkey (
        id,
        username,
        first_name,
        last_name,
        avatar_url
      )
    `,
        )
        .eq("user_id", userId);

    if (error) {
        console.error("Error fetching contacts:", error);
        return [];
    }

    return data;
};

export const sendFriendRequestByUsername = async (username) => {
    const { data: profile, error } = await supabase
        .from("profiles")
        .select("id")
        .eq("username", username)
        .single();

    if (error || !profile) {
        throw new Error("Usuario no encontrado");
    }

    const { error: insertError } = await supabase.from("friend_requests").insert({
        receiver_id: profile.id,
    });

    if (insertError) throw insertError;
    return { success: true, message: "Solicitud enviada" };
};

export const getFriendRequests = async (userId) => {
    if (!userId) return [];

    const { data, error } = await supabase
        .from("friend_requests")
        .select(
            `
            id,
            created_at,
            sender:profiles!friend_requests_sender_id_fkey (
                id,
                username,
                first_name,
                last_name,
                avatar_url
            )
        `,
        )
        .eq("receiver_id", userId)
        .eq("status", "pending");

    if (error) {
        console.error("Error fetching friend requests:", error);
        return [];
    }

    return data;
};

export const acceptFriendRequest = async (request) => {
    const { error } = await supabase.rpc("accept_friend_request", {
        p_request_id: request.id,
    });

    if (error) {
        console.error("Error accepting request:", error);
        return false;
    }

    return true;
};

export const rejectFriendRequest = async (requestId) => {
    const { error } = await supabase
        .from("friend_requests")
        .update({ status: "rejected" })
        .eq("id", requestId);

    if (error) {
        console.error("Error rejecting request:", error);
        return false;
    }

    return true;
};
