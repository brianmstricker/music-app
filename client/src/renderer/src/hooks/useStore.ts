import { StoreType } from "@renderer/types"
import { create } from "zustand"

export const Store = create<StoreType>((set) => ({
  playing: false,
  queue: [],
  muted: "false",
  volume: 0.25,
  currentTrack: null,
  secondsPlayed: 0,
  update: (payload) => set((state) => ({ ...state, ...payload }))
}))
