export type Flight = {
    id: string,
    code: string
    origin: string,
    layover?: string[],
    destination: string,
    time: Date,
    status: string,
    capacity: number,
    first: number,
    premium: number,
    economy: number,
    fPax: number,
    pPax: number,
    ePax: number,
    note?: string
};

export type Airport = {
    code: string,
    city: string,
    country: string
}

export type Route ={
    code: string,
    origin: string,
    destination: string,
    schedule: Date
}