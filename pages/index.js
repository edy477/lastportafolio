
import SiteLayout from "../components/Layouts/SiteLayout";

const Index = ()=>(

    <div className="HomeClass">

<div className="Picture"></div>
        <div className="AboutMe pt-10">

            <h1 className="nametag text-right  border-solid border-b border-gray-600 w-4/5 antialiased">JOSE EDUARDO</h1>
            <h1 className="nametag2 border-solid border-b border-gray-600 w-4/5 antialiased "> GOMEZ PEREZ</h1>
            <h1 className="sectiontag pl-2 pt-1 w-4/5 text-center mt-4 ">About me</h1>
            <br/>
            <h2 className="aboutsection text-2xl ">Hi, im Jose Eduardo a recente gradutate  in  electronic engineering </h2>

        </div>
    </div>

)
Index.getLayout  = page => <SiteLayout>{page}</SiteLayout>
export default  Index;

/*import Nav from '../components/nav'
import Navbar from "../components/Navbar";
export default function IndexPage() {
  return (
      <div className="grid-container">
          <div className="Sidebar"><h1>Facebooks</h1></div>
          <div className="Navbar">
             <Navbar/>
          </div>
          <div className="Content-Bar"><h1>Description</h1></div>
      </div>
  )
}
*/