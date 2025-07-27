import { CarPreview } from "./BookPreview.jsx";

export function CarList({ cars, onRemoveCar }) {

    return (
        <ul className="car-list container">
            {cars.map(car => (
                <li key={car.id}>
                    <CarPreview car={car} />
                    <section>
                        <button onClick={() => onRemoveCar(car.id)}>Remove</button>
                        <button>Details</button>
                    </section>
                </li>
            ))}
        </ul>
    )

}