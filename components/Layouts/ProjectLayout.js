import Link from "next/link";
import { useRouter } from "next/router";
const ProjectLayout = ({ children }) => {
    return (
        <div>


            <div>{children}</div>
        </div>
    );
};

export default ProjectLayout;