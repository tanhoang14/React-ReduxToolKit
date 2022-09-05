import { useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import Input from "../InputField/Input";
import "./Edit.css"
import { updateUser } from "../../redux/apiRequest";
const EditPage = (props) => {
    const {setEdit} = props;
    const avaUrl= [
        "https://www.citypng.com/public/uploads/preview/hd-squid-game-soldier-square-cartoon-chibi-character-png-31633098376u00mbahja2.png",
        "https://www.citypng.com/public/uploads/preview/squid-game-soldier-triangle-cartoon-chibi-character-png-31633098481r7rpc4xsmb.png",
        "https://www.citypng.com/public/uploads/preview/squid-game-soldier-circle-cartoon-chibi-character-31633098539bva76naymm.png",
        "https://www.citypng.com/public/uploads/preview/-41602987455pra5gtpia8.png",
        "https://www.citypng.com/public/uploads/preview/-41602990356snxlb5r0g0.png",
        "https://www.citypng.com/public/uploads/preview/-41603044136i1gxlemms2.png",
        "https://www.citypng.com/public/uploads/preview/-41603228395fhvfdsrfec.png",
        "https://www.citypng.com/public/uploads/preview/-416032454464fwyg82ymn.png",
        "https://www.citypng.com/public/uploads/preview/-41603161776oz1er8pbzb.png",
    ]
    const dispatch = useDispatch();
    const user = useSelector((state)=> state.user)
    const [name,setName] =useState(user.name)
    const [age,setAge] =useState(user.age)
    const [about,setAbout] =useState(user.about)
    const [theme,setTheme] = useState("#01bef1")
    const [url,setUrl] = useState(user.avaUrl)
    const handleSubmit = (e) =>{
        e.preventDefault();
        setEdit(false)
        const updatedUser = {
            name: name,
            age: age,
            about: about,
            avaUrl: url,
            themeColor : theme
        }
        updateUser(updatedUser,dispatch)
    }

    return (  
    <>
    <form>
        <section className="edit-container">
            <button className="save" onClick={handleSubmit}>SAVE</button>
        <div className="edit-profile">Edit Profile</div>
        <div className="input-container">
            <Input label="Display Name" data={user.name} setData={setName}/>
            <Input label="Display Age" data={user.age} setData={setAge}/>
            <Input inputType ="textarea" classStyle="input-about" label="Display About" data={user.about} setData={setAbout}/>

        <label> Profile Picture</label>
            <div className="input-image-container">
                {avaUrl.map((url)=>{
                    return(
                        <>
                        <img className="input-image" src={url} alt="" onClick={(e)=>setUrl(e.target.src)}/>
                        </>
                    )
                })}
            </div>
            <div className="theme-container">
                <label>Theme</label>
                <input type="color" className="theme-color" onChange={(e)=>{setTheme(e.target.value)}} />
            </div>
            </div>

        </section>
    </form>    
    </>
    );
}
export default EditPage;