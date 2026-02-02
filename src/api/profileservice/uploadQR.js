import QRCode from "qrcode";

export const generateQR = async (username) => {
    try {
        
        const qrContent = `user:${username}`;

        const qrBase64 = await QRCode.toDataURL(qrContent);

        return qrBase64;
    } catch (error) {
        console.error("Error generando QR:", error);
        throw error;
    }
};
