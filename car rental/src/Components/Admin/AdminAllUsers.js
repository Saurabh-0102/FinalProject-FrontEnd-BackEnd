import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AdminNavbarCompo from "./AdminNavBar";

export default function AdminAllUserCompo() {
  const [userData, setUserData] = useState([{}]);
  const userRole = sessionStorage.getItem("userRole");
  const navigate = useNavigate();
  useEffect(() => {
    if (userRole === null || userRole != "admin") {
      navigate("/login");
    }

    axios.get(`http://localhost:8080/getalluser`).then((res) => {
      console.log(res.data);
      //alert(JSON.stringify(res.data));
      const o = res.data;
      setUserData(o);
      console.log(userData);
    });
  }, []);

  return (
    <>
      <AdminNavbarCompo />
      <Table striped bordered hover variant="dark" className="text-center">
        <thead>
          <tr>
            <th>CustomerId</th>
            <th>Name</th>
            <th>Email</th>
            <th>MobileNumber</th>
            <th>City</th>
            <th>Government Id</th>
            <th>status</th>
            <th>Activate/Deactivate</th>
          </tr>
        </thead>
        {userData.map((item, key) => (
          <tbody>
            <tr>
              <td>{++key}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.mobileNumber}</td>
              <td>{item.city}</td>
              <td>{item.govId}</td>
              <td>{item.status}</td>
              <td>
                {" "}
                <button className="btn btn-info btn-sm" type="submit">
                  Activate/Deactivate
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </>
  );
}
