import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className='max-w-[1140px] mb-1 flex justify-between items-center bg-gray-200 mx-auto p-2 px-4'>
      <Link to={"/"}>LOGO</Link>
      <Button>Watchlist</Button>
    </div>
  );
}
