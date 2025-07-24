import Container from "../ui/container/container";
import Fb from "../ui/icons/fb";
import Gplus from "../ui/icons/gplus";
import Inst from "../ui/icons/inst";
import Tg from "../ui/icons/tg";
import Viber from "../ui/icons/viber";
import WhatsApp from "../ui/icons/whatsapp";
import Yt from "../ui/icons/yt";

export default function Footer() {
  return (
    <div className="border-t border-neutral-600 relative overflow-clip">
      <div className="absolute -top-10 w-full flex justify-center">
        <img
          src="../src/assets/footer.png"
          alt=""
          className="absolute -top-[1088px] blur-[936px] z-[-1]"
        />
      </div>
      <Container>
        <div className="py-12 flex gap-8 ">
          <div className="flex-1/2 flex flex-col ">
            <div className="flex flex-col gap-6 min-h-[582px]">
              <h3 className="text-sm text-neutral-600">Navigation</h3>
              <nav>
                <ul className="grid grid-rows-6 grid-cols-[150px_150px] grid-flow-col gap-y-1.5 gap-x-24">
                  <li>
                    <a href="/">Schedule</a>
                  </li>
                  <li>
                    <a href="/">Courses</a>
                  </li>
                  <li>
                    <a href="/">Pricing</a>
                  </li>
                  <li>
                    <a href="/">Payment</a>
                  </li>
                  <li>
                    <a href="/">Study In Spain</a>
                  </li>
                  <li>
                    <a href="/">Books</a>
                  </li>
                  <li>
                    <a href="/">About school</a>
                  </li>
                  <li>
                    <a href="/">Gallery</a>
                  </li>
                  <li>
                    <a href="/">News</a>
                  </li>
                  <li>
                    <a href="/">Contacts</a>
                  </li>
                </ul>
              </nav>
              <div className="mt-auto text-neutral-600 flex flex-col text-sm gap-1">
                <a href="/">Copyright</a>
                <a href="/">Privacy</a>
                <a href="/">All rights reserved</a>
              </div>
            </div>
          </div>
          <div className="flex-1/2 flex flex-col min-h-[582px] gap-16">
            <div className="flex flex-col gap-6">
              <h3 className="text-sm text-neutral-600">Contact us</h3>
              <ul className="grid grid-rows-2 grid-cols-2 grid-flow-col">
                <li>
                  <a href="tel:+14065550120">+1 (406) 555-0120</a>
                </li>
                <li>
                  <a href="tel:+14065550103">+1 (406) 555-0103</a>
                </li>
                <li>
                  <a href="mailto:hellp@promptverse.com">
                    hellp@promptverse.com
                  </a>
                </li>
              </ul>
            </div>
            {/*  */}
            <div className="flex gap-40 flex-wrap">
              <div className="flex flex-col gap-6">
                <h3 className="text-sm text-neutral-600">Follow us</h3>
                <div className="flex justify-between">
                  <ul className="flex gap-2.5">
                    <li>
                      <a
                        href="/"
                        className="w-12 h-12 flex justify-center items-center border border-neutral-600 rounded-full  hover:bg-neutral-900 transition-colors"
                      >
                        <Fb />
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="w-12 h-12 flex justify-center items-center border border-neutral-600 rounded-full  hover:bg-neutral-900 transition-colors"
                      >
                        <Gplus />
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="w-12 h-12 flex justify-center items-center border border-neutral-600 rounded-full  hover:bg-neutral-900 transition-colors"
                      >
                        <Inst />
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="w-12 h-12 flex justify-center items-center border border-neutral-600 rounded-full  hover:bg-neutral-900 transition-colors"
                      >
                        <Yt />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <h3 className="text-sm text-neutral-600">Let’s chat</h3>
                <div className="flex justify-between">
                  <ul className="flex gap-2.5">
                    <li>
                      <a
                        href="/"
                        className="w-12 h-12 flex justify-center items-center border border-neutral-600 rounded-full  hover:bg-neutral-900 transition-colors"
                      >
                        <Viber />
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="w-12 h-12 flex justify-center items-center border border-neutral-600 rounded-full  hover:bg-neutral-900 transition-colors"
                      >
                        <Tg />
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="w-12 h-12 flex justify-center items-center border border-neutral-600 rounded-full  hover:bg-neutral-900 transition-colors"
                      >
                        <WhatsApp />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col gap-6">
              <h3 className="text-sm text-neutral-600">Location</h3>
              <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
            </div>
            <div className="mt-auto flex justify-between text-neutral-600">
              <a href="/">© 2024 — Promptverse AI</a>
              <div className="flex gap-8">
                <button className="cursor-pointer text-white">En</button>
                <button className="cursor-pointer">Es</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
