import { fetchComputingDeets } from "@/app/lib/dbComp";
const ComputingDeets = async ({params}) => {
    const {id} = await params;
    console.log(id);
    const computingDetails = await fetchComputingDeets(id);
    console.dir(computingDetails)
      return (
      <div className='container'>
        <h2>{computingDetails.CourseTitle}</h2>
        <p>{computingDetails.CourseType}</p>
      </div>
    );
  }
  export default ComputingDeets;