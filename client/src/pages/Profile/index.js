import { Text, Button } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    logout(() => {
      navigate('/');
    });
  };
  return (
    <div>
      <Text className='text-2xl font-bold'>Profile</Text>
      <code>{JSON.stringify(user)}</code>
      <div>
        <Button colorScheme='blue' variant='solid' onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Profile;
