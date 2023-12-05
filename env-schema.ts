import { z } from "zod"

export const envSchema = z.object({
  NODE_ENV: z.string()
  // Add more variables as needed
})

export type Env = z.infer<typeof envSchema>
