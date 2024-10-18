export interface Cell {
  Value: string;
  Attributes?: { Value: string; Id: string }[];
}

export interface Row {
    RowType: string;
    Title?: string;
    Cells: Cell[];
}

export interface Report {
    ReportName: string;
    ReportDate: string;
    Rows: Section[];
}

export interface ResponseData {
  Status: string;
  Reports: Report[];
}

export enum Rowtype {
  header = "Header",
  section = "Section",
}
export interface Section {
    Title: string;
    Rows: Row[];
}