function TableRow({index,project}){
    return (
        <div className="itemContainer" role="row" key={index}>
        <div role="cell">{project['s.no']}</div>
        <div role="cell">{project['percentage.funded']}</div>
        <div role="cell">{project['amt.pledged']}</div>
    </div>
    )
}

export default TableRow;