interface AppState {
  isUserLoggedIn?: boolean;
  accessToken?: string;
  refreshToken?: string;
  username?: string;

  setAppState: ({
    isUserLoggedIn,
    accessToken,
    refreshToken,
    username,
  }: AppState) => void;
}
