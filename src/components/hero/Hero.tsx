import { Button } from "../ui/button";
import { WandSparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative">
      <ul className="absolute top-0 left-0 w-full h-full overflow-clip">
        <li
          className="w-full h-full absolute inset-0"
          style={{
            backgroundImage: "url('src/assets/hero-bg.png')",
            backgroundSize: "contain",
          }}
        ></li>
        <li
          className="w-full h-full absolute bottom-[-125%] right-0 left-0"
          style={{
            backgroundImage: "url('src/assets/hero-item-big.png')",
            backgroundSize: "661px 661px",
            filter: "blur(624px)",
            backgroundClip: "border-box",
          }}
        ></li>
      </ul>
      <div className=" text-base flex flex-col justify-center items-center max-w-[878px]  text-center mx-auto relative h-[87dvh] gap-2">
        <h1 className="font-semibold">Promptverse AI</h1>
        <h2 className="font-medium text-[64px] leading-[74px] max-w-[674px]">
          Find Inspiration. Create, Generate, Produce & Automate.
        </h2>
        <p className="mt-5 text-base font-normal text-white opacity-60 tracking-[-0.018em]">
          Welcome to PromptVerse. Effortlessly create content, explore endless
          prompts, and stay ahead with real-time trends. Automate emails, social
          media, and more while our AI extracts knowledge from any document or
          URL. Experience a stunning, futuristic design that boosts
          productivity.
        </p>
        <div className="mt-12 flex gap-7">
          <Button variant="outline">
            Start Generating
            <WandSparkles />
          </Button>
          <Button>Download</Button>
        </div>
      </div>
    </section>
  );
}
