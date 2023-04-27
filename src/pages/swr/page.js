import { useRef, useState, useEffect } from 'react'
import useSWR from 'swr'

const fetcher = url => fetch(url).then(res => res.json())

function Page({ index, start_num, setNum, num }) {
    const { data, error } = useSWR(
        `https://jsonplaceholder.typicode.com/posts?_start=${start_num}&_limit=10`,
        fetcher,
    )
    // console.log(data)

    //これはdataの値によって動作させるのでcustom hookには置けないと思う。
    //初回ロード時とdata変更時に呼び出される。data変更時だけが望ましい。ifで分岐しているので処理自体はdataが変わった時しか行われない。
    //dataが変わった時だけ動作する方法としてuseRefを使うというのが書かれていたが、これも結局初期ロード時はifで処理しないというものなので、現状と結果は同じ。useEffect自体は２回走る。
    useEffect(() => {
        console.log('useEffect')
        if (data) {
            setNum((num += data.length))
            console.log('useeffect data', data)
        }
    }, [data]) //useRefで

    // ... ローディングとエラー状態を処理します

    return data?.map(item => (
        <div key={item.id}>
            {item.id}:{item.title}
        </div>
    ))
}

export default Page
