import React from 'react';
import { FiBookOpen } from 'react-icons/fi';

export function StickyNavBar({ darkMood }) {
  const navList = ['Info', 'Projects', 'Contact Me'];

  return (
    <>
      <div className='sticky top-0 bg-white dark:bg-[#0a0c10] px-2 sm:px-4 pt-5 border dark:border-t-0 dark:border-x-0 border-t-black dark:border-b-white'>
        <div className='container flex justify-between flex-wrap items-center  mx-auto'>
          <div className='flex ml-[10rem] space-x-4'>
            <a href='#' className='flex items-center'>
              <img className='mr-3 h-6 sm:h-9' alt='My Image' />
              <span className='self-center text-xl font-bold whitespace-nowrap dark:text-white'>
                Michael Obele
              </span>
            </a>
          </div>
          <div>
            <ul className='flex flex-col mr-[28rem] mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
              <li>
                <a
                  href='#'
                  className='border-b-4 border-b-red-600 pr-4 pl-3 text-white bg-green-400 md:bg-transparent md:text-green-700 md:p-0 dark:text-white flex'
                  aria-current='page'>
                  <FiBookOpen className='mt-1' />
                  <span className='mx-1 self-center font-semibold whitespace-nowrap pb-[1rem] dark:text-white'>
                    Overview
                  </span>
                </a>
              </li>
              {navList.map((item, index) => (
                <li key={item}>
                  <a
                    key={index + '_' + item}
                    href='#'
                    className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-green-400 md:dark:hover:text-green dark:hover:bg-green-700 dark:hover:text-green md:dark:hover:bg-transparent dark:border-green-700'>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex flex-col mr-14 mt-4'>{/* Empty Div */}</div>
        </div>
      </div>
    </>
  );
}
