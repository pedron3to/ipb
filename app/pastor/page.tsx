import Image from "next/image";
import backgroundImage from "../../public/ipb1.png";

export default function Pastor() {
  return (
    <>
      <div className="bg-[#4A634B] h-40 md:h-[300px] flex justify-center items-end md:items-center ">
        <h1 className="text-2xl md:text-6xl font-semibold mb-2 text-white text-left mt-20 mb-4">
          O Pastor
        </h1>
      </div>
      <div className="mx-auto max-w-7xl ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex  p-4 items-center justify-center">
            <div className="md:hidden mb-4">
              <Image
                src="/pastor.webp"
                alt="Placeholder"
                width={250}
                height={250}
              />
            </div>
            <div className="hidden md:block">
              <Image
                src="/pastor.webp"
                alt="Placeholder"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className=" p-4 md:p-20 mb-8">
            <h2 className="text-lg md:text-3xl font-semibold my-2 md:my-8 text-[#4DA186]">
              Guilherme Andrade
            </h2>
            <p className="text-p text-sm md:text-lg font-thin">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
