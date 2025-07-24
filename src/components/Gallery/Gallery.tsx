import Section from "../ui/section/Section";

const title = "Images like never seen before";
const subtitle =
  "Discover endless creativity with PromptVerse. Generate diverse content effortlessly using prompts. Stay updated with real-time trends, automate tasks, and extract insights from any document or URL. All within a sleek, futuristic design. Create more, effortlessly.";

export default function Gallery() {
  return (
    <Section title={title} subtitle={subtitle}>
      <div className="mt-30 max-w-[1308px] w-full mx-auto bg-neutral-900 rounded-lg grid grid-cols-4 grid-rows-2 gap-[18px] p-10">
        <a className=" row-start-1 row-end-3 col-start-1 col-end-3" href="/">
          <img
            src="../src/assets/gallery/1.jpg"
            alt=""
            className="rounded-md max-w-[602px] w-full"
          />
        </a>
        <a className=" " href="/">
          <img
            src="../src/assets/gallery/2.jpg"
            alt=""
            className="rounded-md max-w-[291px] w-full"
          />
        </a>
        <a className=" " href="/">
          <img
            src="../src/assets/gallery/3.jpg"
            alt=""
            className="rounded-md max-w-[291px] w-full"
          />
        </a>
        <a className=" " href="/">
          <img
            src="../src/assets/gallery/4.jpg"
            alt=""
            className="rounded-md max-w-[291px] w-full"
          />
        </a>
        <a className=" " href="/">
          <img
            src="../src/assets/gallery/5.jpg"
            alt=""
            className="rounded-md max-w-[291px] w-full"
          />
        </a>
      </div>
    </Section>
  );
}
