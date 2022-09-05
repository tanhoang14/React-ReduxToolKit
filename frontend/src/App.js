import Header from "./components/Header/Header";
import {useState}  from "react"
import EditPage from "./components/Edit/EditPage";
import './App.css'
import { useSelector } from "react-redux";

function App() {
  const [isEdit, setEdit] = useState(false)
  const pending = useSelector((state)=> state.user.pending);
  const error = useSelector((state)=> state.user.error)
  return (
    <div className="App">
      {isEdit 
      ? (<EditPage setEdit={setEdit}/>)
      : (<Header   setEdit={setEdit}/>        
      )}
      {/* {pending && <p className="loading"> Loading...</p>} */}
      {/* {!isEdit && error && (<p className="error"> Error when fetching data from server !!!</p>)} */}
    </div>
  );
}

export default App;
