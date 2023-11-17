import AnimeList from "@/app/components/AnimeList";
import Link from "next/link";
const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const anime = await response.json();
  anime.data;
  return (
    <div>
      <div className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Paling Populer</h1>
        <Link href="/populer" className="md:text-xl text-sm hover:text-indigo-500 transtion-all underline">Lihat Semua</Link>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 sm:grid-cols-3 px-4">
        {anime.data.map((data) => {
          return (
            <div key={data.mal_id} className="shadow-xl ">
              <AnimeList
                title={data.title}
                images={data.images.webp.image_url}
                id={data.mal_id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Home;
