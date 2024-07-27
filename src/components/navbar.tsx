"use client";
import ButtonComponent from "./button/button";

const NavbarComponent = () => {
  const downloadResume = () => {
    console.log("downloading...");
  };

  return (
    <nav className="h-20 flex items-center justify-between px-6">
      <div className="text-white text-xl font-bold">Logo</div>

      <div className="flex space-x-4">
        <ButtonComponent text="About" type="text" />
        <ButtonComponent text="Projects" type="text" />
        <ButtonComponent text="Contact" type="text" />
        <ButtonComponent
          text="Resume"
          type="outlined"
          onClick={() => downloadResume()}
        />
      </div>
    </nav>
  );
};

export default NavbarComponent;
