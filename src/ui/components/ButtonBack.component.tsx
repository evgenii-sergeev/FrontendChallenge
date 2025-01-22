import { SquareArrowLeft } from "lucide-react";

import Link from "next/link";

interface ButtonBackProps {
  route?: string;
}

export default function ButtonBack({ route = "/" }: ButtonBackProps) {
  return (
    <Link href={route} className="px-2 py-1">
      <SquareArrowLeft />
    </Link>
  );
}
