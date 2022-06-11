import RestApiClient, {HOST, TokenHeader} from "./Commons";

const submissionsBase = "/submissions"
const endpoints = {
    ALL_SUBMISSIONS: "/all",
}

export function getAllSubmissions(callback){
    let request = new Request(HOST + +submissionsBase + endpoints.ALL_SUBMISSIONS, {
        method: 'GET',
        headers: {
            'Authorization': "Bearer " + sessionStorage.getItem(TokenHeader),
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    RestApiClient.performRequest(request, callback)
}