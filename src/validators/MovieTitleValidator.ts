import Joi from "joi";

const MovieTitleValidator = Joi.object({
    movieTitle: Joi.string().pattern(/^[^-\s][A-Za-z0-9 _]+/).required().messages({
        "string.pattern.base": "Types min 2 characters or numbers to search a movie without special symbols. Movie title must not start with space"
    })
})

export {MovieTitleValidator}