import { useState } from "react";
import { Button, Navbar, Container } from "react-bootstrap";
import "./App.css";
import GpaCalculator from "./components/GpaCalculator";
import SelectNoOfSemesters from "./components/SelectNoOfSemesters";
import GpaDataTable from "./components/GpaDataTable";

function App() {
  const [noOfSemesters, setNoOfSemesters] = useState(0);
  const [gpaData, setGpaData] = useState({});
  const [ShowGpaData, setShowGpaData] = useState(false);

  return (
    <div>
      <Navbar bg="white">
        <Container>
          <Navbar.Brand>
            <h2>GPA Calculator</h2>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className="body">
        {noOfSemesters === 0 ? (
          <SelectNoOfSemesters
            setNoOfSemesters={setNoOfSemesters}
            noOfSemesters={noOfSemesters}
          />
        ) : (
          <div>
            <div className="go-back">
              <Button
                variant="danger"
                onClick={() => {
                  setNoOfSemesters(0);
                  setShowGpaData(false);
                }}
              >
                Go Back
              </Button>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-6">
                  {noOfSemesters >= 1 ? (
                    <GpaCalculator
                      key={1}
                      semno={1}
                      setGpaData={setGpaData}
                      gpaData={gpaData}
                      setShowGpaData={setShowGpaData}
                    />
                  ) : null}
                </div>
                <div className="col-12 col-lg-6">
                  {noOfSemesters >= 2 ? (
                    <GpaCalculator
                      key={2}
                      semno={2}
                      setGpaData={setGpaData}
                      gpaData={gpaData}
                      setShowGpaData={setShowGpaData}
                    />
                  ) : null}
                </div>
                <div className="col-12 col-lg-6">
                  {noOfSemesters >= 3 ? (
                    <GpaCalculator
                      key={3}
                      semno={3}
                      setGpaData={setGpaData}
                      gpaData={gpaData}
                      setShowGpaData={setShowGpaData}
                    />
                  ) : null}
                </div>
                <div className="col-12 col-lg-6">
                  {noOfSemesters >= 4 ? (
                    <GpaCalculator
                      key={4}
                      semno={4}
                      setGpaData={setGpaData}
                      gpaData={gpaData}
                      setShowGpaData={setShowGpaData}
                    />
                  ) : null}
                </div>
                <div className="col-12 col-lg-6">
                  {noOfSemesters >= 5 ? (
                    <GpaCalculator
                      key={5}
                      semno={5}
                      setGpaData={setGpaData}
                      gpaData={gpaData}
                      setShowGpaData={setShowGpaData}
                    />
                  ) : null}
                </div>
                <div className="col-12 col-lg-6">
                  {noOfSemesters >= 6 ? (
                    <GpaCalculator
                      key={6}
                      semno={6}
                      setGpaData={setGpaData}
                      gpaData={gpaData}
                      setShowGpaData={setShowGpaData}
                    />
                  ) : null}
                </div>
                <div className="col-12 col-lg-6">
                  {noOfSemesters >= 7 ? (
                    <GpaCalculator
                      key={7}
                      semno={7}
                      setGpaData={setGpaData}
                      gpaData={gpaData}
                      setShowGpaData={setShowGpaData}
                    />
                  ) : null}
                </div>
                <div className="col-12 col-lg-6">
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
                <div className="col-12 col-lg-6">
                  {noOfSemesters >= 9 ? (
                    <GpaCalculator
                      key={9}
                      semno={9}
                      setGpaData={setGpaData}
                      gpaData={gpaData}
                      setShowGpaData={setShowGpaData}
                    />
                  ) : null}
                </div>
                <div className="col-12 col-lg-6">
                  {noOfSemesters >= 10 ? (
                    <GpaCalculator
                      key={10}
                      semno={10}
                      setGpaData={setGpaData}
                      gpaData={gpaData}
                      setShowGpaData={setShowGpaData}
                    />
                  ) : null}
                </div>
              </div>
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
