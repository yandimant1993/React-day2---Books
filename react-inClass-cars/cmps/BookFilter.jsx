const { useState, useEffect } = React

export function CarFilter({ defaultFilter, handleSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState(defaultFilter)

    useEffect(() => {
        handleSetFilter(filterByToEdit)
    }, [filterByToEdit])


    function handleChange({ target }) {
        const field = target.name
        let value = target.value
        switch (target.type) {
            case 'number':
            case 'range':
                value = +value
                break;

            case 'checkbox':
                value = target.checked
                break
        }
        setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
    }

    // function handleChangeDataInnerObjDemo({ target }) {
    //     const field = target.name
    //     let value = target.value
    //     switch (target.type) {
    //         case 'number':
    //         case 'range':
    //             value = +value
    //             break;

    //         case 'checkbox':
    //             value = target.checked
    //             break
    //     }
    //     setFilterByToEdit(prevFilter => ({ ...prevFilter, data: { ...prevFilter.data, [field]: value } }))
    // }

    function handleChangeShortVersion({ target }) {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        setFilterByToEdit(prevFilterBy => ({ ...prevFilterBy, [field]: value }))
    }

    // function handleTxtChange(ev) {
    //     const value = ev.target.value
    //     setFilterByToEdit(prevFilterBy => ({ ...prevFilterBy, txt: value }))
    // }

    // function handleMinSpeedChange(ev) {
    //     const value = ev.target.value
    //     setFilterByToEdit(prevFilterBy => ({ ...prevFilterBy, minSpeed: value }))
    // }

    //* Without onChange, only click
    // function onSearch() {
    //    handleSetFilter(filterByToEdit)
    // }

    const { txt, minSpeed } = filterByToEdit
    return (
        <section className="car-filter container">
            <h2>Filter Our Cars</h2>

            <form>
                <label htmlFor="txt">Vendor</label>
                <input onChange={handleChange} name="txt" value={txt} id="txt" type="text" />

                <label htmlFor="minSpeed">Min Speed</label>
                <input onChange={handleChange} name="minSpeed" value={minSpeed} id="minSpeed" type="number" />
            </form>
            {/* <button onClick={onSearch}>Search</button> */}
        </section>
    )
}