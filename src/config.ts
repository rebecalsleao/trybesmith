import * as dotenv from 'dotenv';

dotenv.config();

// prettier-ignore
export const { 
  MYSQL_USER, 
  MYSQL_PASSWORD, 
  MYSQL_HOST, 
  JWT_SECRET, 
  PORT } = process.env;
