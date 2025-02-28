import Header from "../../config/defaultLayout/components/Header"
import BookList from "./components/BookList"

const ListBooks = () => {

    return (
        <>  
            <Header title='Lista de livros'/>
            <BookList/>     
        </>

    )
}

export default  ListBooks