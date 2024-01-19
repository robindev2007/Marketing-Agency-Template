import React from "react";
import HeroSection from "./_components/HeroSection";
import ServiceSection from "./_components/ServiceSection";
import UsersReview from "./_components/UsersReview";
import FaqComponent from "./_components/FaqComponent";
import BlogComponent from "./_components/BlogComponent";

function MlabPage() {
  return (
    <div className="flex flex-col gap-20">
      <HeroSection />
      <ServiceSection />
      <UsersReview />
      <FaqComponent />
      <BlogComponent />
    </div>
  );
}

export default MlabPage;
