import { useNavigate } from 'react-router-dom';

export const useGoHomePage = () => {
  const navigate = useNavigate();

  return () => {
    navigate(`/api/users`);
  };
};