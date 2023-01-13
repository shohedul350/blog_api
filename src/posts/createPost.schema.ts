import * as joi from 'joi';

export const createPostSchema = joi.object({
  title: joi.string().required(),
  slug: joi.string().required(),
  authorID: joi.string().required(),
  summary: joi.string().required(),
});
