import React from "react";
import Logo from '../assets/images/image01.png'
function Navbar(props) {
    let navLinks = [
        {
            id: 1,
            name: 'Home',
            link: '#'
        },
        {
            id: 2,
            name: 'Roadmap',
            link: '#'
        },
        {
            id: 3,
            name: 'Whitepaper',
            link: '#'
        },
        {
            id: 4,
            name: 'Contact',
            link: '#'
        },
        {
            id: 5,
            name: 'Reward BNB',
            link: '#'
        },
        {
            id: 6,
            name: 'Presale',
            link: '#'
        },
        {
            id: 7,
            name: 'Airdrop',
            link: '#'
        }

    ]
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            {/* <!-- Container wrapper --> */}
            <div className="container">
                {/* <!-- Navbar brand --> */}
                <a className="navbar-brand me-2" href="https://mdbgo.com/">
                    <img
                        src={Logo}
                        height="50"
                        alt=""
                        loading="lazy"
                       
                    />
                </a>

                {/* <!-- Toggle button --> */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarButtonsExample"
                    aria-controls="navbarButtonsExample"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars"></i>
                </button>

                {/* <!-- Collapsible wrapper --> */}
                <div className="collapse navbar-collapse" id="navbarButtonsExample">
                    {/* <!-- Left links --> */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                    {/* <!-- Left links --> */}

                    <div className="d-flex align-items-center">
                        {navLinks.map(v=> {
                            return <a href={v.link} key={v.id} className="btn btn-muted me-1 shadow-0 text-white"> {v.name} </a>
                        })}
                        <button type="button" className="btn btn-primary px-3">
                            Login
                        </button>
                    </div>
                </div>
                {/* <!-- Collapsible wrapper --> */}
            </div>
            {/* <!-- Container wrapper --> */}
        </nav>
    );
}

export default Navbar;