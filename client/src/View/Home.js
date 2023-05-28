import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'



const Home = (props) => {
    return <div>
        <h1>Hello from Home</h1>
        <Link to="/second">Second</Link>
    </div>
}

export default Home