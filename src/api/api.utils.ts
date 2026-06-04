export const BASE_API_URL = "https://jsonplaceholder.typicode.com";

export const endpoint = {
  users: `${BASE_API_URL}/users`,
  todos: `${BASE_API_URL}/todos`,
} as const;
