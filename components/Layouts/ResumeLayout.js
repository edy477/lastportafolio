import Link from "next/link";
import { useRouter } from "next/router";
const ResumeLayout = ({ children }) => {
    return (
        <div>


            <div>{children}</div>
        </div>
    );
};

export default ResumeLayout;