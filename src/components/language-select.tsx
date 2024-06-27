"use client";
import { Select, SelectItem } from "@nextui-org/react";
import { useParams, useRouter } from "next/navigation";

export const LanguageSelect = () => {
  const params = useParams<{ locale: string }>();
  const router = useRouter();

  return (
    <Select
      className="w-32"
      placeholder="Select Language"
      aria-label="Select Language"
      selectedKeys={[params.locale]}
      onChange={(e) => router.push(`/${e.target.value}`)}
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
