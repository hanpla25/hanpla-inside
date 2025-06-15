import NavItem from "./nav-item";

export default function NavList() {
  const links = [{ name: "갤러리", link: "/category" }];
  return (
    <ul>
      {links.map((item, i) => (
        <NavItem item={item} key={i} />
      ))}
    </ul>
  );
}
