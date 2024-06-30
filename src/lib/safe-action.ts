import { createSafeActionClient } from "next-safe-action";

export const actionClient = createSafeActionClient({
  handleReturnedServerError(e: any) {
    return e.cause.err.message || e.message || "Oh no, something went wrong!";
  },
});
