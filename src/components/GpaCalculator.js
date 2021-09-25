import React, { useState } from "react";
import { Button } from "react-bootstrap";

function GpaCalculator({ semno, setGpaData, gpaData, setShowGpaData }) {
  const [subjects, setSubjects] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [credits, setCredits] = useState({});
  const [points, setPoints] = useState({});

  const calculateGpa = () => {
    let tempArray = [];
    subjects.forEach((subno, i) => {
      tempArray.push(credits[i + 1] * points[i + 1]);
    });
    const numerator = tempArray.reduce((a, b) => a + b);
    const denominator = Object.values(credits).reduce(
      (a, b) => parseInt(a) + parseInt(b)
    );
    const gpa = numerator / denominator;
    setGpaData({
      ...gpaData,
      [semno]: {
        gpa,
        numerator,
        denominator,
      },
    });
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateGpa();
    setShowGpaData(true);
  };

  return (
    <div className="container gpa-calculator-wrapper">
      <div className="sem">Semester: {semno}</div>
      <div className="number-of-subjects">
        <div className="no-of-subjects">No.of Subjects:{subjects.length}</div>
        <Button
          variant="primary"
          onClick={() => {
            setSubjects([...subjects, subjects[-1] + 1]);
          }}
          className="subject-button"
        >
          +
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            let arr = [...subjects];
            arr.pop();
            setSubjects(arr);
          }}
          className="subject-button"
        >
          -
        </Button>
      </div>

      <div className="subjects-input row-cols-12 row">
        <div className="Heading">Grade Points | Credits</div>
        <form onSubmit={handleSubmit}>
          <div className="d-flex align-items-center justify-content-center flex-column points-credits-inputs">
            {subjects.map((n, i) => {
              return (
                <div className="one-subject row row-cols-4" key={i}>
                  <span>{`${i + 1}.`}</span>
                  <input
                    type="number"
                    name="marks"
                    id="marks"
                    className="number-input"
                    onChange={(e) => {
                      insertValues(e.target.value, i + 1, "point");
                    }}
                    required
                  />
                  <input
                    type="number"
                    name="credit"
                    id="credit"
                    className="number-input"
                    onChange={(e) => {
                      if (e.target.value > 4) {
                        console.log(
                          "This is the incorrect value, credit must be 4 or lower"
                        );
                      } else {
                        insertValues(e.target.value, i + 1, "credit");
                      }
                    }}
                    required
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <Button className="calculate-button" type="submit">
              Calculate
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GpaCalculator;
