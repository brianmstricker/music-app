import { StoreType } from "@renderer/types"
import { create } from "zustand"

export const Store = create<StoreType>((set) => ({
  playing: false,
  queue: [],
  muted: "false",
  volume: 0.25,
  currentTrack: null,
  update: (payload) => set((state) => ({ ...state, ...payload }))
}))
