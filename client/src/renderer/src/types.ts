type ID = string | number

export type TrackType = {
  id: ID
  name: string
  artists: ArtistType[] //todo: change to ID[] with actual data
  url: string
  length: number
  thumbnail?: string
  description?: string
}

export type ArtistType = {
  id: ID
  name: string
  thumbnail?: string
  description?: string
}

export type StoreType = {
  playing: boolean
  muted: "true" | "false"
  volume: number
  secondsPlayed: number
  currentTrack: null | ID
  queue: TrackType[]
  update: (payload: Partial<StoreType>) => void
}
