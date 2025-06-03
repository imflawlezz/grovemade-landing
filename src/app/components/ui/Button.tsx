import React from 'react';
import clsx from 'clsx';

type ButtonProps = {
    children: React.ReactNode;
    color?: string;
    className?: string;
    onClick?: () => void;
};

const Button = ({ children, color = 'black', className = '', onClick }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={clsx(
                'relative transition-colors duration-300 text-xs tracking-widest',
                color,
                className
            )}
        >
      <span className="relative after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">
        {children}
      </span>
        </button>
    );
};

export default Button;
