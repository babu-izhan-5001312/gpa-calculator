import { useState } from "react";
import { useEffect } from "react";

const GpaDataTable = ({ gpaData, noOfSemesters }) => {
  const [Cgpa, setCgpa] = useState(0);
  useEffect(() => {
    if (noOfSemesters === 1) {
      setCgpa(gpaData[1]);
    }
    if (noOfSemesters > 1) {
      const total = Object.values(gpaData).reduce((a, b) => a + b, 0);
      setCgpa(total);
      console.log(total);
    }
  }, [gpaData]);

  return (
    <div>
      {Object.keys(gpaData).map(([key, value]) => {
        return (
          <div key={key}>
            <h1>
              Semester {key}: {gpaData[key]}
            </h1>
          </div>
        );
      })}
      <div className="first-year">CGPA: {Cgpa}</div>
    </div>
  );
};

export default GpaDataTable;
