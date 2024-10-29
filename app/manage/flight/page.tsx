import FlightTable from "@/app/ui/manage/flight/table";
import Search from "@/app/ui/search";

export default function FlightPage(){
    return(
        <div className="mx-[50px]">
            <div><Search placeHolder="Enter flight code or ID"/></div>
            <div className="mt-[30px]"><FlightTable/></div>
        </div>
    );
}