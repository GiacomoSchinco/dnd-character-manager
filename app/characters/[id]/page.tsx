export default async function Character({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <main className="bg-base-200 flex flex-col justify-center items-center h-screen font-sans">
      <h1>Personaggio # {id}</h1>
      <p>Dettagli del personaggio con ID: {id}</p>
    </main>
  );
}