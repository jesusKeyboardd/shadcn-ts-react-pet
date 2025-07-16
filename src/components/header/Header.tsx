import { Logo } from "@/components/Logo/";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="py-7 border border-neutral-800 text-base">
      <div className="flex justify-between items-center max-w-[1308px] mx-auto gap-8">
        <div className="flex items-center gap-6">
          <a href="">About</a>
          <a href="">Technologies</a>
          <a href="">Products</a>
          <a href="">Discover</a>
        </div>
        <Logo />
        <div className="flex items-center gap-6">
          <a href="">Team</a>
          <a href="">Pricing</a>
          <a href="">Buy Premium</a>
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  );
}
