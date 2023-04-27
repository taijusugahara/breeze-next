import TaskCreateForm from "@/components/tasks/taskCreateForm";
import Link from "next/link";
import { useEffect } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url)
.then((res) =>res.json())
.then((data)=>data.tasks)

export default function tasks({tasks}){
  const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/index/`;
  //CSR(SWR)
  const { data, mutate } = useSWR(apiUrl, fetcher, {
    fallbackData: tasks,
  });

  useEffect(() => {
    mutate();
  }, []);


  return (
    <div>
      <Link href="/dashboard">ダッシュボードに戻る</Link>
      <br />
      <Link href="/swr/task-swr">TaskSwr</Link>
      <h1><strong>tasksPage</strong></h1>
      <br />
      <TaskCreateForm mutate={mutate} />
      <br />
      <ul>
      {data.map((task) => (
        <Link key={task.id} href={`/tasks/${task.id}`}><li>{task.name},{task.user.name}</li></Link>
        ))}
      </ul>
    </div>
    
  )
}

export async function getStaticProps() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/index`)
  )
  const posts = await res.json()
  const tasks = posts.tasks
  return {
    props: {
      tasks
    },
    revalidate : 5 //ISR 5秒
  }
}