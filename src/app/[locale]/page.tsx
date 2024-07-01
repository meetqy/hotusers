import { Button, Spacer } from "@nextui-org/react";
import { notFound } from "next/navigation";
import UserCard from "~/components/user-card";
import { strapi } from "~/strapi/api";

const getList = async () => {
  const res = await strapi.GET("/accounts", {
    params: {
      query: {
        // @ts-ignore
        "populate[0]": "tags",
        "populate[1]": "xhs",
        "populate[2]": "twitter",
        "populate[3]": "github",
      },
    },
  });

  if (!res.data) return null;

  const data = res.data;

  return data;
};

export default async function Page() {
  const res = await getList();
  if (!res) return notFound();
  const { data, meta } = res;

  return (
    <section className="py-12 md:py-24 xl:py-36">
      <div className="mx-auto flex flex-col text-center">
        <h2 className="font-medium text-secondary">Discover 50 users</h2>
        <Spacer y={2} />
        <h1 className="font-serif text-4xl font-bold italic tracking-tight lg:text-5xl">
          Discover{" "}
          <span className="relative text-primary">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute left-0 top-2/3 h-[0.58em] w-full fill-secondary text-current"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            Hot Users
          </span>
        </h1>
        <Spacer y={4} />
        <h2 className="text-large text-default-500">
          Discover Hot Users in Every Niche
        </h2>
        <Spacer y={8} />
        <div className="flex w-full justify-center gap-2">
          <Button variant="ghost">About us</Button>
          <Button color="secondary">Open positions</Button>
        </div>
      </div>
      <div className="mt-12 grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((member, index) => (
          <UserCard
            key={index}
            user={{
              ...member.attributes!,
              id: member.id!,
            }}
          />
        ))}
      </div>
    </section>
  );
}
