import React from "react";
import "./../footer/footer.css"
import languages from "../../localization/languages";

const Footer = ({lang})=>{
    return(
        <div className="footers">
            <div className="container footer">
                <p>{languages[lang].footer.corp}</p>
            </div>
        </div>
    )
}

export default Footer