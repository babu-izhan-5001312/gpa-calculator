import React, { useState } from "react";
import { Button } from "react-bootstrap";

function GpaCalculator({ noOfSemesters, gpaArray }) {
  const [subjects, setSubjects] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [credits, setcredits] = useState([]);
  const [points, setpoints] = useState([]);
  const [semNo, setSemNo] = useState(1);

  const insertGpa = () => {};

  const goToData = () => {};

  return (
    <div className="container">
      <div className="sem">Semester: {semNo}</div>
      <div className="number-of-subjects">No.of Subjects:{subjects.length}</div>
      <Button
        variant="primary"
        onClick={() => {
          setSubjects([...subjects, subjects[-1] + 1]);
        }}
      >
        Add a subject
      </Button>
      <Button
        variant="danger"
        onClick={() => {
          let arr = [...subjects];
          arr.pop();
          setSubjects(arr);
        }}
      >
        Remove a subject
      </Button>
      <div className="subjects-input">
        <div className="Heading">Grade Points | Credits</div>
        {subjects.map((n, i) => {
          return (
            <div className="one-subject" key={i}>
              <input
                type="number"
                name="marks"
                id="marks"
                onChange={(e) => {
                  console.log(e.target.value, i, "point");
                }}
              />
              <input
                type="number"
                name="credit"
                id="credit"
                onChange={(e) => {
                  console.log(e.target.value, i, "credit");
                }}
              />
            </div>
          );
        })}
      </div>
      <Button
        onClick={() => {
          if (semNo < noOfSemesters) {
            setSemNo(semNo + 1);
            insertGpa();
          } else {
            goToData();
          }
        }}
      >
        Calculate
      </Button>
    </div>
  );
}

export default GpaCalculator;
