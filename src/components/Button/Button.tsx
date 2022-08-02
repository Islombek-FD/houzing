import React from 'react';
import classNames from 'classnames';

interface IProps {
   variant?: 'blue' | 'outline-blue' | 'outline-muted' | 'outline-white';
   type?: 'button' | 'submit' | 'reset';
   full?: boolean;
   px?: string;
   onClick?: () => void;
   children: React.ReactNode;
}

const Button: React.FC<IProps> = (props) => {
   const { variant='blue', type='button', full, px='14', onClick, children } = props;

   const className = classNames(
      `flex gap-x-[10px] items-center py-3 px-${px} 
         bg-${variant === 'blue' ? 'blue' : 'transparent'} 
         text-${variant === 'outline-muted' ? 'black' : variant === 'outline-blue' ? 'blue' : 'white'}
         border border-${variant === 'outline-white' ? 'white' : variant === 'outline-muted' ? 'muted' : 'blue'}
         hover:opacity-75      
      `,
      {'w-full': full}
   )

   return (
      <button 
         onClick={onClick && onClick}
         className={className}
         type={type}
      >
         {children}
      </button>
   )
}

export default Button;