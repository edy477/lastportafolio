import Link from "next/link";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Head from 'next/head';


const SiteLayout = ({ children }) => (
    //border-solid border-r border-gray-600
    <div className="grid-container">
<Head>
    <link rel="stylesheet" href="/Fonts/fonts.css" />
    <link rel="stylesheet" href="/Fonts/jervis.css" />
</Head>

            <div className="Sidebar border-solid border-r border-gray-600 flex flex-col pl-2  content-end"  >
<Sidebar/>
            </div>
            <div className="Navbar border-solid border-b border-gray-600  ">
                <Navbar/>
            </div>
            <div className="Content-Bar"> {children}</div>



    </div>

);

export default SiteLayout;


/*import Sidebar from "../Sidebar";

const SiteLayout =  ({children}) => {
    <div className="grid-container">
        <div className="Sidebar">
            <Sidebar></Sidebar>
        </div>

        <div className="Content">{children}</div>
    </div>
}
export default SiteLayout;*/