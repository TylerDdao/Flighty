// 'use client';

// import { useState } from 'react';
// import axios from 'axios';

// interface WeatherData {
//   name: string;
//   weather: { description: string; icon: string }[];
//   main: { temp: number; humidity: number };
//   wind: { speed: number };
// }

// export default function WeatherPage() {
//   const [city, setCity] = useState<string>(''); // User input for city name
//   const [weather, setWeather] = useState<WeatherData | null>(null); // Weather data
//   const [error, setError] = useState<string>(''); // Error message

//   // Fetch weather data from OpenWeatherMap API
//   const fetchWeather = async () => {
//     try {
//       const apiKey = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
//       );
//       setWeather(response.data); // Save data to state
//       setError(''); // Clear any previous errors
//     } catch (err) {
//       setError('City not found. Please try again.');
//       console.log("weather");
//       setWeather(null); // Clear weather data if there's an error
//     }
//   };

//   // Handle form submission
//   const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (city.trim() === '') {
//       setError('Please enter a city name');
//       return;
//     }
//     fetchWeather();
//   };
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 text-gray-700">
//       <h1 className="text-4xl font-bold mb-6">Weather App</h1>
//       <form onSubmit={handleSearch} className="mb-4">
//         <input
//           type="text"
//           placeholder="Enter city"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           className="border rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <button
//           type="submit"
//           className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//         >
//           Get Weather
//         </button>
//       </form>

//       {error && <p className="text-red-500 mb-4">{error}</p>}

//       {weather && (
//         <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md text-center">
//           <h2 className="text-2xl font-semibold mb-2">{weather.name}</h2>
//           <p className="text-gray-600 capitalize">{weather.weather[0].description}</p>
//           <img
//             src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
//             alt={weather.weather[0].description}
//             className="mx-auto mb-4"
//           />
//           <p className="text-4xl font-bold">{weather.main.temp} °C</p>
//           <p className="text-gray-600">Humidity: {weather.main.humidity}%</p>
//           <p className="text-gray-600">Wind Speed: {weather.wind.speed} m/s</p>
//         </div>
//       )}
//     </div>
//   );
// }