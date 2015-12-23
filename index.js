/**
 * Created by garfieldgordon on 23/12/2015.
 */
var app = require('koa')();
var bs = require('browser-sync').create();
var html =
    `<html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Test</title>
    </head>
    <body>
      <p>Tested</p>
      </body>
    </html>
    `;


app.use(function *() {
  if (this.request.path === '/client') {
    this.body = html;
    return;
  }
  this.body = 'Koa says Hi!';
});

var port = process.env.PORT || (process.argv[2] || 4000);
port = (typeof port === 'number') ? port : 4000;
if (!module.parent) {
  app.listen(port, function(){
    bs.init({
      proxy: 'localhost:' + port,
      open: false,
      files: ['public/**/*'],
    });
  });
}
console.log('Application started. Listening on port:' + port);
module.exports = app;