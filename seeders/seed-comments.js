const mongoose = require("mongoose");
const Comment = require("../models/comment");
const Place = require('../models/places')
require("dotenv").config();

async function seed() {
    await mongoose.connect(process.env.MONGO_URI)
    let place = await Place.findOne({ name: 'H-Thai-ML' })

    const commentsData = [
        {
            author: 'Famished Fran',
            rant: false,
            stars: 5.0,
            content: 'Wow, simply amazing! Highly recommended!'
        },
        {
            author: 'Hungry Helen',
            rant: true,
            stars: 3.0,
            content: 'Decent food, but the service could be better.'
        },
        {
            author: 'Satisfied Sam',
            rant: false,
            stars: 4.5,
            content: 'Great atmosphere and delicious food!'
        }
    ];

    const insertedComments = await Comment.insertMany(commentsData);
    const insertedCommentIds = insertedComments.map(comment => comment._id);
    
    place.comments.push(...insertedCommentIds);
    await place.save();
    process.exit();
}

seed()
