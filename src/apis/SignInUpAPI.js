import {HOST, TokenHeader} from "./Commons";
import RestApiClient from "./Commons"

const endpoint = {
    SIGN_IN: `/api/auth/signin`,
    SIGN_UP: `/api/auth/signup`,
    GET_USER: '/api/user/me'
}

export function login(signInRequest, callback){
    let request = new Request(HOST + endpoint.SIGN_IN, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(signInRequest)
    });
    RestApiClient.performRequest(request, callback)
}

export function jwtLogin(callback){
    let request = new Request(HOST + endpoint.GET_USER, {
        method: 'GET',
        headers: {
            'Authorization': "Bearer " + sessionStorage.getItem(TokenHeader),
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    RestApiClient.performRequest(request, callback)
}

export function signUp(signUpRequest, callback){
    let request = new Request(HOST + endpoint.SIGN_UP, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(signUpRequest)
    });
    RestApiClient.performRequest(request, callback)
}