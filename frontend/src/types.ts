import mongoose from 'mongoose';

interface Address {
    street?: string;
    city: string;
    postalCode?: string;
    country: string;
  }
  
export interface User {
    _id: mongoose.Types.ObjectId;
    name: string;
    surname: string;
    email?: string;
    phone?: string;
    birthDate: Date;
    genre: string;
    address: Address;
    profileImage?: mongoose.Types.ObjectId;
    creationDate: Date;
  }