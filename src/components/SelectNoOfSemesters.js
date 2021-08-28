import { Button } from "react-bootstrap";

const SelectNoOfSemesters = ({ noOfSemesters, setNoOfSemesters }) => {
  return (
    <div className="container">
      <h2>{noOfSemesters}</h2>
      <h1>Select No. of Semesters</h1>
      <Button variant="primary" onClick={() => setNoOfSemesters(1)}>
        Only 1 semester
      </Button>
      <Button variant="primary" onClick={() => setNoOfSemesters(2)}>
        1st Year
      </Button>
      <Button variant="primary" onClick={() => setNoOfSemesters(4)}>
        2nd Year
      </Button>
      <Button variant="primary" onClick={() => setNoOfSemesters(6)}>
        3rd Year
      </Button>
      <Button variant="primary" onClick={() => setNoOfSemesters(8)}>
        4th Year
      </Button>
    </div>
  );
};

export default SelectNoOfSemesters;
