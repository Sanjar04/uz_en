import React from "react";
import "./../main/main.css"
import languages from "../../localization/languages";

const Main = ({lang})=> {
    return(
        <div className="main">
            <div className="container card">
                <h1 className="title">{languages[lang].main.hero.title}</h1>
                <hr />
                <p className="card_copy">{languages[lang].main.hero.desc}</p>
            </div>
        </div>
    )
}

export default Main