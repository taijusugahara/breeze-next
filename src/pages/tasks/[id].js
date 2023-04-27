import { TaskDelete } from "@/components/tasks/TaskDelete";
import { TaskUpdateForm } from "@/components/tasks/TaskUpdateForm";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url)
.then((res) =>res.json())
.then((data)=>data.task)

export default function task({id,task}){
  const router = useRouter();
  const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/show/${id}`
  const { data, mutate } = useSWR(
    apiUrl,
    fetcher,
    {
      fallbackData: task,
    }
  );
  useEffect(() => {
    mutate();
  }, []);


  if (router.isFallback || !data) { //これ必要らしい。ないとdata.idとかエラーになった。これを書かない場合はfallback:"blocking"としても同じ効果になった。
    return <>data lost</>;
  }
  return (
    <>
    <Link href="/tasks">トップに戻る</Link>
    <br />
      <p>id : {data.id}</p>
      <p>タスク : {data.name}</p>
      <p>作成者 : {data.user.name}</p>
      <p>作成日 : {data.created_at}</p>
      <br />
      <TaskUpdateForm task={data} mutate={mutate}/>
      <br />
      <TaskDelete id={data.id} />
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/index`)
  );
  const posts = await res.json();
  const tasks = posts.tasks

  const paths = tasks.map((task) => {
    return {
      params: {
        id: String(task.id),
      }
    }
  })

  return {
    paths,
    fallback: true,
  };
}



export async function getStaticProps({params}) {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/show/${params.id}`)
  )
  const posts = await res.json()
  const task = posts.task

  return {
    props: {
      id: task.id,
      task
    },
    revalidate : 5 //ISR 5秒
  }
}