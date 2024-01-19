import { dubbleQurtation } from "@/lib/constance";
import { UserReview } from "@/type/typs";
import Image from "next/image";
import { FC } from "react";

type SingleReviewProps = {
  reviewData: UserReview;
};

const SingleReview: FC<SingleReviewProps> = ({ reviewData }) => {
  return (
    <div className="flex w-full shrink-0 flex-col gap-7 border-black odd:border-r odd:pr-3 even:pl-3 md:w-1/2">
      <div className="flex h-full gap-2">
        <img src={dubbleQurtation} alt="" className="h-10 w-fit fill-primary" />
        <div className="flex flex-col gap-5">
          <h2>{reviewData.title}</h2>
          <p>{reviewData.description}</p>
          <div className="mt-auto flex items-center gap-2">
            <div className="row-span-1 h-12 w-12 overflow-hidden rounded-full">
              <Image
                height={150}
                width={150}
                src={reviewData.author.img}
                alt=""
              />
            </div>
            <div className="flex flex-col text-left">
              <p className="font-medium">{reviewData.author.name}</p>
              <p className="text-sm">{reviewData.author.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
