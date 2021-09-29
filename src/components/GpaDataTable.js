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
  }, [gpaData, noOfSemesters]);

  return (
    <div className="gpa-data-wrapper">
      <div className="container gpa-data-table">
        <h1 className="cgpa">CGPA : {Cgpa}</h1>
        <div>
          {Object.keys(gpaData).map(([key, value]) => {
            return (
              <div key={key} className="gpa">
                <h3>
                  Semester {key} GPA : {gpaData[key].gpa}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GpaDataTable;
