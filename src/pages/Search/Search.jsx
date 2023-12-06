
import { useParams } from "react-router-dom"

export function Search() {
    const { titulo } = useParams();

    return <h1>{titulo}</h1>
}