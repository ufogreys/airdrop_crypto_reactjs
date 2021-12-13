import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from '../assets/images/image01.png'
function Navbar(props) {

    let navLinks = [
        {
            id: 1,
            name: 'Home',
            link: '/'
        },
        {
            id: 2,
            name: 'Roadmap',
            link: '/roadmap'
        },

        {
            id: 3,
            name: 'Whitepaper',
            link: '/whitepaper'
        },
        // {
        //     id: 4,
        //     name: 'Contact',
        //     link: '/contact_us'
        // },
        {
            id: 4,
            name: 'Reward BNB',
            link: '/reward_bnb'
        },
        {
            id: 5,
            name: 'Presale',
            link: '/presale'
        },
        {
            id: 6,
            name: 'Airdrop',
            link: '/airdrop'
        },
        {
            id: 7,
            name: 'Feature',
            link: '/feature'
        }
    ]
    let getPath = useLocation().pathname
    console.log(getPath)
    let collapse = useRef()
    let [navShow, setNavShow] = useState(false)
    function navbarToggler() {
        setNavShow(!navShow)
    }
    //console.log(collapse.current)
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark " id="nav">
            {/* <!-- Container wrapper --> */}
            <div className="container-xxl">
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
                    onClick={() => navbarToggler()}
                    aria-controls="navbarButtonsExample"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    {navShow ? <i className="fa fa-times fa-2x" aria-hidden="true"></i> : <i className="fas fa-bars fa-2x"></i>}
                </button>

                {/* <!-- Collapsible wrapper --> */}
                <div ref={collapse} className={`collapse navbar-collapse ${navShow ? 'show' : ''}`} id="navbarButtonsExample">
                    {/* <!-- Left links --> */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                    {/* <!-- Left links --> */}
                    <div className="d-flex align-items-center mobile_design_navbar">
                        {navLinks.map(v => {
                            // console.log(getPath == v.name.toLowerCase())
                            return <Link onClick={() => setNavShow(false)} to={v.link} data-aos-once="true" data-aos="fade-right" data-aos-delay={v.id * 50} data-aos-offset="0" key={v.id} className={`btn  ${getPath == v.link.toLowerCase() ? 'btn-secondary' : 'btn-muted'} me-1 shadow-0 text-white`}>{v.name} </Link>
                        })}
                        <button type="button" data-aos-once="true" data-aos="fade-left" data-aos-delay="350" className="btn btn-outline-secondary px-5 mt-3 mt-lg-0 rounded-pill">
                            Connect
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
