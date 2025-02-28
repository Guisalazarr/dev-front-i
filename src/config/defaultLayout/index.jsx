import Navbar from './components/Navbar'
import './index.css'

const DefaultLayout = (props) => {

    return(
        <>
            <Navbar/>
            <div className='container'>
                {props.component}
            </div>

        </>
    )

}

export default DefaultLayout