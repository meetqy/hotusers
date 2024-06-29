import { Button, Image } from "@nextui-org/react";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  PinterestIcon,
  TwitterXIcon,
} from "~/components/logos";

export default function Page() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center">
      <section className="grid aspect-video w-full grid-cols-2 rounded-large bg-content1 shadow-medium">
        <div className="flex flex-col border-r border-r-default-100">
          {/* <Image
            src="https://picsum.photos/300/300"
            className="aspect-square w-44"
            radius="full"
            alt="Profile picture"
          />

          <p className="font-serif text-6xl font-bold text-default-600">
            Henry
          </p>

          <p className="text-xl text-default-400">
            Semper feugiat nibh sed pulvinar proin gravida et lectus morbi.
          </p> */}
        </div>

        <div className="flex flex-col items-center gap-5">
          {/* {[1, 2, 3, 4, 5, 6].map((item) => (
            <Button
              key={item}
              className="w-full justify-between lg:h-20 lg:px-10"
              radius="full"
              variant="flat"
              color="secondary"
            >
              <span className="text-xl font-medium">Github</span>{" "}
              <GithubIcon className="h-8 w-8" />
            </Button>
          ))} */}
        </div>
      </section>
    </div>
  );
}
