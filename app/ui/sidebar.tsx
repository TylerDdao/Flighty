import Link from 'next/link';
// import clsx from 'clsx';
import AdminNavLink from './admin/navlink';
import {UserCircleIcon} from "@heroicons/react/24/solid"

export default async function SideNav() {
    return (
    <div className="h-screen top-0 justify-center fixed">
        <div className='bg-slate-200 h-screen  flex flex-col'>
         <div className='w-full flex justify-center mt-[20px] '>
            <div className='w-[150px]'><img src='/logo/logo-primary-color.png'/></div>
        </div>

        <div className='w-full mt-[30px] '><AdminNavLink/></div>
        <div className='grow'></div>
            <div className='flex mx-[20px]'><Link className='flex my-[10px] bg-white w-full py-[10px] rounded-lg text-3xl text-begin px-[20px] drop-shadow-xl' href='/account'>
            <UserCircleIcon className='w-6 mr-[10px]'/>
            <p>Account</p>
            </Link></div>
            <div className='my-[10px] mx-[20px]'><button className='bg-white w-full py-[10px] rounded-lg text-3xl drop-shadow-xl'>Sign Out</button></div>
        
        <div className=''>
            </div>
        </div>
    </div>
    );
  }