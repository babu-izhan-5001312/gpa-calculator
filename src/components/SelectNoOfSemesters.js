import { Button } from "react-bootstrap";

const SelectNoOfSemesters = ({ setNoOfSemesters }) => {
  return (
    <div className="container d-flex align-items-center justify-content-center flex-column">
      <h1>Select No. of Semesters</h1>
      <Button
        variant="primary"
        className="semester-button"
        onClick={() => setNoOfSemesters(1)}
      >
        Only 1 Semester
      </Button>
      <Button
        variant="primary"
        className="semester-button"
        onClick={() => setNoOfSemesters(2)}
      >
        2 Semesters
      </Button>
      <Button
        variant="primary"
        className="semester-button"
        onClick={() => setNoOfSemesters(3)}
      >
        3 Semesters
      </Button>
      <Button
        variant="primary"
        className="semester-button"
        onClick={() => setNoOfSemesters(4)}
      >
        4 Semesters
      </Button>
      <Button
        variant="primary"
        className="semester-button"
        onClick={() => setNoOfSemesters(5)}
      >
        5 Semesters
      </Button>
      <Button
        variant="primary"
        className="semester-button"
        onClick={() => setNoOfSemesters(6)}
      >
        6 Semesters
      </Button>
      <Button
        variant="primary"
        className="semester-button"
        onClick={() => setNoOfSemesters(7)}
      >
        7 Semesters
      </Button>
      <Button
        variant="primary"
        className="semester-button"
        onClick={() => setNoOfSemesters(8)}
      >
        8 Semesters
      </Button>
    </div>
  );
};

export default SelectNoOfSemesters;
