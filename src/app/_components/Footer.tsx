import WidthContainer from "@/Components/WidthContainer";
import { blackFbIcon, blackInsIcon, blackTwIcon } from "@/lib/constance";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function FooterComponent() {
  const footerList1 = [
    {
      Tttle: "Solutcon",
      items: [
        { name: "Social Ads", link: "#" },
        { name: "SaaS marketing", link: "#" },
        { name: "Content marketing", link: "#" },
        { name: "SEO", link: "#" },
      ],
    },
    {
      Tttle: "Support",
      items: [
        { name: "Pricing", link: "#" },
        { name: "Documentation", link: "#" },
        { name: "Guides", link: "#" },
      ],
    },
  ];
  const footerList2 = [
    {
      Tttle: "Company",
      items: [
        { name: "About", link: "#" },
        { name: "Blog", link: "#" },
        { name: "Press", link: "#" },
        { name: "Partners", link: "#" },
      ],
    },
    {
      Tttle: "Legal",
      items: [
        { name: "Clim", link: "#" },
        { name: "Privacy", link: "#" },
        { name: "Terms", link: "#" },
      ],
    },
  ];

  return (
    <WidthContainer>
      <div className="my-10 flex grid-cols-5 flex-col justify-between gap-8 md:grid md:gap-0">
        <div className="flex flex-col gap-2">
          <p className="text-3xl font-semibold">Mlab</p>
          <p>We will help you show your ads to more people for less money</p>
          <div className="flex gap-4">
            <div className="h-9 shrink-0 rounded-full bg-black">
              <Image src={blackFbIcon} height={30} width={30} alt="fb-icon" />
            </div>
            <div className="h-9 shrink-0 rounded-full bg-black">
              <Image src={blackTwIcon} height={30} width={30} alt="fb-icon" />
            </div>
            <div className="h-9 shrink-0 rounded-full bg-black">
              <Image
                src={blackInsIcon}
                height={30}
                width={30}
                alt="fb-icon"
                className="p-1"
              />
            </div>
          </div>
        </div>
        <div className="col-span-3 col-start-3 grid grid-flow-row gap-2 md:grid-cols-2 ">
          <div className="grid grid-cols-2 gap-4">
            {footerList1.map((item) => (
              <div key={item.Tttle} className="flex flex-col gap-3">
                <p className="text-lg font-medium">{item.Tttle}</p>

                <ul className="flex flex-col gap-2">
                  {item.items.map((nav) => (
                    <li key={nav.name}>
                      <Link
                        className="opacity-80 transition duration-150 hover:opacity-100"
                        href={nav.link}
                      >
                        {nav.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {footerList2.map((item) => (
              <div key={item.Tttle} className="flex flex-col gap-3">
                <p className="text-lg font-medium">{item.Tttle}</p>

                <ul className="flex flex-col gap-2">
                  {item.items.map((nav) => (
                    <li key={nav.name}>
                      <Link
                        className="opacity-80 transition duration-150 hover:opacity-100"
                        href={nav.link}
                      >
                        {nav.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="flex items-center text-sm opacity-80 ">
        <span className="text-xl ">&#169;</span>2024 Desing from online and
        developed By Robin
      </p>
    </WidthContainer>
  );
}

export default FooterComponent;
