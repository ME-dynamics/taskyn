import { request } from "../../../library";




export async function fetchCustomers() {
    const { success, error, httpStatus, payload } = await request({
        endpoint: `/provider/customers`,
        method: "GET",
        body: undefined,
    });
    if (!success || !payload) {
        return {
        error,
        customers: [],
        };
    }
    return {
        error: "",
        customers: payload,
    };
}