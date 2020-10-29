
import SiteLayout from "../components/Layouts/SiteLayout";

const Index = ()=>(

    <div className="HomeClass h-screen">

<div className="Picture h-screen"></div>
        <div className="AboutMe pt-10">

            <h1 className="nametag text-right  border-solid border-b border-gray-600 w-4/5 antialiased">JOSE EDUARDO</h1>
            <h1 className="nametag2 border-solid border-b border-gray-600 w-4/5 antialiased "> GOMEZ PEREZ</h1>
            <h1 className="sectiontag pl-2 pt-1 w-4/5 text-center mt-4 ">About me</h1>
            <br/>
            <h2 className="aboutsection   w-4/5  text-justify text-lg ">Hi, im Jose Eduardo , I graduated from Mesoamericana University("Universidad Mesoamericana" in Spanish ) in 2019 with a degree  in Electronics and Communications Engineering, I been passionate about programing,electronics and math since Middle school, im looking to develop projects related to software engineering/electronics, when Im not programing or making electronic projects I  like to hike,read, draw  and learn new languages  </h2>

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