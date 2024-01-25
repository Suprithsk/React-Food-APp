import { Link, useNavigate } from "react-router-dom";

const HeaderComponent = () => {
    const navigate = useNavigate();
    return (
        <div className="header">
            <h1 className="heading-tag"
                onClick={() => {
                    navigate('/')
                }}
            >Food Villa</h1>
            <div className="nav-items">
                <ul>
                    <li onClick={
                        () => {
                            navigate('/signin')
                        }
                    }>
                        Sign In

                    </li>
                    <li>Sign Up</li>
                    <li
                        onClick={() => {
                            navigate('/contact')
                        }}
                    >Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}
export default HeaderComponent;