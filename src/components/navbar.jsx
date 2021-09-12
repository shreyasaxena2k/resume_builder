import {Link} from 'react-router-dom'
let Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    {/* <a class="navbar-brand" href="#">Resume Builder</a> */}
                    <Link class="navbar-brand" to="/">Resume Builder</Link>
    
                </div>
            </nav>
        </>
    )
}

export default Navbar