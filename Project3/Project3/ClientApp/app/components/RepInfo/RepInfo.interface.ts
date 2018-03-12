export interface RepInfo {
    name: string,
    party: string,
    photUrl: string,
    address: Address[],
    phones: string[],
    urls: string[],
    office: string,
    channels: Channels[]
}
interface Channels {
    type: string,
    id: string
}
interface Address {
    line1: string,
    line2: string,
    city: string,
    state: string,
    zip: string
}