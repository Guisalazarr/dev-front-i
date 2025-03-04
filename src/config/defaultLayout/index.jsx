import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './index.css'

const DefaultLayout = (props) => {

    return(
        <>
            <Navbar/>
            <div className='container'>
                {props.component}
            </div>
            <Footer/>
        </>
    )

}

export default DefaultLayout