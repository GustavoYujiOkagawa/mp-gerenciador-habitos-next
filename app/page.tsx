import DayState from "@/components/DayState";
import { kv } from "@vercel/kv";
import Image from "next/image";
import Link from "next/link";
import { deleteHabits } from "./actions";
import DeleteButton from "@/components/deleteButton";

export  type Habits = {
  [habit: string]: Record<string, boolean>;
} | null;

export default async function Home() {
  const habits: Habits = await kv.hgetall("habits");

  const today = new Date();
  const todayWeekDay = today.getDay();
  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

  const sortedWeekDays = weekDays
    .slice(todayWeekDay + 1)
    .concat(weekDays.slice(0, todayWeekDay + 1));

  const lastSevenDays = weekDays
    .map((_, index) => {
      const date = new Date();
      date.setDate(date.getDate() - index);

      return date.toISOString().slice(0.1);
    })
    .reverse();

  return (
    <main className="container relative flex flex-col gap-8 px-4 pt-16 text-center font-semibold">
      {habits !== null && Object.keys(habits).length > 0 ? (
        Object.entries(habits).map(([habit, habitStreak]) => (
          <div key={habit} className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <span className="text-xl  text-white font-sans font-se semibold">
                {habit}
              </span>
             <DeleteButton habit={habit} />
            </div>
            <Link href={`habito/${habit}`}>
            <section className="grid grid-cols-7 bg-neutral-800 rounded-md p-2">
              {sortedWeekDays.map((day, index) => (
                <div key={day} className="flex flex-col last:font-bold">
                  <span className="font-sans text-xs text-white text-center">
                    {day}
                  </span>
                  {/*day state */}
                  <DayState day={habitStreak[lastSevenDays[index]]} />
                  {}
                </div>
              ))}
            </section>
            </Link>
          </div>
        ))
      ) : (
        <h1 className="mt-32 text-2xl font-light text-white font-display">
          Você não tem hábitos cadastrados
        </h1>
      )}

      <Link
        href="novo-habito"
        className="fixed text-center bottom-10 w-2/3 left-1/2
    -translate-x-1/2 text-neutral-900 bg-[#45edad] font-display font-regular
    text-2xl p-2 rounded-md
    "
      >
        Novo hábito
      </Link>
    </main>
  );
}
