import WidthContainer from "@/Components/WidthContainer";
import React from "react";
import SingleBlogPreview from "./SingleBlogPreview";
import { blog1, blog2, contentMarketing } from "@/lib/constance";
import Button from "@/Components/Ui/Button";

function BlogComponent() {
  type blogPType = {
    id: number;
    title: string;
    begth: string;
    description: string;
    img: string;
  };
  const blogPriviewList: blogPType[] = [
    {
      id: 1,
      title: "Clean up your Email marketing strategy fof better open rates",
      description:
        "Clean up your Email marketing strategy fof better open rates",
      img: blog1,
      begth: "Email marketing",
    },
    {
      id: 2,
      title: "Clean up your Email marketing strategy fof better open rates",
      description:
        "Clean up your Email marketing strategy fof better open rates",
      img: blog2,
      begth: "Email marketing",
    },
  ];

  return (
    <div>
      <WidthContainer className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h2>Blog</h2>
          <p className="max-w-[50%] text-sm  md:max-w-[30%] md:text-base">
            Read article
          </p>
        </div>
        <div className="flex grid-cols-2 flex-col gap-5 md:grid">
          {blogPriviewList.map((post) => (
            <SingleBlogPreview key={post.id} data={post} />
          ))}
        </div>
        <Button className="mx-auto my-3">Load More</Button>
      </WidthContainer>
    </div>
  );
}

export default BlogComponent;
