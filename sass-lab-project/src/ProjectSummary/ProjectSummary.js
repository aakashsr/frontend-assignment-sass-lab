import useFetchData from "./useFetchData";
import "./ProjectSummary.scss";

const URL = `https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json`;


function ProjectSummary({maxCount}){
    const {data,isLoading,isError} = useFetchData(URL);

    return (
        <div className="container">
            <div className="titleContainer">
                <div>S.No.</div>
                <div>Percentage funded</div>
                <div>Amount Pledged</div>
            </div>
            {
                data.slice(0,maxCount).map((project)=>{
                    return (
                        <div className="itemContainer">
                            <div>{project['s.no']}</div>
                            <div>{project['percentage.funded']}</div>
                            <div>{project['amt.pledged']}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProjectSummary;