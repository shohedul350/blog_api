import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Get()
  async findAll() {
    const result = this.postsService.findAll();
    return result;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
     const result = await this.postsService.findOne(id);
     if(!result)throw new NotFoundException("Data Not Found")
     return result
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    const result = await this.postsService.findOne(id);
    if(!result)throw new NotFoundException("Data Not Found")
    return this.postsService.update(id, updatePostDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.postsService.findOne(id);
    if(!result)throw new NotFoundException("Data Not Found")
    return this.postsService.remove(id);
  }
}
