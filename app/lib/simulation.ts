// Id: string,
// Code: string
// Origin: string,
// Destination: string,
// Time: Date,
// Status: string,
// Note: string
import { Flight } from "./definition"

// function GenerateDate(DayInWeek:number, StartDay:Date){
//     let results: Date[] = [];

//     let currentDate = new Date(StartDay);
//     while(currentDate.getDay() !== DayInWeek){
//         currentDate.setDate(currentDate.getDate()+1);
//     }

//     for(let i=0; i< 100;i++){
//         results.push(new Date(currentDate));
//         currentDate.setDate(currentDate.getDate()+7);
//     }
//     return results
// }

function GenerateFlights(Code: string, Origin: string, Destination: string, DateInWeek: number, StartDay: Date){
    const flights:Flight[] =[];

    const currentDate = new Date(StartDay);
    while(currentDate.getDay() !== DateInWeek){
        currentDate.setDate(currentDate.getDate()+1);
    }
    const schedule = currentDate;
    schedule.setHours(1);
    for(let i=0; i<100;i++){
        const flightschedule = new Date(schedule);
        const flight:Flight ={Id: Math.floor(Math.random() * 10000000000).toString(), Code: Code, Origin: Origin, Destination: Destination, Time: flightschedule, Status: "On Time", Capacity:200, First: 10, Premium: 40, Economy: 150, FPax: Math.floor(Math.random()*10), PPax: Math.floor(Math.random()*40), EPax: Math.floor(Math.random()*150)}
        flights.push(flight);
        schedule.setDate(schedule.getDate()+7);
    }
    return flights;
}

const flights:Flight[] = GenerateFlights("CA001", "YYZ", "YYC", 3, new Date("2024-10-28"));
  
export {flights};