import { NavLink } from 'react-router-dom';
import React from 'react';

interface NavElementProps {
  link?: string;
  icon: React.ReactElement;
  children: string;
}

const NavElement = ({ link = '#', icon, children }: NavElementProps) => {
  return (
    <NavLink to={link}>
      {icon}
      {children}
    </NavLink>
  );
};

export default NavElement;
