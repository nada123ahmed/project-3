import LanguagesWrapper from '../LanguagesWrapper/LanguagesWrapper';

function LanguageItem(props) {
    console.log(props);
  return (
    <button>
<img src={props.LanguageIcon}></img>
<span>{props.LanguageName}</span>
    </button>
  )
}
export default LanguageItem