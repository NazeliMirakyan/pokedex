import React from "react";
import NextLink from "next/link";

const Link = ({
  href,
  children,
  ...props
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <NextLink href={href}>
    <a {...props}>{children}</a>
  </NextLink>
);

export default Link;
