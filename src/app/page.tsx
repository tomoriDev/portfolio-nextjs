import { BannerComponent } from "@/components/banner";
import NavbarComponent from "@/components/navbar";

export default function Home() {
  return (
    <div className="h-lvh flex flex-col">
      <div className="">
        <NavbarComponent />
      </div>

      <div className="banner">
        <BannerComponent />
      </div>
    </div>
  );
}
