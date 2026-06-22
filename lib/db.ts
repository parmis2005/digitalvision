import { Pool } from "pg";

declare global {
  var __digitalvisionPool: Pool | undefined;
}

function createPool() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("DATABASE_URL is not configured.");
  }

  return new Pool({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });
}

export const pool = global.__digitalvisionPool ?? createPool();

if (process.env.NODE_ENV !== "production") {
  global.__digitalvisionPool = pool;
}
