import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between rounded-3xl bg-gradient-to-t from-indigo-400 to-[#32f9b0] p-4 mix-blend-hard-light shadow-lg backdrop-blur-2xl '>
      <div className='flex'>
        <div className=''>
          <Link to='/' className='font-bold'>
            e-Konserve
          </Link>
        </div>
        <ul className='ml-10 flex'>
          <li>
            <Link to='/'>Products</Link>
          </li>
        </ul>
      </div>
      <div className='space-x-2'>
        <Link to='/signin'>
          <Button colorScheme='orange'>Login</Button>
        </Link>
        <Link to='/signup'>
          <Button colorScheme='orange'>Register</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
