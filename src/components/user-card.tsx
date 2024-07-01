"use client";

import React from "react";
import { Avatar, Button, Chip, cn, Image } from "@nextui-org/react";
import { Link } from "~/navigation";
import { Icon } from "@iconify/react";
import { type components } from "~/strapi/strapi";

export type UserItem = components["schemas"]["Account"];

export type UserCardProps = React.HTMLAttributes<HTMLDivElement> & {
  user: UserItem & { id: number };
};

const Tags = (props: {
  tags: { id: number | undefined; name: string | undefined }[];
}) => {
  return props.tags.map(
    (tag) =>
      tag.id &&
      tag.name && (
        <Chip
          key={tag.id}
          variant="flat"
          radius="full"
          size="sm"
          color="primary"
        >
          {tag.name}
        </Chip>
      ),
  );
};

const Scoicals = (props: { [key in string]: string | undefined }) => {
  return (
    <div className="flex items-center">
      {props.twitter && (
        <Button
          as={Link}
          href={props.twitter}
          isIconOnly
          variant="light"
          radius="full"
        >
          <Icon icon={"mdi:twitter"} className="h-6 w-6 text-default-400" />
        </Button>
      )}

      {props.github && (
        <Button
          as={Link}
          href={props.github}
          isIconOnly
          variant="light"
          radius="full"
        >
          <Icon icon={"mdi:github"} className="h-6 w-6 text-default-400" />
        </Button>
      )}

      {props.youtube && (
        <Button
          as={Link}
          href={props.youtube}
          isIconOnly
          variant="light"
          radius="full"
        >
          <Icon icon={"mdi:youtube"} className="h-6 w-6 text-default-400" />
        </Button>
      )}

      {props.xhs && (
        <Link href={props.xhs} className="px-2">
          <Image src="/logos/xhs.png" alt="xhs scoical link" className="w-12" />
        </Link>
      )}
    </div>
  );
};

const UserCard = (props: UserCardProps) => {
  const { nickname, avatar, bio, tags, id } = props.user;
  const { className, children } = props;
  const user = props.user;

  const tagsData =
    tags?.data?.map((tag) => {
      return {
        id: tag.id,
        name: tag.attributes?.name,
      };
    }) ?? [];

  return (
    <Link
      className={cn(
        "relative flex cursor-pointer flex-col items-center rounded-large border border-default-100 bg-content1 px-4 py-6 text-center transition-all hover:border-transparent hover:shadow-small",
        className,
      )}
      href={`/u/${id}`}
    >
      <Avatar className="h-20 w-20" src={avatar} />
      <h3 className="mt-2 font-medium">{nickname || children}</h3>
      <div className="mt-2 flex flex-wrap gap-2">
        {<Tags tags={tagsData} />}
      </div>
      <p className="mb-4 mt-2 text-default-600">{bio} </p>

      <Scoicals
        twitter={user.twitter?.link ?? `https://x.com/${nickname}`}
        github={user.github?.link ?? `https://github.com/${nickname}`}
        youtube={user.youtube?.link ?? `https://youtube.com/${nickname}`}
        douyin={user.douyin?.link}
        xhs={user.xhs?.link}
        jike={user.jike?.link}
      />
    </Link>
  );
};

export default UserCard;
