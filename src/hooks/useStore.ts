import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

interface BearState {
  bears: number
  increase: (by: number) => void
}

export const useStore = create<BearState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by }))
}))

// zustand middlewares - devtools and persist
// export const useStorePersist = create<BearState>()(
//   devtools(
//     persist(
//       (set) => ({
//         bears: 0,
//         increase: (by) => set((state) => ({ bears: state.bears + by }))
//       }),
//       { name: "bearStore" }
//     )
//   )
// )
