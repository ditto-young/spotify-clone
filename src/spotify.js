//https://developer.spotify.com/
//documentation/web-playback-sdk/quick-start/#

//1. click login button
//2. redirect to spotify login page
//3. redirect to home page once logged in

//로그인 누르면.. 로그인 되게 하는.. 그런기능..
export const authEndpoint =
    "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "9dcf0da107f44112ba5a4c7e61e49622";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            // #accessToken=mysupersecretkey&name=young
            let parts = item.split("=");
            initial[parts[0]] = 
            decodeURIComponent(parts[1]);

            return initial;
        },{});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
