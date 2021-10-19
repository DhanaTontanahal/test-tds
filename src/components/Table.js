import React , {useEffect,useState} from "react";

const tableStyle = {
  border: "1px solid black",
  borderCollapse: "collapse",
  textAlign: "center",
  width: "100%",
};

const tdStyle = {
  border: "1px solid #85C1E9",
  background: "white",
  padding: "5px",
};

const thStyle = {
  border: "1px solid #3498DB",
  background: "#3498DB",
  color: "white",
  padding: "5px",
};

function Table({ id, columns, idata }) {
  return (
    <table key={id} style={tableStyle}>
      <tbody>
        <tr>
          {columns.map(({ path, name }) => (
            <th style={thStyle} key={path}>
              {name}
            </th>
          ))}
        </tr>
        {[idata]?.map((rowData) => (
          <tr key={rowData[id]}>
            {columns.map(({ path }) => (
              <td style={tdStyle} key={path}>
                {rowData[path]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Table;
