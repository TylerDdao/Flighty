import clsx from "clsx";
import { ExclamationCircleIcon, CheckCircleIcon, ClockIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/solid";

import { openSans } from "../../font";
export default function FlightStatus({status}: {status:string}){
    let Icon = QuestionMarkCircleIcon;
    if(status === "On Time"){
        Icon = CheckCircleIcon;
    }
    if(status === "Delayed"){
        Icon = ClockIcon;
    }
    if(status === "Cancelled"){
        Icon = ExclamationCircleIcon;
    }
    return(
        <div className={clsx(openSans.className, 'w-min')}>
            <div className={clsx('flex rounded-full text-white text-begin justify-begin px-[20px]', status === 'On Time' ? 'bg-green-600' : status === 'Delayed' ? 'bg-yellow-500' : status === 'Cancelled' ? 'bg-red-500' : 'bg-gray-500')}>
                <Icon className="w-5 "/>
                <p className="ml-[5px]">{status}</p>
            </div>
        </div>
    );
}