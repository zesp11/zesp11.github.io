import CardStack from "./components/cardStack";

export default function Page() {
  return (
    <>
      <section className="h-screen bg-gray-100"></section>
      <section className="h-screen bg-gray-200"></section>

      <section className="h-screen bg-gray-300"></section>

      <CardStack />

      <section className="h-screen bg-gray-300"></section>
    </>
  );
}
