import BookForm from "../../components/BookForm"
import Navbar from "../../components/Navbar"

const  Register = () => {
    return (
        <>   
            <Navbar/>
            <div className="container">
                <h1>Cadastrar</h1>
                <BookForm/>
            </div>    
        </>
    )
}

export default Register