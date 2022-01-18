export const dbPort = {
  dbport: process.env.PGPORT,
  dbhost: process.env.PGHOST,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  dbname: process.env.PGDATABASE,
};

console.log(dbPort);
