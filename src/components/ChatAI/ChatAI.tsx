import { TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Tabs } from "../ui/tabs";
import { Button } from "../ui/button";
import { Logo } from "../Logo";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import {
  Globe,
  LogOut,
  MessageSquareText,
  Sparkle,
  SquareArrowOutUpRight,
  Sun,
  User,
} from "lucide-react";
import SearchBar from "../ui/searchbar/searchbar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import { useState } from "react";

export default function ChatAI() {
  const tabs = {
    chat1: "chat1",
    community: "community",
  };

  const data = [
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.1",
    "Lorem ipsum dolor sit amet consectetur643 adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lor1234214em ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dol3456346r sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor si1345t amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.9",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit 3235amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum234 dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipis4564cing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor 436sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor646362 sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing el234it.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem 135135ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor 2256sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    "Lorem i2456sum dolor sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet42562345 consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.135",
    "Lorem ipsum dolo2456r sit amet consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  ];

  const [page, setPage] = useState(0);

  const pageSize = 18;

  const totalPages = Math.round(data.length / pageSize);

  function sliceData(data: string[], page: number, pageSize: number) {
    return data.slice(page * pageSize, (page + 1) * pageSize);
  }

  return (
    <Tabs className="mb-20" defaultValue={tabs.community}>
      <div className="rounded-xl bg-neutral-950 w-[100%] flex min-h-[930px] max-h-[930px] overflow-clip">
        <div className="bg-neutral-900 relative flex flex-col justify-between">
          <div className="flex flex-col pl-3 py-12 pr-7 gap-6 ">
            <Logo />
            <Button variant="accent">New Chat</Button>
            <TabsList>
              <ScrollArea>
                <TabsTrigger value={tabs.chat1} className="w-full">
                  <Button
                    variant="ghostIcon"
                    size="defaultIcon"
                    className="w-full"
                  >
                    <MessageSquareText />
                    <p>Chat 1</p>
                  </Button>
                </TabsTrigger>
              </ScrollArea>
            </TabsList>
          </div>

          <div>
            <TabsList>
              <Separator orientation="horizontal" />
              <div className="flex flex-col pl-3 py-12 pr-7">
                <TabsTrigger
                  asChild
                  value={tabs.community}
                  className="flex-1 flex"
                >
                  <Button
                    variant="ghostIcon"
                    size="defaultIcon"
                    className="flex-1"
                  >
                    <Globe />
                    <p className="">Community</p>
                  </Button>
                </TabsTrigger>

                <Button variant="ghostIcon" size="defaultIcon">
                  <Sun />
                  <p className="">Light mode</p>
                </Button>
                <Button variant="ghostIcon" size="defaultIcon">
                  <User />
                  <p className="">My Account</p>
                </Button>
                <Button variant="ghostIcon" size="defaultIcon">
                  <SquareArrowOutUpRight />
                  <p className="">Updates & FAQ</p>
                </Button>
                <Button variant="ghostIcon" size="defaultIcon">
                  <LogOut />
                  <p className="">Log out</p>
                </Button>
              </div>
            </TabsList>
          </div>

          <Separator
            orientation="vertical"
            className="absolute right-0 top-0"
          ></Separator>
        </div>

        <div className="py-12 pl-7 pr-27 flex-1">
          <TabsContent value={tabs.community} className="h-full">
            <div className="flex flex-col gap-12 h-full">
              <SearchBar
                placeholder="Search Prompts"
                className="max-h-fit"
              ></SearchBar>

              <div className="flex justify-between">
                <div className="flex gap-2 font-medium">
                  <Sparkle />
                  <h3>Trending Prompts</h3>
                </div>

                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/">PromptVerse AI</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <TabsList>
                          <TabsTrigger value={tabs.community}>
                            Community
                          </TabsTrigger>
                        </TabsList>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem className="text-white">
                      Trending Prompts
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>

              <div className="flex flex-wrap justify-between gap-6">
                {sliceData(data, page, pageSize).map((el, i) => (
                  <a
                    key={"datacontent" + i}
                    className="bg-neutral-900 rounded-md p-2 text-white max-w-[250px] text-left"
                  >
                    {el}
                  </a>
                ))}
              </div>

              <Pagination className="mt-auto">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      className="select-none"
                      onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
                    />
                  </PaginationItem>

                  {new Array(totalPages).fill(0).map((_, i) => (
                    <PaginationItem key={"pagination" + i}>
                      <div
                        className={
                          (i === page ? "text-white " : "text-neutral-500 ") +
                          "mr-2"
                        }
                        onClick={() => setPage(i)}
                      >
                        {i + 1}
                      </div>
                    </PaginationItem>
                  ))}

                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>

                  <PaginationItem>
                    <PaginationNext
                      className="select-none"
                      onClick={() =>
                        setPage((prev) => Math.min(prev + 1, totalPages - 1))
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </TabsContent>
          <TabsContent value={tabs.chat1}>Chat 1</TabsContent>
        </div>
      </div>
    </Tabs>
  );
}
