'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/newapp_dev'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/newapp_test'
  },

  production: {}
};
