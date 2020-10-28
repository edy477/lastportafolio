import Link from "next/link";
//D8CCCD, #F4E9DD
const Navbar = () => {
    return (
        <div className="w-4/5">
            <ul className="flex flex-row space-x-5 justify-end mr-30 mt-2 mb-2 ">
                 <li>
                     <Link href="/"><a>Home</a></Link>
                 </li>
                <li>
                    <Link href="/projects"><a>Projects</a></Link>
                </li>
                <li>
                    <Link href="#"><a>CV</a></Link>
                </li>
                <li>
                    <Link href="/contact"><a>Contact</a></Link>
                </li>
            </ul>
        </div>

    )
}
export default Navbar;