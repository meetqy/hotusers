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
          size="sm"
          as={Link}
          // href={`/tag/${tag.id}`}
          href={"#"}
          color="primary"
          className="capitalize"
        >
          {tag.name}
        </Chip>
      ),
  );
};

const Scoicals = (props: { [key in string]: string | undefined }) => {
  return (
    <div className="flex items-center gap-x-2">
      {props.twitter && (
        <Button
          as={Link}
          href={props.twitter}
          isIconOnly
          variant="ghost"
          color="warning"
        >
          <Icon icon={"mdi:twitter"} className="h-6 w-6" />
        </Button>
      )}

      {props.github && (
        <Button
          as={Link}
          href={props.github}
          isIconOnly
          variant="ghost"
          color="warning"
        >
          <Icon icon={"mdi:github"} className="h-6 w-6" />
        </Button>
      )}

      {props.youtube && (
        <Button
          as={Link}
          href={props.youtube}
          isIconOnly
          variant="ghost"
          color="warning"
        >
          <Icon icon={"mdi:youtube"} className="h-6 w-6" />
        </Button>
      )}

      {props.douyin && (
        <Button
          as={Link}
          href={props.douyin}
          isIconOnly
          variant="ghost"
          color="warning"
        >
          <Icon icon={"fa6-brands:tiktok"} className="h-6 w-6" />
        </Button>
      )}

      {props.bilibili && (
        <Button
          as={Link}
          href={props.bilibili}
          isIconOnly
          variant="ghost"
          color="warning"
        >
          <Icon icon={"ant-design:bilibili-outlined"} className="h-6 w-6" />
        </Button>
      )}

      {props.xhs && (
        <Link href={props.xhs}>
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
    <div
      className={cn(
        "relative flex flex-col items-center rounded-large bg-content1 px-4 py-6 text-center shadow-small transition-all",
        className,
      )}
    >
      <Link href={`/u/${id}`}>
        <Avatar className="h-20 w-20" src={avatar?.data?.attributes?.url} />
      </Link>
      <h3 className="mt-2 text-large font-medium">
        <Link href={`/u/${id}`} className="hover:text-primary">
          {nickname || children}
        </Link>
      </h3>
      <div className="mt-2 flex flex-wrap gap-2">
        {<Tags tags={tagsData} />}
      </div>
      <p className="mb-6 mt-2 line-clamp-3 text-default-600">{bio}</p>

      <Scoicals
        twitter={user.twitter?.link}
        github={user.github?.link}
        youtube={user.youtube?.link}
        douyin={user.douyin?.link}
        xhs={user.xhs?.link}
        jike={user.jike?.link}
        bilibili={user.bilibili?.link}
      />
    </div>
  );
};

export default UserCard;
