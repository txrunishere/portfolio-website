import { cn } from "@/lib/utils";

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export const Heading = ({ children, className }: HeadingProps) => {
  return (
    <h3 className={cn("font-space-grotesk text-xl font-semibold", className)}>
      {children}
    </h3>
  );
};
