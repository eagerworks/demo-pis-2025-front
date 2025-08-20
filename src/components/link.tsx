import type { VariantProps } from "class-variance-authority";
import NextLink from "next/link";
import cn from "@/helpers/cn";
import { buttonVariants } from "./Button";

type Props = React.ComponentProps<"a"> &
  VariantProps<typeof buttonVariants> & {
    href: string;
  };

function Link({ className, variant, size, href, children, ...props }: Props) {
  return (
    <NextLink
      href={href}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </NextLink>
  );
}

export { Link };
