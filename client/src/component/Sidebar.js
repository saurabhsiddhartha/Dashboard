import React from "react"
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <div className="sidebar-heading">
                <h1>
                    <i className="fa-solid fa-gear"></i>
                    <span>Dashboard</span>

                </h1>
                <ul id="dashboard-list">
                    <li>
                        <i className="fa-solid fa-key"></i>
                        <Link to="http://localhost:3000/">
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li><i className="fa-brands fa-product-hunt"></i><span>Product</span></li>
                    <li><i className="fa-regular fa-user"></i><span>Customers</span></li>
                    <li><i className="fa-solid fa-wallet"></i><span>Income</span></li>
                    <li><i className="fa-solid fa-rectangle-ad"></i><span>Promote</span></li>
                    <li>
                        <i className="fa-solid fa-handshake-angle"></i>
                        <Link to="/signup"><span>SignUp</span></Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar;
