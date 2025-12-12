import {Link} from "react-router-dom"
import "./Navigation.css"
const Navigation = ()=>{
  return (
    <nav>
        <ul>
            <li>
            <Link to="/">Dr.Ambedkar Institute Of Technology for Divyangjan : College Event Management Website         </Link>
            </li>

            <li></li>

            <li>
            <Link to="/"></Link></li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/find-events">Find Events</Link>
            </li>
            <li>
              <Link to="/login">LogIn</Link>
            </li>
        </ul>
    </nav>
  )
}
export default Navigation;