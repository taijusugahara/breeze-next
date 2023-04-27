import { useState } from "react";
import axios from '@/lib/axios'

const TaskCreateForm = ({mutate}) => {
  const [createTask, setCreateTask] = useState("");
  const csrf = () => axios.get('/sanctum/csrf-cookie')

  const create = async (e) => {
    e.preventDefault()
    await csrf()
   
    const params = {
      "name" : createTask,
      "user_id" : 1
    }

    //fetchだとcsrfエラーでた
    await axios.post(
      '/api/tasks/post',params
    ).then(()=>{
      mutate()
    })

    setCreateTask("")
  }
  return (
    <>
    
    <div>
      <input name="name" type="text" value={createTask} onChange={(e) =>setCreateTask(e.target.value)}/>
      <button onClick={(e)=>create(e)}>作成</button>
    </div>
    </>
  )
}

export default TaskCreateForm