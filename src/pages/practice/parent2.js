const { useState, useEffect } = require('react')

const Parent2 = () => {
    const selections = [
        { name: 'Home', component: Home, color: 'green' },
        { name: 'Products', component: Products, color: 'green' },
        { name: 'About', component: About, color: 'red' },
    ]
    const [selection, setSelection] = useState(selections[0].name)

    const [color, setColor] = useState(selections[0].color)

    const updateColor = newColor => {
        setColor(newColor)
        console.log(11)
    }

    console.log(color)

    return (
        <div className="App">
            <h1 style={{ color: color }}>Selection</h1>
            <div>
                <select onChange={event => setSelection(event.target.value)}>
                    {selections.map((selection, id) => (
                        <option key={id}>{selection.name}</option>
                    ))}
                </select>
                <div>
                    {selections.map((_selection, id) => {
                        const Component = _selection.component
                        return _selection.name === selection ? (
                            <Component
                                key={id}
                                color={_selection.color}
                                updateColor={updateColor}
                            />
                        ) : null
                    })}
                </div>
            </div>
        </div>
    )
}
const Home = ({ name, color, updateColor }) => {
    const changeColor = () => {
        // let color = 'red'
        // color = 'yellow'
        updateColor(color)
    }

    useEffect(() => {
        console.log(22)
        // changeColor()
        console.log(color)
    }, [color])

    return <h2>{name}</h2>
}

const Products = ({ name, color, updateColor }) => {
    console.log(color)
    updateColor(color)
    return <h2>{name}</h2>
}

const About = ({ name, color, updateColor }) => {
    updateColor(color)
    return <h2>{name}</h2>
}

export default Parent2
