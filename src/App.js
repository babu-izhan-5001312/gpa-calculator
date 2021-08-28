import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./App.css";
import GpaCalculator from "./components/GpaCalculator";
import SelectNoOfSemesters from "./components/SelectNoOfSemesters";

function App() {
  const [noOfSemesters, setNoOfSemesters] = useState(0);
  const [gpa, setGpa] = useState([]);

  useEffect(() => {
    var tempArr = [];
    for (let i = 0; i < noOfSemesters; i++) {
      tempArr.push(0.0);
    }
    setGpa(tempArr);
  }, [noOfSemesters]);

  console.log(gpa);
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
          <GpaCalculator noOfSemesters={noOfSemesters} gpaArray={gpa} />
        )}
      </div>
    </div>
  );
}

export default App;
