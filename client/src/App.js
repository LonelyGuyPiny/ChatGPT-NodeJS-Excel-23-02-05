import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="Project-panel">
          <button className="btn btn-primary btn-lg">+ Create Project</button>

          <table className="table table-info table-striped mt-4">
            <thead>
              <tr className="table-primary">
                <th>Porject Name</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Porject1(Google Doc)</td>
                <td>Rename</td>
                <td>Delete</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="Task-panel mt-5">
          <h2>Project 1</h2>

          <button className="btn btn-primary btn-lg mt-3">+ Create Task</button>

          <table className="table table-info table-striped mt-4">
            <thead>
              <tr className="table-primary">
                <th>Task Name</th>
                <th>Type</th>
                <th>Action</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Task 1 (Worksheet)</td>
                <td>Fixed</td>
                <td>Run</td>
                <td>Rename</td>
                <td>Delete</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
