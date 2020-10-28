import SiteLayout from "../components/Layouts/SiteLayout";
import ContactLayout from "../components/Layouts/ContactLayout";

const Contact = () => {

    return(
        <div>
            <div className="contactcard flex justify-center mt-10" >


                <h1 className="contacttag w-28 pl-1 pr-1">Lets Tal'k</h1>




            </div>
            <ul className="flex flex-col justify-center justify-items-center text-center ">
                <li>
                    <h2>edy47@mesoamericana.edu.gt</h2>
                </li>
                <li>
                    <h2>https://github.com/edy477</h2>
                </li>
                <li>
                    <h2>https://www.linkedin.com/in/joseeduardogp/</h2>
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