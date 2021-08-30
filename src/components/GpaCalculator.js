import React, { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";

function GpaCalculator({ semno, setGpaData, gpaData, calculate }) {
  const [subjects, setSubjects] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [credits, setCredits] = useState({});
  const [points, setPoints] = useState({});

  const calculateGpa = () => {
    let tempArray = [];
    subjects.forEach((subno) => {
      tempArray.push(credits[subno] * points[subno]);
    });
    const numerator = tempArray.reduce((a, b) => a + b);
    const denominator = Object.values(credits).reduce(
      (a, b) => parseInt(a) + parseInt(b)
    );
    console.log(numerator, denominator);
    const gpa = numerator / denominator;
    console.log(gpa);
    setGpaData({ ...gpaData, [semno]: gpa });
  };

  useEffect(() => {
    calculateGpa();
  }, [calculate]);

  const insertValues = (value, place, type) => {
    switch (type) {
      case "point":
        setPoints({ ...points, [place]: parseInt(value) });
        break;
      case "credit":
        setCredits({ ...credits, [place]: parseInt(value) });
        break;
      default:
    }
  };

  console.log(credits);
  console.log(points);

  return (
    <div className="container">
      <div className="sem">Semester: {semno}</div>
      <div className="number-of-subjects">
        No.of Subjects:{subjects.length}
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
      </div>

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
                  insertValues(e.target.value, n, "point");
                }}
              />
              <input
                type="number"
                name="credit"
                id="credit"
                onChange={(e) => {
                  if (e.target.value > 4) {
                    console.log(
                      "This is the incorrect value, credit must be 4 or lower"
                    );
                  } else {
                    insertValues(e.target.value, n, "credit");
                  }
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GpaCalculator;
