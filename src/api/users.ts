import { UsersCodec, type UsersResponse } from "~/components/users/users.types";
import { endpoint, fetchAndValidate } from "./api.utils";

export function getUsers(): Promise<UsersResponse> {
  return fetchAndValidate(endpoint.users, UsersCodec);
}
