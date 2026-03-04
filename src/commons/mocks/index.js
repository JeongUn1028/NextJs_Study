import { setupServer } from "msw/node";
import { apis } from "./api";

const server = setupServer(...apis);

export { server };
