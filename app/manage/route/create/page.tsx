import Breadcrumbs from "@/app/ui/breadcrumbs";
import CreateForm from "@/app/ui/manage/route/createForm";
import { fetchAirports } from "@/app/lib/data";

export default async function CreateRoute(){
    const airports = await fetchAirports();
    return(
        <div className="min-h-screen ml-[10px]">
            <Breadcrumbs breadcrumbs={[{label: 'Flights', href: '/manage/flight'}, {label: 'Create New Flight', href: '/manage/flight/create', isActive: true}]} />
            <div className="justify-center flex">
                <CreateForm airports={airports}/>
            </div>
        </div>
    );
}