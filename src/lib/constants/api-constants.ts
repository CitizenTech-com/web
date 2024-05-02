export const DEFAULT_GET_API_HEADER = (accessToken: string) => {
    return {
      Authorization: `Bearer ${accessToken}`,
    };
  };
  export const DEFAULT_POST_API_HEADER = (accessToken: string) => {
    return {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    };
  };
  export const API_BASE_URL = "http://localhost:3000";
  
