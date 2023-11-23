"use client";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
    <div className="my-5 ">
      <div className="flex justify-between ">
        <button>
          <Image
            src="/lupa.svg"
            alt="Search Logo"
            width={80}
            height={40}
            priority
          />
        </button>

        <Image src="/logo.svg" alt="Logo" width={300} height={40} priority />

        <button className="block"
        onClick={()=>setOpen(!open)}
        >
          <Image
            src="/more.svg"
            alt="MOore Logo"
            width={80}
            height={40}
            priority
          />
        </button>
      </div>
    </div>

    {/* // MOre abierto */}
{ open &&
    <div>
BIen dado
    </div>}
    </>

  );
};

export default Navbar;
