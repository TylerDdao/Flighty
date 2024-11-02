// 'use client';

// import { useState } from "react";
// import { Airport } from "@/app/lib/definition";

// export default function CreateFlightForm(airports:Airport[]) {
//     const [origin, setOrigin] = useState<string>(''); // Selected origin
//     const [destination, setDestination] = useState<string>(''); // Selected destination
//     const [layovers, setLayovers] = useState<string[]>([]); // Array of selected layovers
//     const [selectedLayover, setSelectedLayover] = useState<string>(''); // Currently selected layover

//     // Filter options for each dropdown to avoid duplicates
//     const renderOptions = (excludeCodes: string[]) => {
//         return airports
//             .filter(airport => !excludeCodes.includes(airport.code))
//             .map(airport => (
//                 <option key={airport.code} value={airport.code}>
//                     {airport.code} / {airport.city} / {airport.country}
//                 </option>
//             ));
//     };

//     // Add a selected layover to the layovers array
//     const addLayover = () => {
//         if (selectedLayover && !layovers.includes(selectedLayover)) {
//             setLayovers([...layovers, selectedLayover]); // Add new layover
//             setSelectedLayover(''); // Clear selection after adding
//         }
//     };

//     // Remove a layover from the layovers array
//     const removeLayover = (code: string) => {
//         setLayovers(layovers.filter(layover => layover !== code));
//     };

//     return (
//         <div>
//             <form>
//                 <div className="flex flex-col items-center space-y-4">
//                     {/* Origin Selection */}
//                     <div>
//                         <label className="block text-lg font-bold">Origin</label>
//                         <select
//                             className="bg-white drop-shadow-xl rounded-xl h-[50px] w-[300px] px-[10px]"
//                             value={origin}
//                             onChange={(e) => setOrigin(e.target.value)}
//                         >
//                             <option value="" disabled>Select an origin</option>
//                             {renderOptions([destination, ...layovers])}
//                         </select>
//                     </div>

//                     {/* Destination Selection */}
//                     <div>
//                         <label className="block text-lg font-bold">Destination</label>
//                         <select
//                             className="bg-white drop-shadow-xl rounded-xl h-[50px] w-[300px] px-[10px]"
//                             value={destination}
//                             onChange={(e) => setDestination(e.target.value)}
//                         >
//                             <option value="" disabled>Select a destination</option>
//                             {renderOptions([origin, ...layovers])}
//                         </select>
//                     </div>

//                     {/* Layover Selection */}
//                     <div>
//                         <label className="block text-lg font-bold">Layover</label>
//                         <div className="flex items-center space-x-2">
//                             <select
//                                 className="bg-white drop-shadow-xl rounded-xl h-[50px] w-[250px] px-[10px]"
//                                 value={selectedLayover}
//                                 onChange={(e) => setSelectedLayover(e.target.value)}
//                             >
//                                 <option value="" disabled>Select a layover</option>
//                                 {renderOptions([origin, destination, ...layovers])}
//                             </select>
//                             <button
//                                 type="button"
//                                 onClick={addLayover}
//                                 className="px-4 py-2 bg-blue-500 text-white rounded-xl"
//                             >
//                                 Add Layover
//                             </button>
//                         </div>
//                     </div>

//                     {/* Display Selected Layovers */}
//                     <div>
//                         <label className="block text-lg font-bold">Selected Layovers</label>
//                         <div className="space-y-2">
//                             {layovers.length > 0 ? (
//                                 layovers.map((layover) => (
//                                     <div key={layover} className="flex items-center space-x-4">
//                                         <span className="text-sm text-gray-700">
//                                             {layover} - {airports.find(a => a.code === layover)?.city}
//                                         </span>
//                                         <button
//                                             type="button"
//                                             onClick={() => removeLayover(layover)}
//                                             className="text-red-500 hover:underline"
//                                         >
//                                             Delete
//                                         </button>
//                                     </div>
//                                 ))
//                             ) : (
//                                 <span className="text-gray-500">No layovers added</span>
//                             )}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Submit Button */}
//                 <div className="flex justify-center mt-6">
//                     <button
//                         type="submit"
//                         className="py-2 px-6 bg-green-500 text-white rounded-xl font-bold"
//                     >
//                         Add Flight
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// }

