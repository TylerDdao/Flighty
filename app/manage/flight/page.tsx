import FlightTable from "@/app/ui/manage/flight/table";
import Search from "@/app/ui/search";
import Link from "next/link";

export default function FlightPage(){
    return(
        <div className="mx-[50px]">
            <div><Search placeHolder="Enter flight code or ID"/></div>
            <div className="mt-[30px]"><FlightTable/></div>
            <div className="flex justify-center">
            <div className="w-auto bg-white drop-shadow-xl py-[10px] px-[50px] rounded-xl text-3xl font-bold mt-[30px] text-primary"><Link href={"/manage/flight/create"}><button>New flight</button></Link></div>
            </div>
        </div>
    );
}