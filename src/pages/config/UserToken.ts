import { jwtDecode, JwtPayload } from "jwt-decode";

interface CustomTokenPayload extends JwtPayload {
    access_user: string;
}

const decodeUserToken = (token: string) => {
    try {
        const decoded = jwtDecode<CustomTokenPayload>(token);
        const accessUser = decoded.access_user;

        return accessUser;
    } catch (error) {
        console.error("Token decoding failed:", error);
        return null;
    }
};

export { decodeUserToken };