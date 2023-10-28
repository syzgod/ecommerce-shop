import React from 'react';

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  rest?: any;
}

const Button = ({
  className,
  children,
  type = 'button',
  ...rest
}: ButtonProps) => {
  return (
    <button className={className} type={type} {...rest}>
      {children}
    </button>
  );
};

export default Button;
