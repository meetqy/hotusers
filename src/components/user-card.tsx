"use client";

import React from "react";
import { Avatar, Button, cn } from "@nextui-org/react";
import { Link } from "~/navigation";
import { Icon } from "@iconify/react";

export type UserItem = {
  name: string;
  avatar: string;
  role: string;
  bio?: string;
  social: {
    twitter?: string;
    github?: string;
  };
};

export type UserCardProps = React.HTMLAttributes<HTMLDivElement> & UserItem;

const UserCard = React.forwardRef<HTMLDivElement, UserCardProps>(
  ({ children, avatar, name, role, bio, social, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col items-center rounded-large bg-content1 px-4 py-6 text-center shadow-small",
        className,
      )}
      {...props}
    >
      <Avatar className="h-20 w-20" src={avatar} />
      <h3 className="mt-2 font-medium">{name || children}</h3>
      <span className="text-small text-default-500">{role}</span>
      <p className="mb-4 mt-2 text-default-600">{bio}</p>
      <div className="flex">
        {social.twitter && (
          <Button as={Link} href="#" isIconOnly variant="light" radius="full">
            <Icon icon={"mdi:twitter"} className="h-6 w-6 text-default-400" />
          </Button>
        )}

        {social.github && (
          <Button as={Link} href="#" isIconOnly variant="light" radius="full">
            <Icon icon={"mdi:github"} className="h-6 w-6 text-default-400" />
          </Button>
        )}
      </div>
    </div>
  ),
);

UserCard.displayName = "UserCard";

export default UserCard;
