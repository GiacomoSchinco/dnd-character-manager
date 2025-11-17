export default async function Character({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div>
      <h1>Personaggio # {id}</h1>
      <p>Dettagli del personaggio con ID: {id}</p>
    </div>
  );
}