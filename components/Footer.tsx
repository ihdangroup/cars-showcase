import { footerLinks } from "@/constants";
import { link } from "fs";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#eaeaea] p-10 lg:px-24">
      <div>
        <div>
          <h2 className="text-lg font-bold italic">
            Search <span className="text-blue-600">Cars</span>
          </h2>
          <h4 className="my-2">Explore out cars you might like</h4>
        </div>
        <div className="flex justify-start flex-wrap">
          {footerLinks.map((footerLink) => (
            <div className="w-1/2 my-2 lg:w-1/3" key={footerLink.title}>
              <div className="font-semibold">{footerLink.title}</div>
              <ul>
                {footerLink.links.map((link) => (
                  <li key={link.url} className="text-xs">
                    {link.title}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* <div className="text-center mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur.
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
