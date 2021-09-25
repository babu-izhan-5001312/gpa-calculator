import { useState } from "react";
import { useEffect } from "react";

const GpaDataTable = ({ gpaData, noOfSemesters }) => {
  const [Cgpa, setCgpa] = useState(0);
  useEffect(() => {
    if (noOfSemesters === 1) {
      setCgpa(gpaData[1].gpa);
    }
    if (noOfSemesters > 1) {
      const numerator = Object.values(gpaData).reduce(
        (a, b) => a.numerator + b.numerator
      );
      const denominator = Object.values(gpaData).reduce(
        (a, b) => a.denominator + b.denominator
      );
      const total = numerator / denominator;
      setCgpa(total);
    }
  }, [gpaData]);

  return (
    <div>
      {Object.keys(gpaData).map(([key, value]) => {
        return (
          <div key={key}>
            <h1>
              Semester {key}: {gpaData[key].gpa}
            </h1>
          </div>
        );
      })}
      <div className="first-year">CGPA: {Cgpa}</div>
    </div>
  );
};

export default GpaDataTable;
