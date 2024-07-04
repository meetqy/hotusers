"use client";
import { Select, SelectItem } from "@nextui-org/react";
import { useParams, usePathname, useRouter } from "next/navigation";
import {} from "~/navigation";

export const LanguageSelect = () => {
  const params = useParams<{ locale: string }>();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Select
      className="w-32"
      placeholder="Select Language"
      aria-label="Select Language"
      selectedKeys={[params.locale]}
      onChange={(e) => {
        if (pathname.split("/").length === 2)
          return router.replace("/" + e.target.value);
        router.push(pathname.replace(/\/.*?\//, `/${e.target.value}/`));
      }}
    >
      <SelectItem key={"en"} value="en">
        🇺🇸 English
      </SelectItem>
      <SelectItem key={"zh"} value="zh">
        🇨🇳 中文
      </SelectItem>
    </Select>
  );
};
