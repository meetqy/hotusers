import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("Index");

  return (
    <div>
      <h1>{t("title")}</h1>
      <Button>Press me</Button>
    </div>
  );
}
