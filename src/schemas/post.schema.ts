import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post {
  @Prop()
  title: string;
  @Prop()
  slug: string;
  @Prop()
  authorID: string;
  @Prop()
  summary: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
