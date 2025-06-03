import Link from "next/link";

export const Nav = () => {
    return (
        <nav className="flex gap-6 mx-6">
            <Link href="/">SHOP</Link>
            <Link href="/">EXPLORE</Link>
        </nav>
    )
}