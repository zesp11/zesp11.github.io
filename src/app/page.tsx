import Link from "next/link";
import AnimatedCard from "./components/animatedCard";

export default function Page() {
  return (
    <div className="overflow-x-hidden">
      <section className="h-screen bg-red-200"></section>
      <section className="h-screen bg-red-300"></section>
      <section className="space-y-10">
      {[
        ...Array.from({ length: 10 }).map((_, i) => (
          <AnimatedCard direction={`${i % 2 == 0 ? "left" : "right"}`} key={i}>
            <section className="bg-white border-black border-2 rounded aspect-square h-1/6 "></section>
          </AnimatedCard>
        )),
      ]}

      </section>
    </div>
  );
}
