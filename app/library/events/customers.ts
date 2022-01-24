import { events } from "./eventSingleton"



export function retrieveCustomersEvent() {
    events.emit("retrieveCustomers");
}


export function onRetrieveCustomersEvent(callback: (event: any) => void) {
    return events.on("retrieveCustomers", callback);
}