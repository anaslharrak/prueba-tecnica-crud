import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

    name: { type: String, required: true },
    surename: { type: String, required: true },
    email: { type: String, required: false },
    address: {
        street: { type: String, required: false },
        city: { type: String, required: true },
        postalCode: { type: String, required: false },
        country: { type: String, required: true }
    },
    profileImage: { type: mongoose.Schema.Types.ObjectId, ref: 'Image', required: false},
    creationDate: { type: Date, required: true },
});

const User = mongoose.model('User', userSchema);

export default User;


