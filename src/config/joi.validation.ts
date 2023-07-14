import * as Joi from 'joi';

export const JoiValidatorSchema = Joi.object({
    MODE_ENV: Joi.required(),
    MONGODB: Joi.required(),
    PORT: Joi.number().default(3000),
    DEFAULT_LIMIT: Joi.number().default(10),
});
