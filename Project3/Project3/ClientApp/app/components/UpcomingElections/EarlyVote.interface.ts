export interface EarlyVote {
    address: Address,
    notes: string,
    pollingHours: string,
    startDate: string,
    endDate: string,
}
interface Address {
    locationName: string,
    line1: string,
    city: string,
    state: string,
    zip: string
}