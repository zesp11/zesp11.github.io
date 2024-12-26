export default function Page() {
  return (
    <div className="h-full text-foreground p-8 font-sans leading-relaxed">
      <h1 className="text-3xl font-bold mb-4">Informacja o dokumentacji</h1>
      <p className="mb-6">
        Dokumentacja projektu zostanie opublikowana po zakończeniu prac nad projektem.
        Szczegóły techniczne i procesowe będą dostępne w finalnej wersji dokumentacji.
      </p>
      <h2 className="text-secondary text-2xl font-semibold mb-3">Raporty projektu</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Raport semestralny</strong> zostanie udostępniony w trakcie trwania prac nad projektem.</li>
        <li><strong>Raport końcowy</strong> zostanie opublikowany po zakończeniu projektu.</li>
      </ul>
      <p className="mt-6">
        Szczegółowe informacje będą dostępne w odpowiednich raportach.
      </p>
    </div>
  );
}