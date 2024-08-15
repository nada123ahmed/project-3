import "./LanguagesWrapper.css"
import HtmlIcon from "../../assets/images/icon-html.svg"
import CssIcon from "../../assets/images/icon-css.svg"
import JavaScriptIcon from "../../assets/images/icon-js.svg"
import AccessibillityIcon from "../../assets/images/icon-accessibility.svg"
import LanguageItem from '../LanguageItems/LanguageItem'

function LanguagesWrapper() {
    const Arrayofobjects =[
        {LanguageName:"HTML",LanguageIcon:HtmlIcon},
        {LanguageName:"CSS",LanguageIcon:CssIcon},
        {LanguageName:"JavaScript",LanguageIcon:JavaScriptIcon},
        {LanguageName:"Accessibility",LanguageIcon:AccessibillityIcon}
    ];
    return(
        <div id="LannguagesWrapper">
{Arrayofobjects.map((item) => {
    return(
        <LanguageItem
        LanguageName={item.LanguageName}
        LanguageIcon={item.LanguageIcon}></LanguageItem>
    );
})}
        </div>
    );
    
}
export default LanguagesWrapper;