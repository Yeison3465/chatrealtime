import { generateQR } from "../profileservice/uploadQR";
import { supabase } from "../supabase";

export const AuthenticateRegister = async (
    email,
    password,
    firstname,
    lastname,
    username,
    phone,
    avatar_url
) => {
    try {
        
        const qr_code = await generateQR(username);

        
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    first_name: firstname,
                    last_name: lastname,
                    username,
                    phone,
                    avatar_url,
                    qr_code
                }
            }
        });

        if (error) throw error;

        return {
            success: true,
            user: data.user
        };
    } catch (error) {
        console.error("Error en registro:", error.message);
        return {
            success: false,
            error: error.message
        };
    }
};
