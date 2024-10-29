import Link from "next/link";
import { openSans } from "./font";
import clsx from "clsx";
interface breadcrumb{
    label: string,
    href: string,
    isActive?: boolean
}

export default function Breadcrumbs({breadcrumbs}:{breadcrumbs:breadcrumb[]}){
    return(
        <nav>
            <ol className={clsx(openSans.className, 'flex')}>
                {breadcrumbs.map((breadcrumb, index) => (
                    <li key={breadcrumb.href}>
                        <Link href={breadcrumb.href} className={clsx('text-2xl', {'font-bold': breadcrumb.isActive})}>
                        {breadcrumb.label}
                        {index < breadcrumbs.length-1 ? (<span>/</span>):null}
                        </Link>
                    </li>
                ))}
            </ol>
        </nav>
    )
}