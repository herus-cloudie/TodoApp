import { BiCookie } from "react-icons/bi";

export default function Tooltip(){
    return(
        <div className="item-hints">
            <div className="hint" data-position="4">
                    <span className="hint-radius"></span>
                    <span className="hint-dot">info <BiCookie size={25}/></span>
                    <div className="hint-content do--split-children">
                        <p>This website uses cookies to ensure you get the best experience on our site.</p>
                    </div>
            </div>
       </div>
    )
}