import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { Post, PostDocument } from '../schemas/post.schema';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

  async create(createCatDto: CreatePostDto): Promise<Post> {
    const createdCat = new this.postModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Post[]> {
    return this.postModel.find();
  }

  async findOne(id: string): Promise<Post[]> {
    return this.postModel.findById(id);
  }

  async update(id: string, data: any): Promise<Post[]> {
    return this.postModel.findByIdAndUpdate(id, data);
  }
  async remove(id: string): Promise<Post[]> {
    return this.postModel.findByIdAndRemove(id);
  }
}
