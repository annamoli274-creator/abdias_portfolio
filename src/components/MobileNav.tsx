import React, { useState } from 'react';

interface MobileNavProps {
  links: { href: string; label: string }[];
}

const MobileNav: React.FC<MobileNavProps> = ({ links }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        aria-label="Toggle navigation"
        className="text-white focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        {/* Hamburger icon */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {open ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      {open && (
        <ul className="absolute top-full left-0 w-full bg-dark border-t border-slate-800 flex flex-col items-center py-4 space-y-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MobileNav;
