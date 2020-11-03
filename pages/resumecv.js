
import SiteLayout from "../components/Layouts/SiteLayout";

import ResumeLayout from "../components/Layouts/ResumeLayout";
const ResumeCV = () => {
//   <h1 className="projectshead    text-center text-2xl  w-1/3">Projects</h1>
    return(
        <div className="xxs">
            <div className="flex justify-center space-y-3 ">
                <div className="flex flex-col " >

                    <form   action="https://drive.google.com/file/d/1ZC6LoszikkffleHjM7C3b9wAn0f8SQwe/view?usp=sharing" method="get" target="_blank">
                        <button className="justify-center bg-indigo-700 text-white text-bold pl-2 pr-2 pt-1 pb-1 mt-5 mb-5" type="submit">Resume - CV</button>
                    </form>
                    <form  action=" https://drive.google.com/file/d/1LvKD6XrA2ktbXJUy-w7yEtInGUcQEtjm/view" method="get" target="_blank">
                        <button className="bg-indigo-700 text-white text-bold pl-2 pr-2 pt-1 pb-1 " type="submit"> CV Espanol/Spanish</button>
                    </form>



                </div>

            </div>

        </div>
    )
}
ResumeCV.getLayout = page => (
    <SiteLayout>
        <ResumeLayout>{page}</ResumeLayout>
    </SiteLayout>
)

export default ResumeCV;
