import Link from "next/link";
import { useRouter } from "next/router";
const ContactLayout = ({ children }) => {
    return (
        <div>


            <div>{children}</div>
        </div>
    );
};

export default ContactLayout;