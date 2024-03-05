import { createPool, Pool, PoolOptions } from 'mysql2';
import infoLogs, { LogTypes } from '../utils/logger.utils';

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env;

let pool: Pool;

export const connectToDatabase = () => {
  const options: PoolOptions = {
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
  };

  pool = createPool(options);

  pool.getConnection((err, connection) => {
    if (err) {
      // Log an error message if the connection to MySQL fails
      infoLogs(`Failed to connect to MySQL: ${err}`, LogTypes.ERROR_LOG);
      throw err;
    }
    console.log("Connected to MySQL server");
    // Log a message when successfully connected to MySQL
    infoLogs('Connected to MySQL', LogTypes.INFO);

    // Release the connection
    connection.release();
  });
};

export const getDatabaseConnection = () => {
  if (!pool) {
    throw new Error('Database connection not established');
  }

  return pool;
};
