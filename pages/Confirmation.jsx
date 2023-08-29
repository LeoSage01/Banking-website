import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Confirmation = () => {
  const navigate = useNavigate();

  // Use a timer to navigate to the sign-up page after 1 minute
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/signin');
    }, 3000); // 1 minute in milliseconds

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, [navigate]);

  return (
    <div>
      <p>Head to your email to confirm your Email Account</p>
    </div>
  );
};

export default Confirmation;