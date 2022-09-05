import { useSelector } from "react-redux"
import "./Header.css"
const Header = (props) => {
    const {setEdit} = props
    const user = useSelector((state)=> state.user)
    const handleEdit = () =>{
        setEdit(true);
    }
    return ( 
        <>
        <header style = {{
            backgroundColor: `${user.themeColor}`, 
            backgroundImage:'radial-gradient(circle, ${user.themeColor} 11%, ${user.themeColor} 32%, ${user.themeColor} 44%, rgba(4,102,228,1) 54%, rgba(24,0,205,1) 100%)'}}>
            <div className="info-container">
                <div className="info-edit" onClick={handleEdit}>
                    Edit
                </div>
                <img className="info-ava" src={user.avaUrl} alt="" />
                <div className="info-username">{user.name}</div>
                <div className="info-age">{user.age}</div>
                <div className="info-about">{user.about}</div>           
            </div>
        </header>
        </>
);
} 
export default Header;
