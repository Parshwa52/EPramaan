const next = require('next');
const routes = require('./routes');
const app = next({dev: process.env.NODE_ENV !== 'production'});    //look at the global env variable called environment
const handler = routes.getRequestHandler(app);


const {createServer} = require('http');
app.prepare().then(() => {
  createServer(handler).listen(3000, (err)=> {
    if(err) throw err;
  });
});
