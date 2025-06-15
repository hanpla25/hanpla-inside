import Link from "next/link";

type Props = {
  item: { name: string; link: string };
};

export default function NavItem({ item }: Props) {
  return (
    <Link href={"/category"}>
      <li>{item.name}</li>
    </Link>
  );
}
