export type UseStore = {
  playing: boolean
  update: (payload: Partial<UseStore>) => void
}
