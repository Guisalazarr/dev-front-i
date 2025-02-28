
const BookList = () => {
    const dataBase = [
        {title: ' Tropas Estelares', author: 'Robert Heintein', date: '16/08/2024'},
        {title: ' Tropas Estelares', author: 'Robert Heintein', date: '16/08/2024'},
        {title: ' Tropas Estelares', author: 'Robert Heintein', date: '16/08/2024'},
        {title: ' Tropas Estelares', author: 'Robert Heintein', date: '16/08/2024'}
    ]

    return(
        <ul>
            {dataBase.map((item, index)=>{
                return(
                    <li key={index}>
                        {item.title} - {item.author} - {item.date} - <button>Editar</button> <button>Excluir</button>
                    </li>           
                )
            })}
        </ul>
    )
}

export default BookList