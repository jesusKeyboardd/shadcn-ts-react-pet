import { Button } from "../ui/button";
import Section from "../ui/section/Section";

const title = "Generate audio and music";
const subtitle =
  "Discover endless creativity with PromptVerse. Generate diverse content effortlessly using prompts. Stay updated with real-time trends, automate tasks, and extract insights from any document or URL. All within a sleek, futuristic design. Create more, effortlessly.";

export default function Generate() {
  return (
    <Section title={title} subtitle={subtitle}>
      <div className="max-w-[1308px] w-full mx-auto mt-30">
        <div className="w-full p-10 rounded-lg bg-neutral-900 flex flex-nowrap gap-5 justify-between">
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl font-medium">
              Enhance Your Projects with Ultra-Realistic AI Voices
            </h2>
            <div className="flex flex-col gap-5">
              <p>
                Create engaging voice content with unique AI Voices perfect for
                your audience.
              </p>
              <p>
                Generate Conversational, Long-form or Short-form Voice Content
                With Consistent Quality and Performances.
              </p>
              <p>
                Secure and Private Voice Generations with Full Commercial and
                Copyrights
              </p>
            </div>
            <div className="flex flex-wrap gap-4 max-w-[480px] mt-auto">
              <Button variant={"outline"}>Train voice models</Button>
              <Button variant={"outline"}>Text-to-speech</Button>
              <Button variant={"outline"}>AI voice generation</Button>
              <Button variant={"outline"}>AI music production</Button>
              <Button variant={"outline"}>AI Composition</Button>
              <Button>Generate now</Button>
            </div>
          </div>
          <iframe
            className="max-w-[586px] w-full aspect-square rounded-lg"
            src="https://www.youtube.com/embed/paWE-GvDO1c?si=ZY39RKNqxnI7tsIq"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </Section>
  );
}
