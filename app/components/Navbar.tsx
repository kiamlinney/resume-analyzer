import {Link} from "react-router";

const Navbar : () => Element = () => {
    return (
        <nav className = "navbar">
            <Link to = "/">
                <p className = "text-2xl text-gradient">
                    <span className = "font-bold">CV</span>ision
                    </p>
            </Link>
            <Link to = "/upload" className = "primary-button w-fit">
                Upload Resume
            </Link>
        </nav>
    )
}
export default Navbar