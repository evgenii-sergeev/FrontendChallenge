import { SquareArrowLeft } from "lucide-react";

import Link from "next/link";

interface ButtonBackProps {
  route?: string;
  className?: string;
}

export default function ButtonBack({
  route = "/",
  className,
}: ButtonBackProps) {
  return (
    <Link href={route} className={className}>
      <SquareArrowLeft />
    </Link>
  );
}
