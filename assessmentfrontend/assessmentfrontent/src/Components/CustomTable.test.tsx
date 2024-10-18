import { render, screen } from '@testing-library/react';
import CustomTable from './CustomTable';
import { Report } from '../types';

describe('CustomTable Component', () => {
  const mockReport: Report = {
    ReportName: 'Balance Sheet',
    ReportDate: '2024-01-01',
    Rows: [
      {
        Title: 'Assets',
        Rows: [
          {
            RowType: 'Section',
            Title: 'Assets',
            Cells: [{ Value: '10000' }],
          },
        ],
      },
    ],
  };

  it('should render the report name and rows', () => {
    render(<CustomTable report={mockReport} />);

    // Check that the report name is displayed
    expect(screen.getByText('Balance Sheet')).toBeInTheDocument();

    // Check that the rows are displayed
    expect(screen.getByText('Assets')).toBeInTheDocument();
    expect(screen.getByText('10000')).toBeInTheDocument();
  });

  it('should display no rows if report is empty', () => {
    const emptyReport: Report = { ReportName: '', ReportDate: '', Rows: [] };
    render(<CustomTable report={emptyReport} />);

    // Check that no rows are displayed
    expect(screen.queryByText('Assets')).not.toBeInTheDocument();
    expect(screen.queryByText('10000')).not.toBeInTheDocument();
  });
});
