import { Link } from "react-router-dom";

const Dashboard = () => {
  
  return (
    <div className="d-flex justify-content-center align-items-center column-gap-3 my-5">
      <Link to="/users">
        <button className="btn btn-info">List Users</button>
      </Link>
      <Link to="/create-user">
        <button className="btn btn-info">Create Users</button>
      </Link>
      <Link to="/edit-user">
        <button className="btn btn-info">Edit Users</button>
      </Link>
    </div>
  );
};

export default Dashboard;

