import Navbar from "../../components/Navbar"
import BookList from "../../components/BookList"

const ListBooks = () => {

    return (
        <>  
             <Navbar/>
             <div className="container">
                <h1>Lista de livros</h1>
                <BookList/>
             </div>
            
        </>

    )
}

export default  ListBooks