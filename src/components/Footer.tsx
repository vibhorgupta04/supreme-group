import Image from "next/image";
import React from "react";
import footerData from "@/data/footer.json";
import Link from "next/link";

const FooterColumn = ({
  title,
  items,
}: {
  title: string;
  items: { label: string; link: string; external?: boolean }[];
}) => (
  <ul className="grid sm:gap-5 gap-3 text-black list-none">
    <li className="mb-2 font-semibold uppercase text-opacity-90">{title}</li>
    {items.map(({ label, link, external }) => (
      <li key={label}>
        <a
          href={link}
          target={external ? "_blank" : "_self"}
          rel={external ? "noopener noreferrer" : undefined}
          className="xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100"
        >
          <span className="sg-translate">{label}</span>
        </a>
      </li>
    ))}
  </ul>
);

const Footer = () => {
  return (
    <footer className="container mx-auto my-20 text-black px-5">
      <div>
        {/* Logo */}
        <div>
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
        </div>

        {/* Desktop View */}
        <div className="md:flex hidden flex-row items-start justify-between md:pr-10 lg:gap-20 sm:gap-10 gap-4 2xl:mt-10 mt-8">
          {footerData.data.map((section) => (
            <FooterColumn
              key={section.title}
              title={section.title}
              items={section.items}
            />
          ))}
        </div>

        {/* Mobile View */}
        <div className="grid grid-cols-2 md:hidden items-start justify-between md:pr-10 lg:gap-20 sm:gap-10 gap-6 2xl:mt-10 mt-8 px-5">
          {footerData.data.map((section) => (
            <FooterColumn
              key={section.title}
              title={section.title}
              items={section.items}
            />
          ))}
        </div>

        {/* Bottom */}
        <div className="py-10 flex gap-3 md:flex-row flex-col justify-between items-center blade-top-padding-xl">
          <h6 className="md:block hidden text-sm text-black whitespace-nowrap">
            ©2024. All Rights Reserved.
          </h6>
          <h6 className="md:block hidden text-sm text-black whitespace-nowrap">
            Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.
          </h6>
          <h6 className="md:hidden block text-sm text-black whitespace-nowrap">
            ©2024. All Rights Reserved.
          </h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
