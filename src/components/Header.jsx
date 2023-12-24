import React, { useState } from 'react';

const Header = () => {
  const [isActive, setIsActive] = useState(true);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  return (
    <div className='header-container'>
      <div className='header-inner'>
        <div className='logo'>I.G</div>
        <div className='navbar-container'>
          <ul className={isActive ? 'navbar' : 'active'}>
            <li>about me</li>
            <li>skils</li>
            <li>education</li>
            <li>projects</li>
            <li>contacts</li>
          </ul>

          <ul className={isActive ? 'icon-navbar' : 'icon-active'}>
            <li>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='ionicon'
                height='2em'
                viewBox='0 0 512 512'
              >
                <path
                  d='M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z'
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='32'
                />
                <path
                  d='M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z'
                  fill='none'
                  stroke='currentColor'
                  stroke-miterlimit='10'
                  stroke-width='32'
                />
              </svg>
              {/* <p>about me</p> */}
            </li>
            <li>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='ionicon'
                viewBox='0 0 512 512'
              >
                <path
                  d='M436.67 184.11a27.17 27.17 0 01-38.3 0l-22.48-22.49a27.15 27.15 0 010-38.29l50.89-50.89a.85.85 0 00-.26-1.38C393.68 57 351.09 64.15 324.05 91c-25.88 25.69-27.35 64.27-17.87 98a27 27 0 01-7.67 27.14l-173 160.76a40.76 40.76 0 1057.57 57.54l162.15-173.3a27 27 0 0126.77-7.7c33.46 8.94 71.49 7.26 97.07-17.94 27.49-27.08 33.42-74.94 20.1-102.33a.85.85 0 00-1.36-.22z'
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-miterlimit='10'
                  stroke-width='32'
                />
                <path
                  d='M224 284c-17.48-17-25.49-24.91-31-30.29a18.24 18.24 0 01-3.33-21.35 20.76 20.76 0 013.5-4.62l15.68-15.29a18.66 18.66 0 015.63-3.87 18.11 18.11 0 0120 3.62c5.45 5.29 15.43 15 33.41 32.52M317.07 291.3c40.95 38.1 90.62 83.27 110 99.41a13.46 13.46 0 01.94 19.92L394.63 444a14 14 0 01-20.29-.76c-16.53-19.18-61.09-67.11-99.27-107'
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='32'
                />
                <path
                  d='M17.34 193.5l29.41-28.74a4.71 4.71 0 013.41-1.35 4.85 4.85 0 013.41 1.35h0a9.86 9.86 0 008.19 2.77c3.83-.42 7.92-1.6 10.57-4.12 6-5.8-.94-17.23 4.34-24.54a207 207 0 0119.78-22.6c6-5.88 29.84-28.32 69.9-44.45A107.31 107.31 0 01206.67 64c22.59 0 40 10 46.26 15.67a89.54 89.54 0 0110.28 11.64 78.92 78.92 0 00-9.21-2.77 68.82 68.82 0 00-20-1.26c-13.33 1.09-29.41 7.26-38 14-13.9 11-19.87 25.72-20.81 44.71-.68 14.12 2.72 22.1 36.1 55.49a6.6 6.6 0 01-.34 9.16l-18.22 18a6.88 6.88 0 01-9.54.09c-21.94-21.94-36.65-33.09-45-38.16s-15.07-6.5-18.3-6.85a30.85 30.85 0 00-18.27 3.87 11.39 11.39 0 00-2.64 2 14.14 14.14 0 00.42 20.08l1.71 1.6a4.63 4.63 0 010 6.64L71.73 246.6a4.71 4.71 0 01-3.41 1.4 4.86 4.86 0 01-3.41-1.35l-47.57-46.43a4.88 4.88 0 010-6.72z'
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='32'
                />
              </svg>
            </li>
            <li>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='ionicon'
                viewBox='0 0 512 512'
              >
                <path
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='32'
                  d='M32 192L256 64l224 128-224 128L32 192z'
                />
                <path
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='32'
                  d='M112 240v128l144 80 144-80V240M480 368V192M256 320v128'
                />
              </svg>
            </li>
            <li>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='ionicon'
                viewBox='0 0 512 512'
              >
                <path
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='32'
                  d='M304 160l-64-64 64-64M207 352l64 64-64 64'
                />
                <circle
                  cx='112'
                  cy='96'
                  r='48'
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='32'
                />
                <circle
                  cx='400'
                  cy='416'
                  r='48'
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='32'
                />
                <path
                  d='M256 96h84a60 60 0 0160 60v212M255 416h-84a60 60 0 01-60-60V144'
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='32'
                />
              </svg>
            </li>
            <li>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='ionicon'
                viewBox='0 0 512 512'
              >
                <path
                  d='M408 64H104a56.16 56.16 0 00-56 56v192a56.16 56.16 0 0056 56h40v80l93.72-78.14a8 8 0 015.13-1.86H408a56.16 56.16 0 0056-56V120a56.16 56.16 0 00-56-56z'
                  fill='none'
                  stroke='currentColor'
                  stroke-linejoin='round'
                  stroke-width='32'
                />
                <circle cx='160' cy='216' r='32' />
                <circle cx='256' cy='216' r='32' />
                <circle cx='352' cy='216' r='32' />
              </svg>
            </li>
          </ul>

          <div className={isActive ? 'header-icon' : 'active-icon'}>
            <svg
              onClick={toggleClass}
              xmlns='http://www.w3.org/2000/svg'
              class='ionicon'
              height='2em'
              viewBox='0 0 512 512'
            >
              <path
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-miterlimit='10'
                stroke-width='32'
                d='M80 160h352M80 256h352M80 352h352'
              />
            </svg>
          </div>
          <div className={isActive ? 'close-icon' : 'active-close'}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='ionicon'
              height='2em'
              onClick={toggleClass}
              viewBox='0 0 512 512'
            >
              <path
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='32'
                d='M368 368L144 144M368 144L144 368'
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
