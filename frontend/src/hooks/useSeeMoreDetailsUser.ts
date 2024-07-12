import { useNavigate } from 'react-router-dom';
import mongoose from 'mongoose';

export const useHandleSeeMoreDetails = () => {
  const navigate = useNavigate();

  return (id: mongoose.Types.ObjectId) => {
    navigate(`/api/user/${id}`);
  };
};