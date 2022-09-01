import { createServer } from '@graphql-yoga/node'
import Cors from "micro-cors"
import typeDefs from "../../utils/api/typeDefs";
import resolvers from "../../utils/api/resolvers";
import { context } from '../../utils/api/context';

const cors = Cors()

const server = createServer({
    schema: {
        typeDefs: typeDefs,
        resolvers,
    },
    context,
    endpoint: '/api/graphql',
    // graphiql: false // uncomment to disable GraphiQL
})

export const config = {
    api: {
        bodyParser: false
    }
}

export default cors((req, res) => {
    if (req.method === 'OPTIONS') {
        return res.status(200).send();
    }
    return server(req, res);
});
