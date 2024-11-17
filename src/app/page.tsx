import CardStack from "./components/cardStack";

export default function Page() {
  return (
    <>
      <section className="h-screen bg-red-200"></section>
      <section className="h-screen bg-red-300"></section>

      <section className="h-screen bg-red-400"></section>

      <CardStack />

      <section className="h-screen bg-red-500"></section>
    </>
  );
}
