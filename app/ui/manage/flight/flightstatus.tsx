import clsx from "clsx";
import { ExclamationCircleIcon, CheckCircleIcon, ClockIcon, QuestionMarkCircleIcon, CheckBadgeIcon
} from "@heroicons/react/24/solid";

import { openSans } from "../../font";
export default function FlightStatus({status}: {status:string}){
    let Icon = QuestionMarkCircleIcon;
    let displayedStatus = status;
    if(status === "On Time"){
        Icon = CheckCircleIcon;
        displayedStatus = status;
    }
    else if(status === "Delayed"){
        Icon = ClockIcon;
        displayedStatus = status;
    }
    else if(status === "Cancelled"){
        Icon = ExclamationCircleIcon;
        displayedStatus = status;
    }
    else if(status === "Departed"){
        Icon = CheckBadgeIcon;
        displayedStatus = status;
    }

    return(
        <div className={clsx(openSans.className, 'w-min')}>
            <div className={clsx('flex rounded-full text-white text-begin justify-begin px-[20px]', status === 'On Time' ? 'bg-green-600' : status === 'Delayed' ? 'bg-yellow-500' : status === 'Cancelled' ? 'bg-red-500' : 'bg-sky-500')}>
                <Icon className="w-5 "/>
                <p className="ml-[5px]">{displayedStatus}</p>
            </div>
        </div>
    );
}