import SiteLayout from "../components/Layouts/SiteLayout";
import ContactLayout from "../components/Layouts/ContactLayout";
//        <h2> <img className="w-10 h-10 relative" src="/images/iconfinder_github_coding_dev_developer_5340257.png"/>
const Contact = () => {

    return(
        <div>
            <div className="contactcard flex justify-center mt-10" >


                <h1 className="contacttag w-28 pl-2 pr-2 pt-1 pb-1 shadow-2xl">Lets Tal'k</h1>




            </div>
            <ul className=" contax flex flex-col justify-center justify-items-center text-center space-y-2 mt-2  font-semibold">
                <li>

                    <a href="mailto:edy47@mesoamericana.edu.gt"> <h2>Email: edy47@mesoamericana.edu.gt</h2></a>
                </li>
                <li>

         <h2><a href="https://github.com/edy477"> Github: @ edy477</a></h2>
                </li>
                <li>
                    <h2><a href="https://www.linkedin.com/in/joseeduardogp/ ">Linkedin @ joseeduardogp </a></h2>
                </li>

            </ul>
        </div>

    )
}

Contact.getLayout = page => (
    <SiteLayout>
        <ContactLayout>{page}</ContactLayout>
    </SiteLayout>
)



export default Contact;