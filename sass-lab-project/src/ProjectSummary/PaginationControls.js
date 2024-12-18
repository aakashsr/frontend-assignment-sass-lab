function PaginationControls({handlePrev,handleNext,currentPage,totalPages}){
    return (
        <div className="btnContainer">
        <button disabled={currentPage === 1} onClick={handlePrev} aria-label="Previous Page">Prev</button>
        <span aria-live="polite" style={{ margin: "0 8px" }}>
            Page {currentPage} of {totalPages}
        </span>
        <button disabled={currentPage === totalPages} onClick={handleNext} aria-label="Next Page">Next</button>
    </div>
    )
}

export default PaginationControls;