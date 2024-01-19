import Image from "next/image";
import { FC } from "react";

type SingleBlogPreviewProps = {
  data: {
    title: string;
    begth: string;
    description: string;
    img: string;
  };
};

const SingleBlogPreview: FC<SingleBlogPreviewProps> = ({ data }) => {
  return (
    <div className="flex cursor-pointer flex-col gap-2 rounded-lg border border-black border-opacity-25 bg-white p-2 transition-all md:gap-4">
      <div className="h-full overflow-hidden rounded-md">
        <Image src={data.img} height={900} width={900} alt={data.description} />
      </div>
      <h3 className="pr-1 text-[1.5rem]">{data.title}</h3>
      <p className="pr-1">{data.description}</p>
    </div>
  );
};

export default SingleBlogPreview;
