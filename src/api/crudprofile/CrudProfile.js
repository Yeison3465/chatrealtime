import { supabase } from "../supabase";

export const getProfileUser = async () => {
    try {
        
        const {
            data: { user },
            error: authError,
        } = await supabase.auth.getUser();
        if (authError || !user) throw authError;

        
        const { data, error } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", user.id) 
            .single();

        if (error) throw error;

        return data;
    } catch (error) {
        console.error("Error fetching profile user:", error);
    }
};
