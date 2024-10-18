import { useEffect, useState } from 'react';
import CustomTable from './Components/CustomTable';
import { Report } from "./types";

function App() {
const [report, setReport] = useState<Report> ({ReportName: '', ReportDate: '', Rows: []});
useEffect(() => {
  const fetchReports = async () => {
    const response = await fetch('http://localhost:4000/api/balance-sheet');
    const data = await response.json();
    setReport(data.Reports[0]);
  }
  fetchReports();
}, []);
  console.log('report is', report);
  return (
<div>
  <CustomTable report={report} />
</div>
  );
}


export default App;