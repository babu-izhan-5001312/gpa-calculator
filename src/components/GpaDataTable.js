import { useState } from "react";
import { useEffect } from "react";

const GpaDataTable = ({ gpaData }) => {
  const [Cgpa, setCgpa] = useState(0);
  useEffect(() => {
    const total = Object.values(gpaData).reduce((a, b) => a + b, 0);
    setCgpa(total);
    console.log(total);
  }, []);
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
