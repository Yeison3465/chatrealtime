import { supabase } from "../supabase";

export const AuthenticateLogin = async (email, password) => {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
        });
        if (error) {
        throw error;
        }
        return data;
    } catch (error) {
        console.error('Error during login:', error.message);
        throw error;
    }
};

export const AuthenticateLogout = async () => {
    try {
        const { error } = await supabase.auth.signOut();
        if (error) {
        throw error;
        }   
    } catch (error) {
        console.error('Error during logout:', error.message);
        throw error;
    }
};

