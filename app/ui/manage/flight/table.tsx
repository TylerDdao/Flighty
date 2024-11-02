import React from "react";
import FlightStatus from "./flightstatus";
import { fetchFlights } from "@/app/lib/data";

export default async function FlightTable(){
  const displayedFlight = (await fetchFlights()).filter(flight => flight.status != '');
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
                Time (GMT+0)
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Note
              </th>
              {/* <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Layovers
              </th> */}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {displayedFlight.map((flight) => (
              <tr key={flight.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{flight.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{flight.code}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{flight.origin}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{flight.destination}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{flight.time.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><FlightStatus status={flight.status}/></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{flight.note}</td>
                {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{flight.layover ? (<a href={`/flight/${flight.id}`} className="text-blue-500 underline">{flight.layover.length.toString()}</a>) : ("Non-stop")}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    )
}
