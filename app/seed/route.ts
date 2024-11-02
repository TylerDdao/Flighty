import { db } from "@vercel/postgres";
import {flights, airports } from "../lib/simulation";

const client = await db.connect();

async function seedFlight(){
    console.log(client);
    // await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
      CREATE TABLE IF NOT EXISTS flights (
        id varchar(10) PRIMARY KEY,
        code varchar(10),
        origin varchar(5),
        destination varchar(5),
        time varchar(50),
        status varchar(10),
        note varchar(100)
      );
    `;
    // Combine both flight arrays and sort them by time in ascending order


  const insertedFlights = await Promise.all(
      flights.map(async (flight) => {
          return client.sql`
              INSERT INTO flights (id, code, origin, destination, time, status, note)
              VALUES (${flight.id}, ${flight.code}, ${flight.origin}, ${flight.destination}, ${flight.time.toUTCString()}, ${flight.status},${flight.note})
              ON CONFLICT (id) DO NOTHING;
          `;
      }),
  );

  return insertedFlights;
  }

  async function seedAirports(){
    console.log(client);
    // await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
      CREATE TABLE IF NOT EXISTS airports (
        code varchar(5) PRIMARY KEY,
        city varchar(50),
        country varchar(50)
      );
    `;
    // Combine both flight arrays and sort them by time in ascending order


  const insertedAirports = await Promise.all(
    airports.map(async (airport) => {
          return client.sql`
              INSERT INTO airports (code, city, country)
              VALUES (${airport.code}, ${airport.city}, ${airport.country})
              ON CONFLICT (code) DO NOTHING;
          `;
      }),
  );
  return insertedAirports;
  }

  // async function seedRoutes(){
  //   console.log(client);
  //   // await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  //   await client.sql`
  //     CREATE TABLE IF NOT EXISTS routes (
  //       code varchar(5) PRIMARY KEY,
  //       city varchar(50),
  //       country varchar(50)
  //     );
  //   `;
  //   // Combine both flight arrays and sort them by time in ascending order


  // const insertedAirports = await Promise.all(
  //   airports.map(async (airport) => {
  //         return client.sql`
  //             INSERT INTO airports (code, city, country)
  //             VALUES (${airport.code}, ${airport.city}, ${airport.country})
  //             ON CONFLICT (code) DO NOTHING;
  //         `;
  //     }),
  // );
  // return insertedAirports;
  // }

  export async function GET() {
    try {
      await client.sql`BEGIN`;
      await seedFlight();
      await seedAirports();
      await client.sql`COMMIT`;
  
      return Response.json({ message: 'Database seeded successfully' });
    } catch (error) {
      await client.sql`ROLLBACK`;
      return Response.json({ error }, { status: 500 });
    }
  }