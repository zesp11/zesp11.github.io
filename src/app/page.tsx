import CardStack from "./components/cardStack";

export default function Page() {
  return (
    <>
      <section className="h-screen bg-gray-100 dark:bg-gray-700 dark"></section>
      <section className="h-screen bg-gray-200 dark:bg-gray-800"></section>

      <section className="h-screen bg-gray-300 dark:bg-gray-900"></section>

      <CardStack />

      <section className="h-screen bg-gray-300 dark:bg-gray-900"></section>
    </>
  );
}
