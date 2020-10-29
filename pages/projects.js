import SiteLayout from "../components/Layouts/SiteLayout";
import ProjectLayout from "../components/Layouts/ProjectLayout";
import CardProject from "../components/CardProject";
import CardProject2 from "../components/CardProject2";
const Projects = () => {
//   <h1 className="projectshead    text-center text-2xl  w-1/3">Projects</h1>
    return(
        <div className="projects   pt-12 pl-12 w-4/5">

            <br/>
            <div className="grid-projects flex flex-row space-x-5">
              <CardProject/>
<CardProject2/>


            </div>
        </div>
    )
}
Projects.getLayout = page => (
    <SiteLayout>
        <ProjectLayout>{page}</ProjectLayout>
    </SiteLayout>
)

export default Projects;
