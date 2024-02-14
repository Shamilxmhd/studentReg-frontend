import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./serverUrl";

// registerAPI
export const registerAPI = async (student) => {
    return await commonAPI("POST", `${SERVER_URL}/register`, student, "")
}

// allstudentsAPI

export const getDetailsAPI = async () => {
    return await commonAPI("GET", `${SERVER_URL}/details`, '', '')
}