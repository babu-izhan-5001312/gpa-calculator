import { useState, useEffect, useRef } from 'react';
import { Button, Navbar, Container } from 'react-bootstrap';
import './App.css';
import GpaCalculator from './components/GpaCalculator';
import SelectNoOfSemesters from './components/SelectNoOfSemesters';
import GpaDataTable from './components/GpaDataTable';

function App() {
  const [noOfSemesters, setNoOfSemesters] = useState([]);
  const [gpaData, setGpaData] = useState({});
  const [ShowGpaData, setShowGpaData] = useState(false);

  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, noOfSemesters.length);
  }, [noOfSemesters]);

  const handleCalculation = () => {
    itemsRef.current.map((func) => func.handleFunction());
  };

  return (
    <div className="gpa-container">
      <Navbar
        bg="none"
        className="row d-flex align-items-center justify-content-center"
      >
        <Container>
          <h2>GPA Calculator</h2>
          <Navbar>
            <a
              className="link"
              href="https://babumohammedizhan.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              Izhan
            </a>
            {noOfSemesters.length > 0 ? (
              <div className="go-back">
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => {
                    setNoOfSemesters([]);
                    setShowGpaData(false);
                  }}
                >
                  Go Back
                </Button>
              </div>
            ) : (
              ''
            )}
          </Navbar>
        </Container>
      </Navbar>
      <body>
        {noOfSemesters.length === 0 ? (
          <SelectNoOfSemesters
            setNoOfSemesters={setNoOfSemesters}
            noOfSemesters={noOfSemesters}
          />
        ) : (
          <div>
            <div className="container">
              <div className="row">
                {noOfSemesters.map((sem, index) => {
                  return (
                    <div
                      className={
                        noOfSemesters.length === 1
                          ? `col-12`
                          : `col-12  col-lg-6`
                      }
                    >
                      <GpaCalculator
                        ref={(el) => (itemsRef.current[index] = el)}
                        key={sem}
                        semno={sem}
                        setGpaData={setGpaData}
                        gpaData={gpaData}
                        setShowGpaData={setShowGpaData}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center calculate-button-wrapper">
              <Button
                className="calculate-button"
                onClick={() => handleCalculation()}
                variant="dark"
              >
                Calculate
              </Button>
            </div>
          </div>
        )}
        {ShowGpaData ? (
          <GpaDataTable gpaData={gpaData} noOfSemesters={noOfSemesters} />
        ) : (
          <div></div>
        )}
      </body>
    </div>
  );
}

export default App;
