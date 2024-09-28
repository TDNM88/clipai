/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:xWef82OdXTnv@ep-late-snow-a5ici5x9.us-east-2.aws.neon.tech/neondb?sslmode=require',
    }
};