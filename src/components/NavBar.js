import React from 'react';
import {Link} from "@reach/router";

const Nav = () => {
    return (
        <nav>
            <Link to="/students">
            <button>All Students</button>
            </Link>
        </nav>
    )
}

export default Nav