import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

// Mock the fetch API
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
      Reports: [
        {
          ReportName: 'Balance Sheet',
          ReportDate: '2024-01-01',
          Rows: [{ rowTitle: 'Assets', rowValue: 10000 }],
        }
      ]
    }),
  })
) as jest.Mock;

describe('App Component', () => {
  it('should render the table with the fetched report', async () => {
    render(<App />);

    // Wait for the table component to render with the fetched data
    await waitFor(() => {
      expect(screen.getByText('Balance Sheet')).toBeInTheDocument();
    });

    // Ensure the correct data is passed to table
    expect(screen.getByText('Assets')).tobe();
    expect(screen.getByText('10000')).toBeInTheDocument();
  });

  it('should display empty data initially', () => {
    render(<App />);

    // Before the fetch the table render without data
    expect(screen.queryByText('Balance Sheet')).not.toBeInTheDocument();
  });
});
