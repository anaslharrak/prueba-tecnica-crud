import { useNavigate } from 'react-router-dom';
import mongoose from 'mongoose';

export const useHandleEdit = () => {
  const navigate = useNavigate();

  return (id: mongoose.Types.ObjectId) => {
    navigate(`/api/user/${id}/edit`);
  };
};