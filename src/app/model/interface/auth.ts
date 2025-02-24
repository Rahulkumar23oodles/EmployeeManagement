export interface LoginRequest{
    EmailId:string;
    Password:string;
}

export interface LoginResponse {
    message: string;
    result: boolean;
    data: { token: string };
  }