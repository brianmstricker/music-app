import { StoreType } from "@renderer/types"
import { create } from "zustand"

export const Store = create<StoreType>((set) => ({
  playing: false,
  selected: null,
  queue: [],
  muted: "false",
  volume: 0.25,
  update: (payload) => set((state) => ({ ...state, ...payload }))
}))
