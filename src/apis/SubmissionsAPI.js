import RestApiClient, {HOST, TokenHeader} from "./Commons";

const problemsBase = "/submissions"
const endpoints = {
    ALL_SUBMISSIONS: "/all",
}

export function getAllProblems(callback){
    let request = new Request(HOST + +problemsBase + endpoints.ALL_SUBMISSIONS, {
        method: 'GET',
        headers: {
            'Authorization': "Bearer " + sessionStorage.getItem(TokenHeader)
        }
    });
    RestApiClient.performRequest(request, callback)
}