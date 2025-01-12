import react from "react";
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from "../../assets/crown.svg"
import "./header-component.styles.scss"
import {auth} from '../../firebase/firebase.utils'

const Header = ({currentUser}) =>(
    <div className="header">
        <Link className = "logo-container" to ="/">
<Logo className = "Logo" />
        </Link>
        <div className = "options">
            <Link className = "option" to = "/shop">Shop</Link>
            <Link className = "option" to = "/shop">Contact</Link>
{currentUser?(
<div className = 'option' onClick = {() =>auth.signOut()}>Sign out</div>)
:
(<Link className= "option" to="/signin">Sign in</Link>
)}
        </div>
    </div>
)



export default Header;