import useFetchData from "./useFetchData";
import "./ProjectSummary.css";
import { useState } from "react";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
import PaginationControls from "./PaginationControls";

const URL = `https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json`;


function ProjectSummary({ maxCount }) {
    const { data, isLoading, isError } = useFetchData(URL);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / maxCount);


    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    };

    if (isLoading) return <p role="status">Loading data...</p>;
    if (isError) return <p role="alert">Error fetching data: {isError.message}</p>;
    if (!data.length) return <p>No data available.</p>;

    const paginatedData = data.slice((currentPage - 1) * maxCount, currentPage * maxCount);

    return (
        <div className="container" role="region" aria-labelledby="project-summary">
            <h2 id="project-summary" style={{ textAlign: "center", margin: "16px 0" }}>
                Project Summary Table
            </h2>

            <TableHeader />
            {
                paginatedData.map((project, index) => {
                    return (
                        <TableRow key={index} project={project} />
                    )
                })
            }
            <PaginationControls handlePrev={handlePrev} handleNext={handleNext} totalPages={totalPages} currentPage={currentPage} />
        </div>
    )
}

export default ProjectSummary;