import RestApiClient, {HOST, TokenHeader} from "./Commons";

const problemsBase = "/problems"
const endpoints = {
    ALL_PROBLEMS: "/all",
    ADD_PROBLEM: "/add",
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

export function saveProblem(problem, callback){
    let request = new Request(HOST + problemsBase + endpoints.ADD_PROBLEM, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem(TokenHeader),
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(problem)
    })
    RestApiClient.performRequest(request, callback)
}
