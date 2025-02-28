import { Link } from "react-router-dom"
import routes from "../../../routes/routes.js"

 const Navbar = () => {

    console.log(routes.map(item => item.page))
    return(
        <ul>
            {routes.map((item, index)=>{
                return(
                    <li key={index}>
                        <Link className="linkHover" to={item.url}>{item.page}</Link>
                    </li>
                    )
            })}

        </ul>

    )
}

export default Navbar