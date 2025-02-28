

const BookForm = () => {
    return(
        <form>
        <label>Titulo: 
          <input type="text" />
        </label>
        <label>Autor(a): 
          <input type="text" />
        </label>
        <label>Gênero: 
          <input type="text" />
        </label>
        <label>Data: 
          <input type="date" />
        </label>
        <button>Adicionar</button>
      </form>
    )
}

export default BookForm