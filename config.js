
module.exports = {
  // port: 7000,
  mysql: {
    host: process.env.MYSQL_HOST || 'apps.ccollege.ac.th',
    port: process.env.MYSQL_PORT || 34001,
    user: process.env.MYSQL_USER || 'root',
    pass: process.env.MYSQL_PASS || 'mysql1234',
  },
  socket: {
    url: 'https://socket.bpcd.xenex.io',
    user: 'bpcd',
    pass: 'bpcd!@1234',
  },
}