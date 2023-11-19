import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "./dojo-logo.png"
const Navbar = () => {
    return (
        <div>
             <nav className='   pb-4
    border-b-2 border-gray-200
    flex items-center gap-5 
    my-10 mx-auto 
    max-w-5xl'>
      <Image src={logo} alt='logo' width={70} height={70} placeholder='blur'/>
          <Link className='text-gray-500 text-primary underline' href="/">
            dashboard
          </Link>
          <Link href="/tickets">
            tickets
          </Link>
        </nav>
        </div>
    );
}

export default Navbar;
