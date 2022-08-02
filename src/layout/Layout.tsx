import React from 'react';

import Header from './Header';


interface IProps {
   children: React.ReactNode;
}

const Layout:React.FC<IProps> = ({ children }) => {
   return (
      <>
         <Header />

         <main>
            {children}
         </main>
      </>
   )
}

export default Layout;