
import SiteLayout from "../components/Layouts/SiteLayout";

import ResumeLayout from "../components/Layouts/ResumeLayout";
const ResumeCV = () => {
//   <h1 className="projectshead    text-center text-2xl  w-1/3">Projects</h1>
    return(
        <div className="xxs">

<h1>My Resume</h1>
        </div>
    )
}
ResumeCV.getLayout = page => (
    <SiteLayout>
        <ResumeLayout>{page}</ResumeLayout>
    </SiteLayout>
)

export default ResumeCV;
