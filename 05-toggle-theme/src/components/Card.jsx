
const features = ['Easy on the eyes', 'Saves battery', 'Looks cool']

export default function Card({ message }) {
    return (
        <div className="card">
            <p>{message}</p>
            <ul>
                {features.map((item) => (

                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}