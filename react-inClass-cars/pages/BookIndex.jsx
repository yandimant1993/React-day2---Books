import { CarFilter } from "../cmps/BookFilter.jsx"
import { CarList } from "../cmps/BookList.jsx"
import { carService } from "../services/book.service.js"

const { useState, useEffect } = React

export function CarIndex() {

    const [cars, setCars] = useState(null)
    // const [error, setError] = useState('')
    const [filterBy, setFilterBy] = useState(carService.getDefaultFilter())


    useEffect(() => {
        loadCars()
    }, [filterBy])


    function loadCars() {
        carService.query(filterBy)
            .then(cars => setCars(cars))
            .catch(err => console.log('err:', err))
    }

    function onRemoveCar(carId) {
        carService.remove(carId)
            .then(() => (
                setCars(cars => cars.filter(car => car.id !== carId))
            ))
            .catch(err => console.log('err:', err))
    }

    function handleSetFilter(newFilterBy) {
        setFilterBy({ ...newFilterBy })
    }
    // console.log('Render');

    if (!cars) return <div>Loading...</div>
    return (
        <section className="car-index">
            <CarFilter handleSetFilter={handleSetFilter} defaultFilter={filterBy} />
            <CarList onRemoveCar={onRemoveCar} cars={cars} />

            {/* {!error && <CarList onRemoveCar={onRemoveCar} cars={cars} />}
            {error && <p>{error}</p>} */}
        </section>
    )

}