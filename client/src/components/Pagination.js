

const Pagination = ({dataPerPage,totalData,paginate}) => {
    const pageNumbers=[];

    for(let i=1;i<=Math.ceil(totalData/dataPerPage);i++)
    {
        pageNumbers.push(i)
    }
    return (
        <div >
            <ul className="pagination">
                {
                    pageNumbers.map((number) =>(
                        <li key={number} className="page-item">
                            <button href="" className="page-link"
                            onClick={()=>paginate(number)}>
                                {number}
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pagination
