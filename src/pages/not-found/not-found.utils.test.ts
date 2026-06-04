import { describe, it, expect } from "vitest";
import { getErrorMessage } from "./not-found.utils";

describe("getErrorMessage", () => {
  it("returns the error message for an Error instance", () => {
    expect(getErrorMessage(new Error("something broke"))).toBe("something broke");
  });

  it("returns the fallback for null", () => {
    expect(getErrorMessage(null)).toBe("An unexpected error occurred.");
  });

  it("returns the fallback for undefined", () => {
    expect(getErrorMessage(undefined)).toBe("An unexpected error occurred.");
  });

  it("returns the fallback for a plain string", () => {
    expect(getErrorMessage("oops")).toBe("An unexpected error occurred.");
  });

  it("returns the fallback for a plain object", () => {
    expect(getErrorMessage({ message: "nope" })).toBe("An unexpected error occurred.");
  });
});
