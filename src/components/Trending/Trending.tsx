import Section from "../ui/section/Section";
import { Button } from "../ui/button";
import { WandSparkles } from "lucide-react";
import { ChatAI } from "../ChatAI";

export default function Trending() {
  const title = "See Trending Prompts";
  const subTitle =
    "Discover endless creativity with PromptVerse. Generate diverse content effortlessly using prompts. Stay updated with real-time trends, automate tasks, and extract insights from any document or URL. All within a sleek, futuristic design. Create more, effortlessly.";

  return (
    <Section title={title} subtitle={subTitle}>
      <div className="max-w-[1308px] mx-auto">
        <div className=" my-12 flex gap-7 justify-center">
          <Button variant="outline">
            Start Generating
            <WandSparkles />
          </Button>
          <Button>Download</Button>
        </div>
        <ChatAI />
      </div>
    </Section>
  );
}
