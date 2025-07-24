import { Button } from "../ui/button";
import Container from "../ui/container/container";
import Section from "../ui/section/Section";

export default function CTA() {
  return (
    <Section className="mb-[220px]">
      <Container>
        <div className="text-5xl rounded-4xl bg-[url(../src/assets/cta-bg.png)] bg-cover bg-no-repeat bg-center max-h-[474px] h-[474px] w-full flex flex-col items-center gap-14 p-10 text-center font-semibold">
          <h2 className="max-w-[983px] leading-19 mt-[108px]">
            Promptverse has no limitation. Get Started in a journey with
            promptverse.
          </h2>
          <Button className="w-[221px]">Create an Acoount</Button>
        </div>
      </Container>
    </Section>
  );
}
