const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    stack: { type: [String], required: true },
    userId: { type: String, required: true },
    author: { type: String, required: true },
    email: { type: String, required: true },
});

// Add `id` field in JSON responses
projectSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
    },
});

module.exports = mongoose.model('Project', projectSchema);
