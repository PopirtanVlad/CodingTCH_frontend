import RestApiClient, {HOST, TokenHeader} from "./Commons";

const problemsBase = "/problems"
const endpoints = {
    ALL_PROBLEMS: "/all",
}

export function getAllProblems(callback){
    let request = new Request(HOST + problemsBase + endpoints.ALL_PROBLEMS, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem(TokenHeader)
        }
    });
    RestApiClient.performRequest(request, callback)
}