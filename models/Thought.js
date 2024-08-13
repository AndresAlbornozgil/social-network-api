const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min_length: 1,
            max_length: 280,
        },
        createdAt: {
            type: Date,
            // Set date by setting default value to the current timestamp and using a getter method to format the timestamp on query
            default: () => new Date()
        },
        username: {
            type: String,
            required: true,
        },
        reactions: {
            // Array of nested documents created with the reactionSchema
        }
    }
);

// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
