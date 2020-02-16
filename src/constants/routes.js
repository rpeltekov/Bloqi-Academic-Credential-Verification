export const CLIENT_ID = "4bdbb115-4940-407b-bfe3-053cb306dded";
export const MICROSOFT_ACNT = "rpeltekovgmail.onmicrosoft.com";
export const LOGIN_REDIRECT_URL = "http%3A%2F%2Flocalhost%3A3000%2FLoader";
export const LOGIN_REDIRECT_URL_ONBOARD =
    "http%3A%2F%2Flocalhost:3000%2FOnboarding";
export const SCOPE =
    "https%3A%2F%2Frpeltekovgmail.onmicrosoft.com%2F4bdbb115-4940-407b-bfe3-053cb306dded%2FFiles.Read";
export const LOGOUT_REDIRECT_URL = "http%3a%2f%2flocalhost:3000";
export const HOME = "http://localhost:3000";
export const LOGIN =
    "https://login.microsoftonline.com/" +
    MICROSOFT_ACNT +
    "/oauth2/authorize?resource=" +
    CLIENT_ID +
    "&client_id=" +
    CLIENT_ID +
    "&response_type=token&redirect_uri=" +
    LOGIN_REDIRECT_URL +
    "&scope=" +
    SCOPE;
export const LOGIN_ONBORAD =
    "https://login.microsoftonline.com/" +
    MICROSOFT_ACNT +
    "/oauth2/authorize?resource=" +
    CLIENT_ID +
    "&client_id=" +
    CLIENT_ID +
    "&response_type=token&redirect_uri=" +
    LOGIN_REDIRECT_URL_ONBOARD +
    "&scope=" +
    SCOPE;
export const RELOGIN = "http%3A%2F%2Flocalhost:3000%2FRelogin";
export const LOGOUT_NEWUSER =
    "https://login.microsoftonline.com/" +
    MICROSOFT_ACNT +
    "/oauth2/logout?client_id=" +
    CLIENT_ID +
    "&post_logout_redirect_uri=" +
    RELOGIN;
export const LOGOUT =
    "https://login.microsoftonline.com/" +
    MICROSOFT_ACNT +
    "/oauth2/logout?client_id=" +
    CLIENT_ID +
    "&post_logout_redirect_uri=" +
    LOGOUT_REDIRECT_URL;
export const API = "https://try3-wi7wz2-api.azurewebsites.net/api/v2/";
export const GET_USER_INFO = API + "users/me";
export const maxContracts = 100;
export const GET_ROLE_ASSIGNMENTS =
    API + "applications/1/roleAssignments?top=" + maxContracts;
export const GET_CONTRACT_INFO =
    API + "contracts?workflowId=1&top=" + maxContracts;
export const GET_CONTRACTS = API + "contracts/";
export const GET_TOKEN =
    "https://login.microsoftonline.com/" + MICROSOFT_ACNT + "/oauth2/v2.0/token";
export const POST_TOKEN = API + "contracts/";
