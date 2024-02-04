import { Button } from 'react-bootstrap';

const SelectNoOfSemesters = ({ setNoOfSemesters }) => {
  const semesters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="semester row d-flex align-items-center justify-content-center ">
      <div className="col-12 col-md-6">
        <h1 className="description">
          GPA Claculator, does not calculate your GPA for each semester as well as CGPA
          for all the semesters combined.
          <br />
          <br /> (Made for GPAs that are out of 10).
        </h1>
      </div>
      <div className="selectsem col-12 col-md-6 ">
        <h1 className="sem-header">No. of Semesters</h1>
        <div className="year-wrapper container">
          <div className="row">
            {semesters.map((sem) => {
              return (
                <div className=" semester-btn semester-button-wrapper col-md-6 col-sm-12">
                  <Button
                    variant="dark"
                    className="semester-button"
                    style={{'padding': '30px'}}
                    onClick={() => setNoOfSemesters(semesters.splice(0, sem))}
                  >
                    {sem} Semester
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectNoOfSemesters;
