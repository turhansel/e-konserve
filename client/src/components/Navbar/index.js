import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

const Navbar = () => {
	return (
		<nav className='flex items-center justify-between border-b border-b-slate-200  p-3'>
			<div className='flex'>
				<div className=''>
					<Link to='/'>eCommerce</Link>
				</div>
				<ul className='ml-10 flex'>
					<li>
						<Link to='/'>Products</Link>
					</li>
				</ul>
			</div>
			<div className='space-x-2'>
				<Link to='/signin'>
					<Button colorScheme='pink'>Login</Button>
				</Link>
				<Link to='/signup'>
					<Button colorScheme='pink'>Register</Button>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
