// Id: string,
// Code: string
// Origin: string,
// Destination: string,
// Time: Date,
// Status: string,
// Note: string
import { Flight, Airport, Route } from "./definition"

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

// function GenerateRoute(Code: string, Origin:string, Destination:string, Schedule:Date){
//     const routes:Route[] =[];

//     const 
// }

function GenerateFlights(Code: string, Origin: string, Destination: string, DateInWeek: number, StartDay: Date, Hour: number, Minute: number){
    const flights:Flight[] =[];

    const currentDate = new Date(StartDay);
    while(currentDate.getDay() !== DateInWeek){
        currentDate.setDate(currentDate.getDate()+1);
    }
    const schedule = currentDate;
    schedule.setHours(Hour, Minute);
    const status =['On Time', 'Delayed', 'Cancelled', 'Departed'];
    for(let i=0; i<100;i++){
        const flightschedule = new Date(schedule);
        const flightStatus = status[Math.floor(Math.random()*4)]
        const flight:Flight ={id: Math.floor(Math.random() * 10000000000).toString(), code: Code, origin: Origin, destination: Destination, time: flightschedule, status: flightStatus, capacity:200, first: 10, premium: 40, economy: 150, fPax: Math.floor(Math.random()*10), pPax: Math.floor(Math.random()*40), ePax: Math.floor(Math.random()*150)}
        flights.push(flight);
        schedule.setDate(schedule.getDate()+7);
    }
    return flights;
}

const CA001:Flight[] = GenerateFlights("CA001", "YYZ", "YYC", 3, new Date("2024-10-28"), 12,5);
const CA002:Flight[] = GenerateFlights("CA002", "YYZ", "HAN", 1, new Date("2024-10-28"),13,45);
const CA003:Flight[] = GenerateFlights("CA002", "YYZ", "LAX", 1, new Date("2024-10-28"),23,30);

const flights = [...CA001, ...CA002, ...CA003].sort((a, b) => {
    return new Date(a.time).getTime() - new Date(b.time).getTime(); // Sort by Time
});

const airports:Airport[] =[{code: 'YYZ', city: 'Toronto', country: 'Canada'}, {code: 'HAN', city:'Hanoi',country:'Vietnam'}, {code:'YYC', city:'Calgary', country:'Canada'}, {code:'LAX', city:'Los Angles', country:'United State of America'}]
airports.sort((a, b) => {
    // First, compare by country
    if (a.country < b.country) return -1;
    if (a.country > b.country) return 1;

    // If countries are the same, compare by city
    if (a.city < b.city) return -1;
    if (a.city > b.city) return 1;

    // If countries and cities are the same, compare by code
    if (a.code < b.code) return -1;
    if (a.code > b.code) return 1;

    // If all are the same, return 0
    return 0;
});
export {flights, airports};