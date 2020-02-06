import { connect } from 'react-redux'
import Home from "../components/Home"


const mapStateToProps = (state) => {
    return {
        cars: state.cars,
        user: state.user
    }
}

export default connect(mapStateToProps)(Home)