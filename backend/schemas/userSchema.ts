import mongoose from 'mongoose';

const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/; // Basic regex for email validation.
const phoneRegex = /^\+?[1-9]\d{1,14}$/; // Basic regex for validating international phone numbers.

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 50 },
  surname: { type: String, required: true, trim: true, maxlength: 50 },
  email: { 
    type: String, 
    required: false, 
    trim: true, 
    lowercase: true, 
    match: [emailRegex, 'Please enter a valid email address.'] 
  },
  phone: { 
    type: String, 
    required: false, 
    match: [phoneRegex, 'Please enter a valid phone number.'] 
  },
  birthDate: { 
    type: Date, 
    required: true,
    validate: {
      validator: function(value: Date) {
        // Does not allow future dates
        return value.getTime() < new Date().getTime();
      },
      message: 'Birth date cannot be in the future.'
    }
  },
  genre: { type: String, required: true, enum: ['Male', 'Female', 'Other'] },
  address: {
    street: { type: String, required: false, trim: true },
    city: { type: String, required: true, trim: true },
    postalCode: { type: String, required: false, trim: true },
    country: { type: String, required: true, trim: true }
  },
  profileImage: { type: mongoose.Schema.Types.ObjectId, ref: 'Image', required: false },
  creationDate: { 
    type: Date, 
    required: true,
    default: Date.now // Automatically assigns the current date on creation
  },
});

const User = mongoose.model('User', userSchema);

export default User;