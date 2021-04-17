module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '117.50.84.6'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapiBlog'),
        username: env('DATABASE_USERNAME', 'root'),
        password: env('DATABASE_PASSWORD', 'ljy960214'),
      },
      options: {},
    },
  },
});

