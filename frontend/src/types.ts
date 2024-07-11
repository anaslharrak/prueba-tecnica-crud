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
    surename: string;
    email?: string;
    address: Address;
    profileImage?: mongoose.Types.ObjectId;
    creationDate: Date;
  }