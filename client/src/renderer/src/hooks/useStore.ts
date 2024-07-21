import { UseStore } from '@renderer/types'
import { create } from 'zustand'

export const useStore = create<UseStore>((set) => ({
  playing: false,
  update: (payload) => set((state) => ({ ...state, ...payload }))
}))
