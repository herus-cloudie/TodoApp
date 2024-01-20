import { useState } from "react";

import { GrAddCircle } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { MdDoneAll } from "react-icons/md";
import { BsAlignStart, BsFillPlusSquareFill } from "react-icons/bs";
import { BsHandIndexThumb } from "react-icons/bs";

import LoadingTodo from "../module/customLoading/loadingTodo";
import SendTodoButton from "../module/sendTodoButton";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

export default function AddTodoPage() {
  const [loading , setLoading] = useState(false)
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [description , setDescription] = useState([])
  const [accessInput , setAccessInput] = useState(true)
  const [err , setErr] = useState({description : '' , fillFiled : ''})

  let confirmDescription = description.filter(item => item.status == 'confirm')
  let unConfirmDescription = description.filter(item => item.status == 'unconfirm')

  const addDescriptionHanler = () => {
    if(!accessInput) return setErr({fillFiled : err.fillFiled , description : 'please fill your description field, then add another'})
    setDescription([...description , {text : '', id : Date.now() , status : 'unconfirm'}])
    setAccessInput(false)
    setErr({fillFiled : err.fillFiled , description : ''})
    }

  const changeItemHandler = (e , id) => {
    let findInput = description.find(item => item.id == id)
    findInput.text = e.target.value;
    let elseInput = description.filter(item => item.id != id)
    setDescription([...elseInput , findInput])
  }
  
  const confirmItemHandler = (id) => {
    let findInput = description.find(item => item.id == id)
    if(!findInput.text.length > 0) return setErr({fillFiled : err.fillFiled , description : 'your description is empty!'})
    setAccessInput(true)
    setErr({fillFiled : err.fillFiled , description : ''})
    findInput.status = 'confirm'
  }
  const sendTodoHandler = async () => {
    if(!title || !status || err.description){
      setErr({fillFiled : 'please fill and select all propertys', description : err.description})
    }else{
      setLoading(true)
      let process = await fetch('/api/todoApi' , {
          method : 'POST',
          body : JSON.stringify({
              title,
              status,
              confirmDescription
          }),
          headers: {'Content-Type': 'application/json'}
      })
      let Data = await process.json()
      setLoading(false)
      setErr({description : '' , fillFiled : ''})
      setStatus('')
      setDescription([])
      setTitle('')
      console.log(Data)
    }
  }
  

  return (
    <div className="add-form">
      <h2>
        <GrAddCircle />
        Add New Todo
      </h2>
      <div className="add-form__input">

        <div class="inputBox">
            <input onChange={(e)  => setTitle(e.target.value)} value={title} placeholder="Write here..." type="text" required=""/>
            <span>Title :</span>
        </div>

        <div className="add-form__input--first item">
          <button onClick={addDescriptionHanler} className="button-item" role="button"><BsFillPlusSquareFill /><p>add description</p></button>
          {
            err.description ? <p className="err">{err.description}</p> : null
          }
          {
            unConfirmDescription.map((item , index) =>
            <div style={{display : 'flex' ,  paddingBottom: '50px'}}>
             <input onChange={(e) => changeItemHandler(e , item.id)} className="input-todo"  placeholder={`write about details...`}/>
             <button onClick={(e) => confirmItemHandler(item.id)} className="confirm-button">confirm</button>
            </div>)
          }
          {
            confirmDescription.map((item , index) =>
            <div className="notification">
                <div className="notiglow"></div>
                <div className="notiborderglow"></div>
                <div className="notititle">{index + 1} -</div>
                <div className="notibody">{item.text}</div>
            </div>
            )
          }
        </div>

        <hr/>

        <h3 className="choose-status">
            <BsHandIndexThumb />
            Choose the status
        </h3>

        <div className="inputt">
            <button onClick={() => setStatus('todo')} className="value">
                <BsAlignStart />
                To Do
            </button>
            <button onClick={() => setStatus('inProgress')} className="value">
                <FiSettings />
                In progress
            </button>
            <button onClick={() => setStatus('review')} className="value">
                <AiOutlineFileSearch />
                Review
            </button>
            <button onClick={() => setStatus('done')} className="value">
                <MdDoneAll />
                Done
            </button>
        </div>
        {
            loading ? <LoadingTodo /> : <SendTodoButton onClick={sendTodoHandler}/>
        }
        {
            err.fillFiled ? <p className="err">{err.fillFiled}</p> : null
        }
      </div>
      {/* <ToastContainer /> */}
   </div>
  );
}
