export default async function GenreDetailsPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const genreId = (await params).id;

  return <div className="mt-20">Genre No. {genreId}</div>;
}
