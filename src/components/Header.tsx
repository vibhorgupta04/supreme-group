"use client";
import { useScroll } from "@/hooks/useScroll";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  // custom hook to handle scroll
  const { visible } = useScroll();

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } 2xl:py-2 xlg:py-1 py-2 px-4 z-50 bg-white shadow-sm`}
    >
      <div className="container h-full xlg:py-3 py-1 mt-[2px] flex gap-4 items-center justify-between m-auto">
        <Link href="/">
          <span>
            <Image
              quality={100}
              src="/supreme_logo.png"
              alt="Supreme"
              width={200}
              height={100}
              className="object-fill w-40"
              priority
            />
          </span>
        </Link>
        <button
          onClick={() => {
            const section = document.getElementById('contact-us');
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="bg-[#5CD6FF] text-black font-semibold text-sm rounded-full px-4 py-2 cursor-pointer hover:shadow-md"
        >
          Contact Us
        </button>
      </div>
    </header>
  );
}
