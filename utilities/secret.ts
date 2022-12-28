export const DB_CONFIG = {
  USER: process.env.MONGODB_USER || "root",
  PASSWORD: process.env.MONGODB_PASSWORD || "root",
  DATABASE: process.env.MONGODB_DATABASE || "trua_nay_an_gi",
  HOST: process.env.MONGODB_PASSWORD || "localhost",
  PORT: process.env.MONGODB_LOCAL_PORT || "27017",
};
