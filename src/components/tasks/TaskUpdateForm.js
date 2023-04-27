import axios from '@/lib/axios'
import { useState } from "react";

export const TaskUpdateForm = ({task,mutate}) => {

  const [updateTask, setUpdateTask] = useState(task.name);
  const csrf = () => axios.get('/sanctum/csrf-cookie')

  const update = async (e) => {
    e.preventDefault()
    await csrf()
   
    const params = {
      "name" : updateTask,
    }

    //fetchだとcsrfエラーでた
    await axios.put(
      `/api/tasks/update/${task.id}`,params
    ).then(()=>{
      mutate()
    })
  }

  return (
    <div>
      <input type="text" value={updateTask} onChange={(e) =>setUpdateTask(e.target.value)} />
      <button onClick={(e)=>update(e)}>変更</button>
    </div>
  )
}
