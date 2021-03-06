const mongoose = require('mongoose');
const albumSchema = new mongoose.Schema(
    {
        photoIds : [
            {
                type: mongoose.SchemaTypes.ObjectId,
                ref: 'Photo',
                default: [],
            },
        ],
        creator: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'User',
            required: true,
        },
        views: {
            type: Number,
            default: 0,
        },
        description: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
        toJSON: {
            transform: function (doc, ret, options) {
                ret.numberOfPhotos = ret.photoIds.length;
                delete ret.photoIds;
            }
        }
    }
);
//virtuals
albumSchema.virtual('photos', {
    ref: 'Photo',
    localField: 'photoIds',
    foreignField: '_id',
});

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;
