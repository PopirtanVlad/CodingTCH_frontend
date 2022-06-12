import RestApiClient, {HOST, TokenHeader} from "./Commons";
const testCasesBase = '/testcases'
const endpoints = {
    ADD_TESTCASE: "/add"
}

export function uploadTestCases(formData, callback){
    let request = new Request(HOST + testCasesBase + endpoints.ADD_TESTCASE, {
        method: 'POST',
        headers: {
            'Authorization': "Bearer " + sessionStorage.getItem(TokenHeader),
        },
        body: formData
    });
    RestApiClient.performRequest(request, callback)
}