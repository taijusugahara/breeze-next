import Link from 'next/link'
import { useState } from 'react'
import Page from './page'

export default function TaskSwr() {
    const [cnt, setCnt] = useState(1)
    const pages = []
    const max_num = 100
    let isMoreLoad = true

    for (let i = 0; i < cnt; i++) {
        const start_num = i * 10
        const end_num = start_num + 10
        console.log(end_num)
        pages.push(<Page index={i} start_num={start_num} key={i} />)
        if (end_num >= max_num) {
            isMoreLoad = false
        }
        console.log(isMoreLoad)
    }

    return (
        <div>
            task-swr
            <br />
            <Link href="/swr/task-swr-infinite">task-swr-infinite</Link>
            <br />
            {pages}
            <br />
            {isMoreLoad ? (
                <p onClick={() => setCnt(cnt + 1)}>もっと見る</p>
            ) : (
                <></>
            )}
        </div>
    )
}
