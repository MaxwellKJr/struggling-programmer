import React from "react";
import Cta from "./Cta";

const HeroSection = () => {
  const callToActions = [
    { id: 1, name: "Read", slug: "stories", isPrimary: true },
    { id: 2, name: "Sign Up", slug: "signup", isPrimary: false },
  ];

  return (
    <section className="flex flex-col w-full mx-auto pt-10 text-white bg-hero-section sm:bg-no-repeat bg-cover bg-center h-screen">
      <div className="container mx-auto w-full flex flex-col h-full items-left justify-center px-4">
        <div className="hero-content">
          <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl mb-6">
            Be Encouraged. <br /> Be Motivated.
          </h1>
          <p className="text-lg text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Iusto suscipit voluptas dignissimos ratione facere.
          </p>
        </div>
        <div
          className="ctas"
          className="text-center grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 mt-10 w-full sm:w-1/2 lg:w-1/4"
        >
          {callToActions &&
            callToActions.map((callToAction) => {
              return <Cta key={callToAction.id} callToAction={callToAction} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
