import { Button } from "react-bootstrap";

const SelectNoOfSemesters = ({ noOfSemesters, setNoOfSemesters }) => {
  return (
    <div className="container">
      <h1>Select No. of Semesters</h1>
      <Button variant="primary" onClick={() => setNoOfSemesters(1)}>
        Only 1 semester
      </Button>
      <Button variant="primary" onClick={() => setNoOfSemesters(2)}>
        2 semesters
      </Button>
      <Button variant="primary" onClick={() => setNoOfSemesters(3)}>
        3 semesters
      </Button>
      <Button variant="primary" onClick={() => setNoOfSemesters(4)}>
        4 semesters
      </Button>
      <Button variant="primary" onClick={() => setNoOfSemesters(5)}>
        5 semesters
      </Button>
      <Button variant="primary" onClick={() => setNoOfSemesters(6)}>
        6 semesters
      </Button>
      <Button variant="primary" onClick={() => setNoOfSemesters(7)}>
        7 semesters
      </Button>
      <Button variant="primary" onClick={() => setNoOfSemesters(8)}>
        8 semesters
      </Button>
    </div>
  );
};

export default SelectNoOfSemesters;
