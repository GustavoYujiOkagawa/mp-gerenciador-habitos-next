import Calendario from "@/components/Calendario";
import ArrowIcon from "@/components/arrowIcon";
import { kv } from "@vercel/kv";
import Link from "next/link";



async function Habit({ params: { habit } }: { params: { habit: string } }) {
  const decodeHabit = decodeURI(habit);

  const habitStreak: Record<string, boolean> | null = await kv.hget("habits", decodeHabit);
  console.log(habitStreak);



  return (
    <main className="container relative flex flex-col gap-8 px-12 pt-16">
      <h1 className="text-2xl font-light text-center text-white font-display">
        {decodeHabit}
      </h1>

      <Link
        href="/"
        className="flex items-center font-sans text-xs text-neutral-300 gap-2"
      >
        <ArrowIcon width={12} height={12} />
        Voltar
      </Link>

      <Calendario habit={decodeHabit} habitStreak={habitStreak}/>
    </main>
  );
}

export default Habit;
