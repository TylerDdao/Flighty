export type Flight = {
    Id: string,
    Code: string
    Origin: string,
    Layover?: string[],
    Destination: string,
    Time: Date,
    Status: string,
    Capacity: number,
    First: number,
    Premium: number,
    Economy: number,
    FPax: number,
    PPax: number,
    EPax: number,
    Note?: string
};