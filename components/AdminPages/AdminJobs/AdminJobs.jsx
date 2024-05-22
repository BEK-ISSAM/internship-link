import React from "react";
import "./styles.css"


export default function AdminJobs(){

    return (
    <div className="container-fluid px-4">
     
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
        <li className="breadcrumb-item active">Tables</li>
      </ol>
      <div className="card mb-4">
        <div className="card-body">
          DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the
          <a target="_blank" rel="noopener noreferrer" href="https://datatables.net/">official DataTables documentation</a>.
        </div>

      </div>

      <table class="table table-sm">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    </div>
    )
    
}