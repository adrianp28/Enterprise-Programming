export interface PollingLocations {
    address: Address,
    notes: string,
    pollingHours: string,
}
interface Address {
    locationName: string,
    line1: string,
    city: string,
    state: string,
    zip: string
}