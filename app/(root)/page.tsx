import { getGenres } from "@/actions/genres-action";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default async function Home() {
  const genres = await getGenres();

  return (
    <div className="pt-36">
      <Button className="rounded-md">Hello World</Button>
      <ul className="flex flex-col gap-4">
        {genres.results.map((g) => (
          <li key={g.id}>
            <p>id: {g.id}</p>
            <p>name: {g.name}</p>
            {/* <p>image: {g.image_background}</p> */}
            <div className="relative size-20 rounded-md overflow-hidden">
              <Image
                src={g.image_background}
                alt="Image"
                fill
                className="object-cover"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
