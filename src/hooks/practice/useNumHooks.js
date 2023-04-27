const { useState } = require('react')
const useNumHooks = () => {
    const [num, setNum] = useState(0)
    const updateNum = newNum => {
        setNum(newNum)
        // console.log('num update', num)
    }
    return {
        num,
        updateNum,
    }
}

export default useNumHooks
