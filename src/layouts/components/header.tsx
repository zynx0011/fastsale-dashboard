import { Link } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Header() {
  return (
    <header className="p-2 shadow-md">
      {/* logo */}
      <div className="flex items-center max-w-[60%] mx-auto justify-between ">
        <Link to="/">
          {" "}
          <img src="/logo.svg" alt="logo" className="w-7" />
        </Link>
        {/* menu */}
        <div className="flex items-center justify-evenly w-[40%] ">
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
        </div>
        <div className="cursor-pointer">
          <Popover>
            {/* User Icon */}
            <PopoverTrigger>
              <img src="/user.svg" alt="user" className="w-7" />
            </PopoverTrigger>
            {/* popover */}
            <PopoverContent className="mt-5">
              <div className="flex flex-col items-center text-center p-3 gap-1 ">
                <Link
                  to="/"
                  className="bg-[#F95D39]/[29%] p-2 w-full rounded-lg text-[#F23E14] "
                >
                  Become a Seller
                </Link>
                <p>or</p>
                <Link
                  to="/"
                  className="bg-[#F83E13] p-2 w-full rounded-lg text-white "
                >
                  Login to your account
                </Link>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
}
