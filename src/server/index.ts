import { procedure, router } from "./trpc"

export const appRouter = router({
  helloWorld: procedure.query(() => "Hello tRPC World") // API Endpoint
})

export type AppRouter = typeof appRouter
