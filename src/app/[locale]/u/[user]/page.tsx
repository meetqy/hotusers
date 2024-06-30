import { Button, Image } from "@nextui-org/react";
import { Icon } from "@iconify/react";

export default function Page() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center p-4 xl:px-0">
      <section className="grid min-h-[24rem] flex-1 grid-cols-1 overflow-hidden rounded-medium bg-content1 shadow-medium md:grid-cols-5 lg:min-h-[32rem] lg:grid-cols-2">
        {/* left */}
        <div className="col-span-2 flex flex-col items-center justify-center gap-y-8 bg-content2 p-5 text-center md:p-10 lg:col-span-1 lg:gap-y-12 lg:p-20 xl:-mt-36">
          <Image
            src="https://picsum.photos/300/300"
            className="aspect-square w-32 lg:w-40 xl:w-44"
            radius="full"
            alt="Profile picture"
          />

          <div>
            <p className="font-serif text-3xl font-bold text-default-600 md:text-4xl lg:text-5xl xl:text-6xl">
              Henry
            </p>
            <p className="mt-4 text-large text-default-400 xl:text-xl">
              Semper feugiat nibh sed pulvinar proin gravida et lectus morbi.
            </p>
          </div>
        </div>

        {/* right */}
        <div className="col-span-3 flex flex-col items-center gap-5 p-5 md:p-10 lg:col-span-1 xl:p-20">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Button
              key={item}
              className="h-16 w-full justify-between px-8 xl:h-20"
              radius="full"
              variant="flat"
              color="secondary"
            >
              <span className="text-xl font-medium">Github</span>
              <Icon icon={"mdi:github"} className="text-5xl" />
            </Button>
          ))}
        </div>
      </section>
    </div>
  );
}
