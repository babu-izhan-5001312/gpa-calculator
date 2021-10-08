import { Button } from "react-bootstrap";

const SelectNoOfSemesters = ({ setNoOfSemesters }) => {
  const semesters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="semester container row d-flex align-items-center justify-content-center ">
      <div className="col-12 col-md-6">
        <h1 className="description">
          GPA Claculator calculates your GPA uptill your 5th year of
          University.(Made for GPAs that are out of 10).
        </h1>
      </div>
      <div className="selectsem col-12 col-md-6 d-flex align-items-center justify-content-center flex-column ">
        <h1 className="sem-header">Select No. of Semesters</h1>
        <div className="year-wrapper">
          <div className="year row">
            {semesters.map((sem) => {
              return (
                <Button
                  variant="dark"
                  className="semester-button col-12 col-md-5"
                  onClick={() => setNoOfSemesters(sem)}
                >
                  {sem} Semester
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectNoOfSemesters;
