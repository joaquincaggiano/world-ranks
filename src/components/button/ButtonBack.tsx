"use client";

import Link from "next/link";
import ArrowLeft from "../icons/ArrowLeft";
import { useState } from "react";

interface Props {
  url: string;
}

const ButtonBack = ({ url }: Props) => {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <Link
      href={url}
      className={`absolute top-5 left-5 ${
        mouseOver ? "bg-white" : "bg-dark2"
      } rounded-full p-2`}
      onMouseOver={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      <ArrowLeft
        width={20}
        height={20}
        color={mouseOver ? "#282B30" : "#FFF"}
      />
    </Link>
  );
};

export default ButtonBack;
