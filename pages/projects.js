import SiteLayout from "../components/Layouts/SiteLayout";
import ProjectLayout from "../components/Layouts/ProjectLayout";
import CardProject from "../components/CardProject";
const Projects = () => {

    return(
        <div className="projects pt-12 pl-12 w-4/5">
            <h1 className="text-center text-2xl boder-solid border-b border-gray-600 ">Projects</h1>
            <br/>
            <div className="grid-projects">
              <CardProject/>



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
