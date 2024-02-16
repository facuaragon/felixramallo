import Link from "next/link";

export default function Nav() {
  return (
    <>
      <ul className=" list-none flex gap-2 justify-end w-10/12">
        <li>
          <Link href="#">Acerca de mi</Link>
        </li>
        <li>
          <Link href="#">Trabajos</Link>
        </li>
      </ul>
    </>
  );
}
