import { ConvertTime } from "@/lib/time";
import { Clock10, UsersRound } from "lucide-react"
import Image from "next/image"

interface DetailpageProps<T> {
  items: T[]
}

function Detailpage<T>({ items }: DetailpageProps<T>) {
  const item = items[0]
  const { timeAgo } = ConvertTime((item as any).date);
  return (
    <div className="w-full py-20">
      <section className="px-10 grid md:grid-cols-2 grid-cols-1 gap-10">
        <div className="w-full flex-col justify-center items-start gap-5 inline-flex">
          <h2 className="text-[#1dc1b6] text-2xl font-semibold font-['Fredoka'] leading-[30.12px] tracking-wide">
            MDT AL Musyarokah
          </h2>
          <h1 className="text-black text-4xl font-bold font-['Fredoka'] leading-[60.24px] tracking-wider">
            {(item as any).title}
          </h1>
          <p className="text-[#221818] md:text-xl text-lg font-medium font-['Fredoka'] leading-loose tracking-wide">
            {(item as any).description}
          </p>
          <div className="flex justify-between gap-5 w-full px-10">
            <p className="text-[#1dc1b6] font-semibold flex gap-2"><Clock10 /> {timeAgo}</p>
            <p className="text-[#1dc1b6] font-semibold flex gap-2"><UsersRound /> {(item as any).author}</p>

          </div>
        </div>
        <div className="w-full flex-col justify-center items-center inline-flex">
          <Image
            src={(item as any).img}
            alt="logo"
            width={1280}
            height={1280}
            className="w-full"
            priority={true}
          />

        </div>
      </section>
    </div>
  )
}

export default Detailpage

