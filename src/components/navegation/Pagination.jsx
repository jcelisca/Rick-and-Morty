const Pagination = () => {
    return (
        <nav>
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <button className="page-link">Anterior</button>
                </li>
                <li className="page-item">
                    <button className="page-link">Siguiente</button>
                </li>
            </ul>
        </nav>
     );
}

export default Pagination;