import { pipe } from "fp-ts/lib/function";
import * as O from "fp-ts/lib/Option";

export function getErrorMessage(error: unknown) {
  return pipe(
    O.fromNullable(error),
    O.filter((err) => err instanceof Error),
    O.map((err) => err.message),
    O.getOrElse(() => "An unexpected error occurred."),
  );
}
