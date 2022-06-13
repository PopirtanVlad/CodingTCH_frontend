import RestApiClient, {HOST, TokenHeader} from "./Commons";

const submissionsBase = "/submissions"
const endpoints = {
    ALL_SUBMISSIONS: "/all",
    SEND_SUBMISSION: "/add"
}

export function getAllSubmissions(callback){
    let request = new Request(HOST + submissionsBase + endpoints.ALL_SUBMISSIONS, {
        method: 'GET',
        headers: {
            'Authorization': "Bearer " + sessionStorage.getItem(TokenHeader),
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    RestApiClient.performRequest(request, callback)
}

export function getSubmissionByID(id, callback){
    let request = new Request(HOST + submissionsBase + '/' + id, {
        method: 'GET',
        headers: {
            'Authorization': "Bearer " + sessionStorage.getItem(TokenHeader),
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    RestApiClient.performRequest(request, callback)
}

export function sendSubmission(submissionDetails, callback){
    let request = new Request(HOST + submissionsBase + endpoints.SEND_SUBMISSION, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem(TokenHeader),
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(submissionDetails)
    })
    RestApiClient.performRequest(request, callback)
}
