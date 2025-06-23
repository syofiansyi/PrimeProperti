// resources/js/Components/Sidebar.tsx
import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { PageProps } from '@/types';

interface Props {
  open: boolean;
}

export default function Sidebar({ open }: Props) {
  const { url } = usePage<PageProps>();

  const isActive = (path: string) => url.startsWith(path);

  const menu = [
 
    { name: 'Products', href: '/products' },
    { name: 'Blogs', href: '/blogs' },
       { name: 'Rating', href: '/ratings' },
         { name: 'Sosmed', href: '/sosmeds' },
  ];

  return (
    <div
      className={`w-64 bg-white border-r shadow-md transition-all duration-300 ease-in-out 
      ${open ? 'block' : 'hidden'} 
      lg:block`}
    >
      <div className="h-full flex flex-col items-start p-4 space-y-4 text-left">
        <h2 className="text-xl font-bold text-gray-800"><Link href="/">
        My App
        </Link></h2>
        <nav className="flex flex-col space-y-2 w-full">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-3 py-2 rounded w-full text-left transition
                ${isActive(item.href)
                  ? 'bg-blue-100 text-blue-700 font-semibold'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'}
              `}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
