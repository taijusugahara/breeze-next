import Child1 from '@/components/practice/child1'
import React, { useEffect, useState } from 'react'
import useNumHooks from '@/hooks/practice/useNumHooks'

const Parent = () => {
    const { num, updateNum } = useNumHooks(0)

    // const [greet, setGreet] = useState('')

    let greet = ''

    useEffect(() => {
        console.log(num)
    }, [num]) //②

    useEffect(() => {
        console.log('greet changed')
    }, [greet]) //②

    console.log(num)

    const clickAction = word => {
        console.log('click')
        greet = word
        // setGreet(word)
        console.log(greet)
        //stateを変更した後、同じ関数内（clickAction内）ではstateが変更されていない。useEffectで変更を検知して利用する。
        // updateNum(num + 1) //①
    }

    return (
        <div>
            <p onClick={() => clickAction('good morning')}>parent</p>
            <Child1 updateNum={updateNum} />
        </div>
    )
}

export default Parent
