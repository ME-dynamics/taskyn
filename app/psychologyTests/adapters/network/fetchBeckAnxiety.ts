import { request } from "../../../library";
import { parseTest } from "../utils"


export async function fetchBeckAnxiety() {
    const { success, error, httpStatus, payload } = await request({
        endpoint: "/tests/beckAnxiety",
        method: "GET",
        body: undefined,
    });
    if (!success || !payload) {
        return {
            error,
            beckAnxiety: {
                id: "",
                title: {
                    fa: "",
                    en: "",
                },
                description: "",
                fields: {},
            },
        };
    }
    return {
        error: "",
        beckAnxiety: parseTest(payload),
    };
}