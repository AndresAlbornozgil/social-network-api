const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            // Use Mongoose's ObjectId data type & Default value is set to a new ObjectId
        },
        reactionBody: {
            type: String,
            required: true,
            max_length: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            // Set date by setting default value to the current timestamp and using a getter method to format the timestamp on query
            default: () => new Date()
        }
    }
);

// This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;
