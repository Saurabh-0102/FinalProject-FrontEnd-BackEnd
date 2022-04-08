import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AdminNavbarCompo from "./AdminNavBar";

export default function AdminAllCarCompo() {
  const [myCars, setMyCats] = useState([]);
  const userRole = sessionStorage.getItem("userRole");
  const userEmail = sessionStorage.getItem("userEmail");
  const navigate = useNavigate();
  useEffect(() => {
    //navigate("/adminallcars");
    if (userRole === null || userRole != "admin") {
      navigate("/login");
    }
    axios.get(`Http://localhost:8080/hostgetallcars`).then((res) => {
      setMyCats(res.data);
      console.log(res.data);
    });
  }, []);

  function updateCars(e) {
    //console.log(e.target.value);
    //console.log(userEmail);
    sessionStorage.setItem("userEmail", userEmail);
    sessionStorage.setItem("carId", e.target.value);
    navigate("/adminupdateallcars");
  }
  return (
    <>
      <AdminNavbarCompo />
      <div className="container-fluid p-0 m-0">
        <div className="row">
          <div className="col-12">
            <Table
              striped
              bordered
              hover
              variant="dark"
              className="text-center"
            >
              <thead>
                <tr>
                  <th>Car No</th>
                  <th>Car Name</th>
                  <th>Car Type</th>
                  <th>Price Per Day</th>
                  <th>No of seats</th>
                  <th>User Id</th>
                  <th>Host Name</th>
                  <th>Update Car</th>
                </tr>
              </thead>
              {myCars.map((items, key) => (
                <>
                  {
                    <tbody>
                      <tr>
                        <td>{++key}</td>
                        <td>{items.carName}</td>
                        <td>{items.carType}</td>
                        <td>{items.pricePerDay}</td>
                        <td>{items.noOfSeats}</td>
                        <td>{items.user.userId}</td>
                        <td>{items.user.name}</td>
                        <td>
                          <Button
                            btn
                            btn-info
                            className="btn-sm "
                            onClick={updateCars}
                            value={items.carId}
                          >
                            update
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  }
                </>
              ))}
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}
