import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <Image src={"/1748918753080_1.png"} alt="로고" width={36} height={36} />
    </Link>
  );
}
