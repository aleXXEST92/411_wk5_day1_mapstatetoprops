import { connect } from 'react-redux'
import Car from "../components/Car"

const mapToStateProps = (state) => {
    return {
        cars:state.cars,
        user:state.user
    }
}

export default connect(mapToStateProps)(Car)