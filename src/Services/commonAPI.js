import axios from "axios";

export const commonAPI = async (httpRequest, url, reBody, reqHeader) => {
    const reqConfig = {
        method: httpRequest,
        url,
        data: reBody,
        headers: reqHeader ? reqHeader : { "Content-Type": "application/json" }
    }
    return await axios(reqConfig).then((result) => {
        return result
    }).catch((err) => {
        return err
    })
}