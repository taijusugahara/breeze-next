import { useState, useEffect } from 'react'
import useSWR from 'swr'

const fetcher = url => fetch(url).then(res => res.json())

function Page({ index, start_num, setNum, num }) {
    const { data } = useSWR(
        `https://jsonplaceholder.typicode.com/posts?_start=${start_num}&_limit=10`,
        fetcher,
    )
    // console.log(data)

    useEffect(() => {
        if (data) {
            setNum((num += data.length))
            console.log('useeffect data', data)
        }
    }, [data, setNum])

    // ... ローディングとエラー状態を処理します

    return data?.map(item => (
        <div key={item.id}>
            {item.id}:{item.title}
        </div>
    ))
}

export default Page
