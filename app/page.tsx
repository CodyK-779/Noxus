import { getGenres } from "@/actions/genres-action";

interface GenreResults {
  id: number;
  name: string;
  games_count: number;
}

interface Genres {
  count: number;
  results: GenreResults[];
}

export default async function Home() {
  const genres: Genres = await getGenres();

  return (
    <div className="pt-36">
      <ul className="flex flex-col gap-4">
        {genres.results.map((g) => (
          <li key={g.id}>
            <p>id: {g.id}</p>
            <p>name: {g.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// async function getGames() {
//   const res = await fetch("https://api.rawg.io/api/games", {
//     headers: {
//       Authorization: `Bearer ${process.env.EXTERNAL_API_KEY}`,
//     },
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch games");
//   }

//   return res.json();
// }
