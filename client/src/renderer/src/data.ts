import { TrackType } from "./types"

const artistData = [
  {
    id: 1,
    name: "So Faygo",
    thumbnail: "https://example.com/so-faygo.jpg",
    description: "So Faygo is a music artist"
  },
  {
    id: 2,
    name: "Lil Uzi Vert",
    thumbnail: "https://example.com/juice-wrld.jpg",
    description: "Lil Uzi is a music artist"
  },
  {
    id: 3,
    name: "Juice Wrld",
    thumbnail: "https://example.com/juice-wrld.jpg",
    description: "Juice Wrld is a music artist"
  }
]

export const data: TrackType[] = [
  {
    id: 1,
    name: "Bye",
    artists: [artistData[0], artistData[1]],
    url: "./bye.mp3",
    length: 266,
    thumbnail: "",
    description: "This is the first song"
  },
  {
    id: 2,
    name: "Awful Times",
    artists: [artistData[2]],
    url: "./awful-times.mp3",
    length: 163,
    thumbnail: "",
    description: "This is the second song"
  }
]
