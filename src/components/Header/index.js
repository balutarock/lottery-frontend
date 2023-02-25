import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import "./index.css"


// https://res.cloudinary.com/dxnhvq8pl/image/upload/v1628099153/movie%20app%20mini%20project/580b57fcd9996e24bc43c529_d5ju8c.png
const navItemsList = [{ id: 1, name: "products", link: "/products" }, { id: 2, name: "About", link: "/about" }, { id: 3, name: "Contact Us", link: "#footer" }, { id: 2, name: "Account", link: "/account" }]

const initialState = {
    isShowMenu: false
}

function Header() {
    const [state, setState] = useState(initialState)
    const [time, setTime] = useState()

    useEffect(() => {
        const time = currentTime();
        setTimeout(time)
    }, [state])

    const onClickMenu = () => setState({ ...state, isShowMenu: !state.isShowMenu })

    function currentTime() {
        let date = new Date();
        let hh = date.getHours();
        let mm = date.getMinutes();
        let ss = date.getSeconds();
        let session = "AM";

        if (hh == 0) {
            hh = 12;
        }
        if (hh > 12) {
            hh = hh - 12;
            session = "PM";
        }

        hh = (hh < 10) ? "0" + hh : hh;
        mm = (mm < 10) ? "0" + mm : mm;
        ss = (ss < 10) ? "0" + ss : ss;

        let time = hh + ":" + mm + ":" + ss + " " + session;

        return time
    }


    return (
        <div className="bg-header-container">
            <div className="container-header">
                <div>
                    <img src="/images/win.png" alt="website Logo" className="website-logo" />
                </div>
                <h1>{time}</h1>
                <GiHamburgerMenu className="hamburger-icon" onClick={onClickMenu} />
                <ul className="lap-ul-ele">{navItemsList.map((item) => <li key={item.id} className="lap-li-ele"><Link to={item.link} className="link-ele">{item.name}</Link></li>)}</ul>
            </div>
            {state.isShowMenu ? <ul className="ul-container">{navItemsList.map((item) => <li key={item.id} className="li-ele"><Link className="link-ele" to={item.link}>{item.name}</Link></li>)}</ul> : null}
        </div >
    );
}

export default Header