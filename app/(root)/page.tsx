import { getGames } from "@/actions/games-action";
import { getGenres } from "@/actions/genres-action";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const goty = ["Hollow Knight: Silksong", "Elden Ring", "Grand Theft Auto V"];

export default async function Home() {
  const genres = await getGenres();
  const games = await getGames();

  // console.log(games.results.length);

  // const filtered = games.results.filter((g) =>
  //   goty.some((gn) => g.name === gn)
  // );

  // filtered.map((g) => console.log(g.name));

  return (
    <div className="pt-36">
      <ul className="flex flex-col gap-4">
        {games.results.map((g) => (
          <li key={g.id}>
            <p>id: {g.id}</p>
            <p>name: {g.name}</p>
            {/* <div className="relative size-20 rounded-md overflow-hidden">
              <Image
                src={g.background_image}
                alt="Image"
                fill
                className="object-cover"
              />
            </div> */}
          </li>
        ))}
      </ul>
      {/* <ul className="flex flex-col gap-4">
        {genres.results.map((g) => (
          <li key={g.id}>
            <p>id: {g.id}</p>
            <p>name: {g.name}</p>
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
      </ul> */}
    </div>
  );
}
