import React from "react";

export const BannerComponent = () => {
  return (
    <div className="h-[calc(100vh-80px)] bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-primary text-5xl font-semibold">
        Hi! I'm Carlos Torres
      </h1>

      <h2 className="text-primary text-2xl mt-8 text-center">
        A Frontend focused Web Developer building the frontend of websites and
        Web Applications that leads to the success of the overall product
      </h2>
    </div>
  );
};
