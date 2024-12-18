import useFetchData from "./useFetchData";

const URL = `https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json`;


function ProjectSummary(){
    const {data,isLoading,isError} = useFetchData(URL);

    
}

export default ProjectSummary;