import {Arg, Field, InputType, Mutation, Query, Resolver} from "type-graphql";
import Video from "./Video";
import VideoSchema from "../../models/VideoSchema";

@InputType()
class videoInput {
    @Field()
    description: string;
    @Field()
    name: string;
    @Field()
    category: string;
}

@Resolver(Video)
class VideoResolver {
    @Query(() => [Video])
    async videos() {
        const videos = await VideoSchema.find();
        return videos;
    }

    @Mutation(() => Video)
    async createCategory(@Arg("videoInput") videoInput: videoInput) {
        const video = await VideoSchema.create(videoInput);
        return video;
    }
}

export default VideoResolver;