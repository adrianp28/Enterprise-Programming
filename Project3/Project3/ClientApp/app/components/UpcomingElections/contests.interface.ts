export interface contests {
    type: string,
    office: string,
    level: string[],
    roles: string[],
    candidates: Candidate[]
}
interface Candidate {
    name: string,
    party: string,
    candidateUrl: string,
    channels: Channels[]
}
interface Channels {
    type: string,
    id: string
}
