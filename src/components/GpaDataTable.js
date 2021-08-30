const GpaDataTable = ({ gpaData, noOfSemesters }) => {
  return (
    <div>
      {Object.keys(gpaData).map(([key, value]) => {
        return (
          <div key={key}>
            <h1>
              Semester {key}: {gpaData[key]}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default GpaDataTable;
