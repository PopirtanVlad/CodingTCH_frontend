import {HOST} from "./Commons";
import RestApiClient from "./Commons"

const endpoint = {
    SIGN_IN: `/api/auth/signin`,
    SIGN_UP: `/api/auth/signup`
}

export function login(signInRequest, callback){
    let request = new Request(HOST.BACKEND_API + endpoint.SIGN_IN, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(signInRequest)
    });
    RestApiClient.performRequest(request, callback)
}