const Koa = require('koa');
const mongo = require('koa-mongo')
const next = require('next');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const bodyParser = require('koa-bodyparser');
const session = require('koa-session');
const env = require('dotenv').config();
fs = require('fs');
const { ApolloServer } = require("apollo-server-koa");
const typeDefs = require('./schema');
const resolvers = require("./resolvers");

const graphQLServer = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    playground: {
        endpoint: "/graphql"
    },
    bodyParser: true
});

app.use(mongo({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    db: process.env.DB_NAME,

}));
app.use(bodyParser());
app.use(session(app));
app.keys = ['107']
const nextApp = next({ dev: true });
const handler = nextApp.getRequestHandler();

(async () => {
    try {
        nextApp.prepare()

        graphQLServer.applyMiddleware({
            app: app
        });

        router.get('(.*)', async ctx => {
            if (!ctx.path.match(/graphql/)) {
                await handler(ctx.req, ctx.res);
                ctx.respond = false;
            }
        });

        app
            .use(router.allowedMethods())
            .use(router.routes())
        app.listen(3000, (_) => { console.log('Server run at port 3000') });

    } catch (e) {
        console.error(e);
        process.exit();
    }
})();

