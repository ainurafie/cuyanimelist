import Image from "next/image";
import Link from "next/link";
const AnimeList = ({ title, images, id }) => {
  return (
    <Link href={`/${id}`} className="cursor-pointer">
      <Image src={images} width={600} height={600} alt="..." />
      <h3 className="font-bold md:text-xl p-4">{title}</h3>
    </Link>
  );
};
export default AnimeList;
