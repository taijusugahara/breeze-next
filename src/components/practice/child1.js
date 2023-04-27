const Child1 = ({ updateNum }) => {
    const childClick = () => {
        console.log('childClick')
        updateNum(10)
    }
    return <div onClick={() => childClick()}>child1</div>
}

export default Child1
