import React from "react";
import SingleReview from "./SingleReview";
import { UserReview } from "@/type/typs";
import { contentMarketing, review1, review2 } from "@/lib/constance";
import WidthContainer from "@/Components/WidthContainer";

function UsersReview() {
  const reviews: UserReview[] = [
    {
      title: "Their experience helped us to develop the business as a whole",
      description:
        "HLabs Marketing Agency exceeded our expectations with their tailored approach to our unique needs. They seamlessly integrated digital and traditional marketing tactics, resulting in a measurable boost in leads and conversions. A top-notch team that delivers results.",
      author: {
        name: "Philip Lane",
        role: "Busness owner",
        img: review1,
      },
    },
    {
      title: "The MLab team is fast and savvy, and truly ahead of the carve",
      description:
        "The growth squad model helped us stay focused in achiving key metrics and growth NoGood is quick and consistent delivering funnel growth.",
      author: {
        name: "Philip Lafdsfne",
        role: "Busness owner",
        img: review2,
      },
    },
  ];

  return (
    <div>
      <WidthContainer className="flex h-full flex-col gap-5 overflow-hidden md:flex-row md:gap-0">
        {reviews.map((review) => {
          return <SingleReview key={review.author.name} reviewData={review} />;
        })}
      </WidthContainer>
    </div>
  );
}

export default UsersReview;
