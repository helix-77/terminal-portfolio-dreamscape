import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Photos = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the upcoming page
    navigate('/upcoming');
  }, [navigate]);

  return null;
};

export default Photos;