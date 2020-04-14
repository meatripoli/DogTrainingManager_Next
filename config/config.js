module.exports = {
    development: {
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_KEY,
      database: process.env.MYSQL_DBNAME,
      host: process.env.MYSQL_HOST,
      dialect: "mysql"
    },
    test: {
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_KEY,
      database: "testdb",
      host: process.env.MYSQL_HOST,
      dialect: "mysql"
    },
    production: {
        username: process.env.jawsdb_username,
        password: process.env.jawsdb_password,
        database: "database_production",
        host: process.env.jawsdb_host,
        dialect: "mysql",
        dialectModule: require('mysql2'),
        operatorsAliases: false
    }
    
  };

  /*
  production: {
      use_env_variable: "JAWSDB_URL",
      dialect: "mysql"
    },
  */