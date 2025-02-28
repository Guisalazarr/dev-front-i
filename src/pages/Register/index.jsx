import BookForm from "./components/BookForm"
import Header from "../../config/defaultLayout/components/Header"
import './index.css'

const  Register = () => {
    return (
        <>   
            <Header title='Cadastrar'/>
            <BookForm/>   
        </>
    )
}

export default Register