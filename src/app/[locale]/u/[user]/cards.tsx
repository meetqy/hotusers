import { cn } from "~/utils/cn";

interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

export const Card2x2 = (props: CardProps) => {
  return (
    <div className={cn("col-span-2 row-span-2", props.className)}>
      {props.children}
    </div>
  );
};

export const Card1x2 = (props: CardProps) => {
  return (
    <div className={cn("col-span-2 row-span-1", props.className)}>
      {props.children}
    </div>
  );
};

export const Card1x1 = (props: CardProps) => {
  return <div className={props.className}>{props.children}</div>;
};
