import { useState } from 'react'
import Page from './page'
import useSWRInfinite from 'swr/infinite'

const fetcher = url => fetch(url).then(res => res.json())

export default function TaskSwr() {
    let isMoreLoad = true
    const getKey = (start, previousPageData) => {
        // console.log(start)
        // console.log(previousPageData.length)
        // if (previousPageData && !previousPageData.length) return null // 最後に到達した
        const start_point = start * 10
        return `https://jsonplaceholder.typicode.com/posts?_start=${start_point}&_limit=10` // SWR キー
    }
    const { data, size, setSize, error } = useSWRInfinite(
        getKey,
        fetcher,
        { initialSize: 1 },
        { parallel: true },
    )
    console.log(size)
    if (data) {
        if (data[size - 1]) {
            if (!data[size - 1].length) {
                isMoreLoad = false
            }
        }
    }

    return (
        <div>
            task-swr
            {data?.map(texts => {
                return texts?.map(text => {
                    return (
                        <p key={text.id}>
                            {text.id}:{text.title}
                        </p>
                    )
                })
            })}
            <br />
            {isMoreLoad ? (
                <p onClick={() => setSize(size + 1)}>もっと見る</p>
            ) : (
                <></>
            )}
        </div>
    )
}
