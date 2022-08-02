import React from 'react';

import { LoginIcon, MenuIcon } from '../../assets/icons';

const Header:React.FC = () => {
   return (
      <header className='bg-black py-3.5'>
         <div className="container">
            <div className='flex justify-between items-center'>
               <MenuIcon />

               <img src={require('../../assets/images/logo.png')} alt="Logo" />

               <LoginIcon />
            </div>
         </div>
      </header>
   )
}

export default Header;