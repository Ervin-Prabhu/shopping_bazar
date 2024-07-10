import { Outlet } from "react-router"
import './Main.css'


const Main = () => {
    return(
        <div className="mainBody">
            <Outlet />
        </div>
    )
}

export default Main