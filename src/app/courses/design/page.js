import { fetchDesign } from "@/app/lib/dbDes";
import Link from "next/link";
export const metadata = {
    title: "Design Courses",
    description: "Generated by create next app",
  };
  

  const Design = async () => {
    const design = await fetchDesign();
  
      return (
        <div>
          <h2>Design Courses</h2>
          <ul className="DesignList">
            {design.map((design, index) => (
              <li key={index}>
                <br />
                <Link href={`./design/${design.id}`}>{design.CourseTitle}</Link>
                <br />
              </li>
            ))}
          </ul>
        </div>
      );
    };
    export default Design;
