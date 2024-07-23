type ID = string

export type TrackType = {
  id: ID
  name: string
  artists: ID[]
  url: string
  length: number
  thumbnail?: string
  description?: string
}

export type StoreType = {
  playing: boolean
  selected: null | ID
  queue: TrackType[]
  muted: "true" | "false"
  volume: number
  update: (payload: Partial<StoreType>) => void
}
