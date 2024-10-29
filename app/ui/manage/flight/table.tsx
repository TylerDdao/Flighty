import React from "react";
import FlightStatus from "./flightstatus";
import {flights} from "@/app/lib/simulation";

// // Sample ICAO airport codes for Origin and Destination
// const icaoCodes = ["HAN", "NRT", "ICN", "SGN", "YYZ", "JFK", "CDG", "LAX"];
// const status = ["On Time", "Delayed", "Cancelled"];
// // Generate a random date within the next year
// function getRandomDate(): Date {
//   const now = new Date();
//   const oneYearFromNow = new Date();
//   oneYearFromNow.setFullYear(now.getFullYear() + 1);

//   const randomTime = new Date(now.getTime() + Math.random() * (oneYearFromNow.getTime() - now.getTime()));
//   return randomTime;
// }

// // Generate random flight code
// function getRandomFlightCode(): string {
//   const airlines = ["AA", "BA", "DL", "UA", "LH", "AF", "SQ", "QF", "EK", "CX"];
//   const airline = airlines[Math.floor(Math.random() * airlines.length)];
//   const number = Math.floor(Math.random() * 900 + 100); // Random 3-digit number
//   return `${airline}${number}`;
// }

// Generate the flights array
// const flights: Flight[] = Array.from({ length: 100 }, (_, index) => {
//   const origin = icaoCodes[Math.floor(Math.random() * icaoCodes.length)];
//   let destination = icaoCodes[Math.floor(Math.random() * icaoCodes.length)];
//   let statusNow = status[Math.floor(Math.random()*status.length)];
//   while (destination === origin) {
//     destination = icaoCodes[Math.floor(Math.random() * icaoCodes.length)];
//   }
//   let note = '';
//   if(statusNow == 'Cancelled'){
//      note = 'Flight is cancelled';
//   }
//   if(statusNow == 'Delayed'){
//     note = 'Flight is delayed due to bad weather';
//  }

//   return {
//     Id: `F${(index + 1).toString().padStart(3, "0")}`, // e.g., F001, F002, ...
//     Code: getRandomFlightCode(),
//     Origin: origin,
//     Destination: destination,
//     Time: getRandomDate(),
//     Status: statusNow,
//     Note: note
//   };
// });

export default async function FlightTable(){
    return(
        <div className="">
        <div className="text-4xl font-bold text-primary">Incoming Flights</div>
      <div className="overflow-y-auto h-[500px] w-auto drop-shadow-xl rounded-xl mt-[10px]">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-primary sticky top-0">
            <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                FLight Code
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                From
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                To
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Time
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Note
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {flights.map((flight) => (
              <tr key={flight.Id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{flight.Id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{flight.Code}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{flight.Origin}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{flight.Destination}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{flight.Time.toDateString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><FlightStatus status={flight.Status}/></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{flight.Note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    )
}
