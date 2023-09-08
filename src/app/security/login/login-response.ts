export interface LoginResponse {
    token: string;
    type: string;
    id: string;
    username: string;
    name: string;
    authorities: string[];
}