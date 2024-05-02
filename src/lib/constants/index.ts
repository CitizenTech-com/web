
export const DEFAULT_LOCAL_STORAGE_KEY_FOR_APP_STATE = "APP_STATE";
export const DEFAULT_APP_STATE: AppState = {
    isUserLoggedIn: false,
    accessToken: "",
    refreshToken: "",
  
    setAppState: () => {},
  };