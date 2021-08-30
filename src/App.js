import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./App.css";
import GpaCalculator from "./components/GpaCalculator";
import SelectNoOfSemesters from "./components/SelectNoOfSemesters";
import GpaDataTable from "./components/GpaDataTable";

function App() {
  const [noOfSemesters, setNoOfSemesters] = useState(0);
  const [gpa, setGpa] = useState([]);
  const [gpaData, setGpaData] = useState({});
  const [ShowGpaData, setShowGpaData] = useState(false);

  useEffect(() => {
    var tempArr = [];
    for (let i = 0; i < noOfSemesters; i++) {
      tempArr.push(0.0);
    }
    setGpa(tempArr);
  }, [noOfSemesters]);

  console.log(gpaData);
  return (
    <div className="container">
      <h1 className="heading">GPA Calculator</h1>
      <div className="body">
        {noOfSemesters === 0 ? (
          <SelectNoOfSemesters
            setNoOfSemesters={setNoOfSemesters}
            noOfSemesters={noOfSemesters}
          />
        ) : (
          <div>
            <div className="row row-cols-12 row-cols-lg-3">
              {gpa.map((gp, i) => {
                return (
                  <GpaCalculator
                    key={i}
                    semno={i + 1}
                    setGpaData={setGpaData}
                    gpaData={gpaData}
                    setShowGpaData={setShowGpaData}
                  />
                );
              })}
            </div>
          </div>
        )}
        {ShowGpaData ? <GpaDataTable gpaData={gpaData} /> : <div></div>}
      </div>
    </div>
  );
}

export default App;
