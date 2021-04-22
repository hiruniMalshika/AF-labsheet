const Koa = require('koa');
const HomeRoutes = require('./routes/home.routes');
const PostsRoutes = require('./routes/posts.routes');
const bodyParser = require('koa-bodyparser');
const dal = require('./dal');

const app = new Koa();
app.use(bodyParser());
app.use(HomeRoutes.routes())
    .use(HomeRoutes.allowedMethods());

app.use(PostsRoutes.routes())
    .use(PostsRoutes.allowedMethods());



console.log("Server is running at port 3000");

app.listen(3000);