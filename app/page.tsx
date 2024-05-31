"use client";
import Carousel from "@/components/corousel";

export default function Home() {
  return (
    <>
      <Carousel />
      <div className="mx-auto max-w-3xl my-8 md:my-24 p-4">
        <h3 className="text-center text-lg md:text-4xl font-bold text-[#161822] mb-8">
          We are Renewal, a dynamic, family church with people of all ages
        </h3>
        <p className="text-center text-sm md:text-lg text-[#9b9997] leading-7 md:leading-8	">
          Renewal has a rich history spanning over 50 years and today is home to
          many people from across the Midlands. We are a dynamic, family church
          with people of all ages and from all walks of life and you are welcome
          to join us. We exist to lift up the Jesus from one to many!
        </p>
      </div>
    </>
  );
}
