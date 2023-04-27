import useSWR from 'swr';

const fetcher = (url) => fetch(url)
.then((res) =>res.json())

function Page ({ index,start_num }) {
  const { data } = useSWR(`https://jsonplaceholder.typicode.com/posts?_start=${start_num}&_limit=10`, fetcher);
  console.log(data)

  // ... ローディングとエラー状態を処理します

  return data?.map(item => <div key={item.id}>{item.id}:{item.title}</div>)
}

export default Page