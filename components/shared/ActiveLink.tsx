import { CSSProperties, FC } from "react";
import { useRouter } from "next/router";

import Link from "next/link";

const activeStyle:CSSProperties = {
  color: "#0070f3",
};

interface Props {
  text: string;
  href: string;
}

export const ActiveLink:FC<Props> = ({ text, href }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a style={asPath === href ? activeStyle : undefined}>{text}</a>
    </Link>
  );
};
