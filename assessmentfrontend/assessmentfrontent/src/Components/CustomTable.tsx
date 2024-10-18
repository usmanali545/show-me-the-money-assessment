import React from "react";
import {  Row, Report, Section } from "../types";


const CustomTable: React.FC<{report: Report}> = ({report}) => {
    const renderRows = (rows: Row[]) => {
        if (!rows || !rows.length) return;
        return rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.Cells.map((cell, cellIndex) => (
              <td style={{border:'1px solid white', padding:'10px'}} key={cellIndex}>{cell.Value}</td>
            ))}
          </tr>
        ));
      };

      const renderSections = (sections: Section[]) => {
        return sections.map((section, index) => (
          <React.Fragment key={index}>
            <tr>
              <th style={{border:'1px solid white', padding:'10px'}} colSpan={3}>{section.Title}</th>
            </tr>
            {renderRows(section.Rows)}
          </React.Fragment>
        ));
      };
      return (
        <div>
          <h2>{report.ReportName}</h2>
          <p>{report.ReportDate}</p>
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <th style={{border:'1px solid white', padding:'10px'}}>Account</th>
                <th style={{border:'1px solid white', padding:'10px'}}>Value as of {new Date(report.ReportDate).toDateString()}</th>
                <th style={{border:'1px solid white', padding:'10px'}}>Previous Year</th>
              </tr>
            </thead>
            <tbody>{renderSections(report.Rows)}</tbody>
          </table>
        </div>
      );
};

export default CustomTable;