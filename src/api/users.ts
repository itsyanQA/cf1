import { endpoint } from "./api.utils";

export async function getUsers() {
  return fetch(endpoint.users).then((res) => res.json());
}
