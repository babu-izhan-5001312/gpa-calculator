import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Button, FormControl } from 'react-bootstrap';

function GpaCalculator({ semno, setGpaData, gpaData, setShowGpaData }, ref) {
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
      case 'point':
        setPoints({ ...points, [place]: parseInt(value) });
        break;
      case 'credit':
        setCredits({ ...credits, [place]: parseInt(value) });
        break;
      default:
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleFunction = () => {
    calculateGpa();
    setShowGpaData(true);
  };

  useImperativeHandle(ref, () => ({
    handleFunction,
  }));

  return (
    <div className=" gpa-calculator-wrapper">
      <div className="gpa-calculator">
        <div className="sem">Semester {semno}</div>
        <div className="number-of-subjects">
          <div className="no-of-subjects">No.of Subjects:{subjects.length}</div>
          <Button
            variant="dark"
            onClick={() => {
              setSubjects([...subjects, subjects[-1] + 1]);
            }}
            className="subject-button sub-btn"
          >
            +
          </Button>
          <Button
            variant="dark"
            onClick={() => {
              let arr = [...subjects];
              arr.pop();
              setSubjects(arr);
            }}
            className="subject-button sub-btn"
          >
            -
          </Button>
        </div>

        <div className="subjects-input row-cols-12 row">
          <div className="table-heading-wrapper">
            <div className="table-heading">Grade Points </div>
            <div className="table-heading credits">Credits</div>
          </div>
          <form>
            <div className="d-flex align-items-center justify-content-center flex-column points-credits-inputs">
              {subjects.map((n, i) => {
                return (
                  <div className="one-subject row row-cols-4" key={i}>
                    <span className="number">{`${i + 1}`}</span>
                    <div className="number-input">
                      <FormControl
                        type="number"
                        name="marks"
                        id="marks"
                        className="number-input"
                        onChange={(e) => {
                          insertValues(e.target.value, i + 1, 'point');
                        }}
                        required
                      />
                    </div>
                    <div className="number-input">
                      <FormControl
                        type="number"
                        name="credit"
                        id="credit"
                        className="number-input"
                        onChange={(e) => {
                          if (e.target.value > 4) {
                            console.log(
                              'This is the incorrect value, credit must be 4 or lower'
                            );
                          } else {
                            insertValues(e.target.value, i + 1, 'credit');
                          }
                        }}
                        required
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(GpaCalculator);
