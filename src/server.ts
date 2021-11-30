import "reflect-metadata";
import "./utils/connection";
import {buildSchema} from "type-graphql";
import { ApolloServer } from "apollo-server";
import CategoryResolver from "./graphql/category/categoryResolver";
import VideoResolver from "./graphql/video/videoResolver";

async function bootstrap() {
    const schema = await buildSchema({
        resolvers: [CategoryResolver, VideoResolver]
    });

    const server = new ApolloServer({schema});

    server.listen({port: 4100}, () => console.log("Running"));
}

bootstrap();