import { sql } from '@vercel/postgres';
import { Airport, Flight } from './definition';

export async function fetchFlights() {
    try {
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      const data = await sql<Flight>`
        SELECT *
        FROM flights
        `;
  
        const flights = data.rows
        .map((flight) => ({
          ...flight,
          time: new Date(flight.time), // Convert time to Date object if needed
        }))
        .sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()); // Sort by time in descending order

      return flights;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch flights.');
    }
  }

  export async function fetchAirports() {
    try {
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      const data = await sql<Airport>
      `
        SELECT *
        FROM airports
        `;
  
        const airports = data.rows
        .map((airport) => ({
          ...airport,
        }))
        .sort((a, b) => {// First, compare by country
            if (a.country < b.country) return -1;
            if (a.country > b.country) return 1;
        
            // If countries are the same, compare by city
            if (a.city < b.city) return -1;
            if (a.city > b.city) return 1;
        
            // If countries and cities are the same, compare by code
            if (a.code < b.code) return -1;
            if (a.code > b.code) return 1;
        
            // If all are the same, return 0
            return 0;}) // Sort by time in descending order

      return airports;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch airports.');
    }
  }
  
