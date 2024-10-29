'use client'
import { openSans } from '@/app/ui/font';
import Link from 'next/link';

export default function LoginForm(){
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission
        console.log('Submitted'); // Log to console when form is submitted
        // Optionally log the name and email
      };

    return(
        <div className={`${openSans.className} flex justify-center`}>
        <form className="bg-slate-200 px-[50px] text-center rounded-xl" onSubmit={handleSubmit}>
        <div className='font-bold text-5xl text-primary text-center mt-[20px]'>Login</div>
            <input 
            className="w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 mt-[50px]"
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
            />
            <input 
            className="w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 mt-[20px] pr-[10px]"
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            required
            />
            <div className='flex justify-around my-[30px]'>
                <Link href='/'><button className='bg-white drop-shadow-xl rounded-xl py-[10px] px-[30px] text-3xl'>Cancel</button></Link>
                <button className='bg-primary drop-shadow-xl rounded-xl py-[10px] px-[30px] text-3xl text-white font-bold' type='submit'>Log in</button>
            </div>
        </form>
    </div>
)}