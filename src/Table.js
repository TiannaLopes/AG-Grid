import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

export const Table = () => {
  const data = [
    { name: "New York Rangers", winsLastSeason: 1 },
    { name: "New York Islanders", winsLastSeason: 30 },
    { name: "New Jersey Devils", winsLastSeason: 25 },
    { name: "Tampa Bay Lightning", winsLastSeason: 73 },
    { name: "Calgary Flames", winsLastSeason: 5 },
    { name: "Vancouver Canucks", winsLastSeason: 24 },
    { name: "Montreal Canadians", winsLastSeason: 69 },
    { name: "Toronto Maple Leafs", winsLastSeason: 56 },
    { name: "Boston Bruins", winsLastSeason: 59 },
    { name: "Vegas Golden Knights", winsLastSeason: 65 },
    { name: "San Jose Sharks", winsLastSeason: 18 },
    { name: "Winnepeg Jets", winsLastSeason: 47 },
    { name: "Chicago Blackhawks", winsLastSeason: 51 },
    { name: "Pittsburgh Penguins", winsLastSeason: 43 },

  ];

  const columns = [
    {
      headerName: "Name",
      field: "name",
      checkboxSelection: true,
      sortable: true,
      editable: true,
      filter: true,
      floatingFilter: true,
      flex: 1,
    },
    {
      headerName: "winsLastSeason",
      field: "winsLastSeason",
      sortable: true,
      editable: true,
      filter: true,
      floatingFilter: true,
      flex: 1,
    },
  ];

  const defaultColDef = [
    {
      sortable: true,
      editable: true,
      filter: true,
      floatingFilter: true,
      flex: 1,
    },
  ];
  let gridApi;
  const onGridReady = (params) => {
    gridApi = params.api;
  };
  const onExportClick = () => {
    gridApi.exportDataAsCsv();
  };
  return (
    <>
      <button onClick={() => onExportClick()}>export</button>
      <div
        className="ag-theme-alpine"
        style={{
          height: "500px",
          // width: "600px",
        }}
      >
        <h2> Very Fake Data about the NHL ... </h2>
        <AgGridReact
          rowData={data}
          columnDefs={columns}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
        />
      </div>
    </>
  );
};
