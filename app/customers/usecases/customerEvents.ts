import { onRetrieveCustomersEvent } from "../../library";
import { retrieveCustomers } from "./retrieveCustomers";

async function retrieveCustomersEventHandler() {
  await retrieveCustomers();
}

const retrieveCustomersEvent = onRetrieveCustomersEvent(
  retrieveCustomersEventHandler
);
