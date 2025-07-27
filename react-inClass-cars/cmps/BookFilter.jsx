const { useState, useEffect } = React

export function BookFilter({ defaultFilter, handleSetFilter }) {

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

    const { txt, id } = filterByToEdit
    console.log(txt,id)
    return (
        <section className="book-filter container">
            <h2>Filter Our Books</h2>

            <form>
                <label htmlFor="txt">title</label>
                <input onChange={handleChange} name="txt" value={txt} id="txt" type="text" />

                <label htmlFor="id">id</label>
                <input onChange={handleChange} name="minSpeed" value={id} id="minSpeed" type="number" />
            </form>
            {/* <button onClick={onSearch}>Search</button> */}
        </section>
    )
}