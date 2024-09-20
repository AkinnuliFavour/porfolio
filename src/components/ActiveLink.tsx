import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ActiveLink = ({ to, children }: { to: string, children: React.ReactNode }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            className={`hover:bg-gradient-to-r from-cyan-500 to-orange-400 hover:text-transparent hover:bg-clip-text drop-shadow-2xl transition-colors duration-200 
          ${isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-orange-400 text-transparent bg-clip-text drop-shadow-2xl'
                    : 'text-[#808080] font-bold'
                }
        `}
        >
            {children}
        </Link>
    );
};

export default ActiveLink;