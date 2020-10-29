import Link from "next/link";
//D8CCCD, #F4E9DD
const Navbar = () => {
    return (
        <div className="w-4/5 h-full">
            <ul className="navbars flex flex-row space-x-5 justify-end mr-30 mt-2 mb-2 ">
                 <li className="linkbar pl-1 pr-1">
                     <Link href="/"><a>Home</a></Link>
                 </li>
                <li className="linkbar pl-1 pr-1">
                    <Link href="/projects"><a>Projects/Interests</a></Link>
                </li>
                <li className="linkbar pl-1 pr-1">
                    <Link href="#"><a>CV/Resume</a></Link>
                </li>
                <li className="linkbar pl-1 pr-1">
                    <Link href="/contact"><a>Contact</a></Link>
                </li>
            </ul>
        </div>

    )
}
export default Navbar;