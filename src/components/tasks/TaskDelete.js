import axios from '@/lib/axios'
import { useRouter } from "next/router";

export const TaskDelete = ({id}) => {

  const router = useRouter();
  const csrf = () => axios.get('/sanctum/csrf-cookie')

  const taskDelete = async (e) => {
    e.preventDefault()
    await csrf()

    //fetchだとcsrfエラーでた
    await axios.delete(
      `/api/tasks/delete/${id}`
    ).then(()=>{
      router.push("/tasks")
    })
  }
  return (
    <div>
      <button onClick={(e)=>taskDelete(e)}>削除</button>
    </div>
  )
}
