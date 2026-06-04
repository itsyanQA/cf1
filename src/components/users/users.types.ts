import * as t from "io-ts";

export const UserCodec = t.type({
  id: t.number,
  username: t.string,
  name: t.string,
});

export type User = t.TypeOf<typeof UserCodec>;

export const UsersCodec = t.array(UserCodec);

export type UsersResponse = t.TypeOf<typeof UsersCodec>;
