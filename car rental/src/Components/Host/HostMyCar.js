import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import HostNavbarCompo from "./HostNavBar";

export default function MyCarCompo() {
  const [myCars, setMyCats] = useState([]);
  const userId = sessionStorage.getItem("userId");
  const userEmail = sessionStorage.getItem("userEmail");
  const userRole = sessionStorage.getItem("userRole");
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/mycar");
    if (userRole === null || userRole != "host") {
      navigate("/login");
    }
    axios
      .get(`Http://localhost:8080/hostgetallcarsbyuserid/${userId}`)
      .then((res) => {
        setMyCats(res.data);
      });
    navigate("/mycar");
  }, []);

  function updateCar(e) {
    console.log(e.target.value);
    console.log(userEmail);
    sessionStorage.setItem("userEmail", userEmail);
    sessionStorage.setItem("carId", e.target.value);
    navigate("/updatecar");
  }

  return (
    <>
      <HostNavbarCompo />
      {/* <h1>MyCars</h1> */}
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
                        <td>
                          <Button
                            btn
                            btn-info
                            className="btn-sm "
                            onClick={updateCar}
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
