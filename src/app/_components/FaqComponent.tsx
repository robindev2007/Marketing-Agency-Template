"use client";
import Button from "@/Components/Ui/Button";
import WidthContainer from "@/Components/WidthContainer";
import React, { useState } from "react";
import FaqQuestion from "./FaqQuestion";

function FaqComponent() {
  const [activeFaq, setActiveFaq] = useState(0);

  const faqQuetions = [
    {
      id: 1,
      title: "Do you work with small businss?",
      description:
        "We focus on the data that isreally importent for making each of our decisions constantly testing, configuring and optamizing proceses.",
    },
    {
      id: 3,
      title: "Do you work with small businssf?",
      description:
        "We focus on the data that isreally importent for making each of our decisions constantly testing, configuring and optamizing proceses.",
    },
    {
      id: 4,
      title: "Do you work with small businssf?",
      description:
        "We focus on the data that isreally importent for making each of our decisions constantly testing, configuring and optamizing proceses.",
    },
    {
      id: 2,
      title: "Do you work with small businssf?",
      description:
        "We focus on the data that isreally importent for making each of our decisions constantly testing, configuring and optamizing proceses.",
    },
  ];
  return (
    <div>
      <WidthContainer className="flex grid-cols-3 flex-col gap-7 md:grid md:gap-14">
        <div className="flex flex-col gap-8 px-3">
          <h2>FAQ</h2>
          <p className="max-w-[90%] md:max-w-full">
            We focus on the data that isreally importent for making each of our
            decisions constantly testing, configuring and optamizing proceses.
          </p>
          <Button>Learn More</Button>
        </div>
        <div className="col-span-2 flex grid-cols-2 flex-col gap-5">
          {faqQuetions.map((question) => (
            <FaqQuestion
              key={question.id}
              question={question}
              setFaq={setActiveFaq}
              activeFaq={activeFaq}
            />
          ))}
        </div>
      </WidthContainer>
    </div>
  );
}

export default FaqComponent;
