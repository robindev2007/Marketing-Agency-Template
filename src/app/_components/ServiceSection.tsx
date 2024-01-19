import Button from "@/Components/Ui/Button";
import WidthContainer from "@/Components/WidthContainer";
import { contentMarketing } from "@/lib/constance";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

function ServiceSection() {
  const serviceList = [
    {
      title: "Social Ads",
      desc: "We create authentic content that delivers true value to your audience",
      hoverColor: "[#EB7DB8]",
    },
    {
      title: "SaaS Marketing",
      desc: "Experts work with your business to find potential clients",
      hoverColor: "[#ffc1a0]",
    },
    {
      title: "Content Marketing",
      desc: "We create authentic content that delivers true value to your audience",
      hoverColor: "[#FFC1A0]",
    },
    {
      title: "SEO",
      desc: "Experts work with your business to find potential clients",
      hoverColor: "[#EB7DB8]",
    },
  ];

  return (
    <div>
      <WidthContainer className="flex grid-cols-3 flex-col gap-14 md:grid">
        <div className="flex flex-col gap-8 p-3">
          <h2>
            Our <br /> services
          </h2>
          <p className="max-w-[90%] md:max-w-full">
            We focus on the data that isreally importent for making each of our
            decisions constantly testing, configuring and optamizing proceses.
          </p>
          <Button>Learn More</Button>
        </div>
        <div className="col-span-2 flex grid-cols-2 flex-col gap-4 sx:grid ">
          {serviceList.map((service) => (
            <SingleService key={service.title} service={service} />
          ))}
        </div>
      </WidthContainer>
    </div>
  );
}

export default ServiceSection;

const SingleService = ({ service }: any) => {
  const bg_c = `hover:bg-${service.hoverColor}`;

  return (
    <div
      key={service.title}
      className={clsx(
        `flex flex-col rounded-xl border border-[#212121] p-3 transition-all duration-200 odd:hover:bg-[#EB7DB8] even:hover:bg-[#ffc1a0] `,
      )}
    >
      <h3 className="my-14">{service.title}</h3>
      <p>{service.desc}</p>
    </div>
  );
};

// c8:3a:35:c0:0f:ef
