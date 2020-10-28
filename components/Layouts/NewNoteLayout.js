import Link from "next/link";
import { useRouter } from "next/router";
const NewNoteLayout = ({ children }) => {
    return (
        <div>

            <div>{children}</div>
        </div>
    );
};

export default NewNoteLayout;
