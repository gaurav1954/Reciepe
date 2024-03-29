const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    cuisine: {
        type: [{
            type: String,
            enum: ['Italian', 'Chinese', 'Indian', 'French', 'Mexican', 'Japanese', 'Thai', 'American', 'Mediterranean', 'Spanish', 'Greek', 'Vietnamese', 'Korean', 'Other']
        }],
        default: ['Unknown'],
    },
    description: {
        type: String,
    },
    steps: {
        type: [String]
    },
    ingredients: {
        type: [String],
    },
    instructions: {
        type: String,
    },
    cookingTime: {
        type: Number,
    },
    difficultyLevel: {
        type: String,
        enum: ['Easy', 'Moderate', 'Difficult'],
    },
    image: {
        type: String,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    rating: {
        type: Number,
    },
    likes: {
        type: [mongoose.Schema.Types.ObjectId], // Array of user IDs who liked the recipe
        default: [], // Default value is an empty array
    }

});

module.exports = mongoose.model('Recipe', recipeSchema);
