module.exports = {
  apps : [{
    name: 'cc-site-current',
    script: 'app.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      GOOGLE_RECAPTCHA_SECRET_KEY: '6LfqH30UAAAAABumDjCGW3vI-FdCD1Da8zUtq8L4',
      MAIL_USERNAME: 'code.care.pro@gmail.com',
      MAIL_PASS: 'Sandora5',
      MAIL_TO_NEW_CLIENT: 'dianabojko94@gmail.com',

    },
    env_production: {
      NODE_ENV: 'production',
      GOOGLE_RECAPTCHA_SECRET_KEY: '6LfqH30UAAAAABumDjCGW3vI-FdCD1Da8zUtq8L4',
      MAIL_USERNAME: 'code.care.pro@gmail.com',
      MAIL_PASS: 'Sandora5',
      MAIL_TO_NEW_CLIENT: 'dianabojko94@gmail.com',

    },
    port: 8000
  }],

  deploy : {
    production : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
