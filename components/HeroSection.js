import React from "react";
import Cta from "./Cta";

const HeroSection = () => {
  const callToActions = [
    { id: 1, name: "Read", slug: "stories", isPrimary: true },
    { id: 2, name: "Sign Up", slug: "signup", isPrimary: false },
  ];

  return (
    <section className="flex flex-col w-full mx-auto pt-10 text-white bg-hero-section sm:bg-no-repeat bg-cover bg-center h-screen">
      <div className="container max-w-screen-lg mx-auto w-full flex flex-col h-full items-left justify-center px-4 lg:px-0">
        <div className="hero-content">
          <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl mb-6">
            Be <span className="text-primary-yellow">Encouraged.</span> <br />{" "}
            Be <span className="text-primary-yellow">Motivated</span>
          </h1>
          <p className="text-lg text-light">
            Every programmer struggles but the stories about the struggle <br />{" "}
            are usually unheard. That is why this platform was created.
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
