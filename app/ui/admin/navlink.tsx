'use client';

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {ChartBarIcon, GlobeAsiaAustraliaIcon, ChevronDoubleRightIcon, TicketIcon, ClipboardDocumentCheckIcon} from '@heroicons/react/24/solid'


const links = [
    {name: 'Dashboard', href: '/admin/dashboard', icon: ChartBarIcon},
    {name: 'Flight', href: '/manage/flight', icon: GlobeAsiaAustraliaIcon},
    {name: 'Route', href: '/manage/route', icon: ChevronDoubleRightIcon},
    {name: 'Boarding pass', href: '/use/boarding-pass', icon: TicketIcon},
    {name: 'Check in', href: '/use/check-in', icon: ClipboardDocumentCheckIcon},
]


export default function AdminNavLink(){
    const pathname = usePathname();
    return(
        <>
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <div className="flex my-[20px]" key={link.name}>
            <Link
              href={link.href}
              className={clsx(
                'flex w-full rounded-xl px-[20px] text-3xl justify-start drop-shadow-lg items-center py-[10px] text-begin mx-[20px] ', pathname === link.href ? 'bg-primary text-white font-bold' : 'bg-white text-black',)}>
              <Icon className="w-6 mr-[10px]"/>
              <p className="hidden md:block">{link.name}</p>
            </Link>
            </div>
          );
        })}
      </>
    );
}