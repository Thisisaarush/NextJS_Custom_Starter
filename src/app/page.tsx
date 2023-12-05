import Image from "next/image"
import { UserButton } from "@clerk/nextjs"
import { ModeToggle } from "@/components/theme/mode-toggle"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-20 p-24">
      <div className="flex gap-8">
        <UserButton afterSignOutUrl="/" />
        <ModeToggle />
      </div>
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </main>
  )
}
