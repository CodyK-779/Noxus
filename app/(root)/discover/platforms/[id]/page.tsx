export default async function PlatformDetailsPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const platformId = (await params).id;

  return <div className="mt-20">platformId: {platformId}</div>;
}
