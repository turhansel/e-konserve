import React from 'react';

const Error404 = () => {
  return (
    <main className='h-screen overflow-hidden  bg-white'>
      <div className='container z-10 mx-auto flex h-screen items-center justify-between px-6 pt-32 md:pt-0'>
        <div className='container relative mx-auto flex flex-col-reverse items-center justify-between px-6 lg:flex-row'>
          <div className='mb-16 w-full text-center md:mb-8 lg:text-left'>
            <h1 className='mt-12 text-center font-sans text-5xl font-light text-gray-700 md:mt-0 lg:text-left lg:text-8xl'>
              Sorry, this page isn&#x27;t available
            </h1>
            <button className='mt-16 w-36 border-2 border-gray-700 bg-yellow-300 px-2 py-2 text-lg font-light transition duration-200 ease-in hover:bg-yellow-400 focus:outline-none'>
              Go back home
            </button>
          </div>
          <div className='relative mx-auto block w-full max-w-md md:mt-0 lg:max-w-2xl'>
            <img src='/404.svg' alt='404 svg' />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Error404;
