import { useState } from "react";
import "./App.css";
import GpaCalculator from "./components/GpaCalculator";
import SelectNoOfSemesters from "./components/SelectNoOfSemesters";
import GpaDataTable from "./components/GpaDataTable";

function App() {
  const [noOfSemesters, setNoOfSemesters] = useState(0);
  const [gpaData, setGpaData] = useState({});
  const [ShowGpaData, setShowGpaData] = useState(false);

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
              {noOfSemesters >= 1 ? (
                <GpaCalculator
                  key={1}
                  semno={1}
                  setGpaData={setGpaData}
                  gpaData={gpaData}
                  setShowGpaData={setShowGpaData}
                />
              ) : null}

              {noOfSemesters >= 2 ? (
                <GpaCalculator
                  key={2}
                  semno={2}
                  setGpaData={setGpaData}
                  gpaData={gpaData}
                  setShowGpaData={setShowGpaData}
                />
              ) : null}

              {noOfSemesters >= 3 ? (
                <GpaCalculator
                  key={3}
                  semno={3}
                  setGpaData={setGpaData}
                  gpaData={gpaData}
                  setShowGpaData={setShowGpaData}
                />
              ) : null}

              {noOfSemesters >= 4 ? (
                <GpaCalculator
                  key={4}
                  semno={4}
                  setGpaData={setGpaData}
                  gpaData={gpaData}
                  setShowGpaData={setShowGpaData}
                />
              ) : null}

              {noOfSemesters >= 5 ? (
                <GpaCalculator
                  key={5}
                  semno={5}
                  setGpaData={setGpaData}
                  gpaData={gpaData}
                  setShowGpaData={setShowGpaData}
                />
              ) : null}

              {noOfSemesters >= 6 ? (
                <GpaCalculator
                  key={6}
                  semno={6}
                  setGpaData={setGpaData}
                  gpaData={gpaData}
                  setShowGpaData={setShowGpaData}
                />
              ) : null}

              {noOfSemesters >= 7 ? (
                <GpaCalculator
                  key={7}
                  semno={7}
                  setGpaData={setGpaData}
                  gpaData={gpaData}
                  setShowGpaData={setShowGpaData}
                />
              ) : null}

              {noOfSemesters >= 8 ? (
                <GpaCalculator
                  key={8}
                  semno={8}
                  setGpaData={setGpaData}
                  gpaData={gpaData}
                  setShowGpaData={setShowGpaData}
                />
              ) : null}
            </div>
          </div>
        )}
        {ShowGpaData ? (
          <GpaDataTable gpaData={gpaData} noOfSemesters={noOfSemesters} />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default App;
