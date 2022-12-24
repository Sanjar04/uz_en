import React from "react";
import "./../header/header.css"
import languages from "../../localization/languages";

const Header = ({lang, setLang})=> {
    return(
        <div className="header_bg">
            <div className="container">
                <div className="headers">
                    <nav>
                        <ul>
                            <li><a href="#">{languages[lang].header.nav.navItem1}</a></li>
                            <li><a href="#">{languages[lang].header.nav.navItem2}</a></li>
                            <li><a href="#">{languages[lang].header.nav.navItem3}</a></li>
                        </ul>
                    </nav>
                    <select value={lang} onChange={(e)=> setLang(e.target.value)}>
                        <option value="uz">Uzb</option>
                        <option value="ru">Rus</option>
                        <option value="en">Eng</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Header