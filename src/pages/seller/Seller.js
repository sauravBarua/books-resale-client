import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Table } from "react-bootstrap";

const Seller = () => {
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <h1>seller</h1>
      {users.map(
        (user, i) =>
          user.role === "seller" && (
            <div key={i}>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> {i} </td>
                    <td> {user.name} </td>
                    <td> {user.email} </td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          )
      )}
    </div>
  );
};

export default Seller;
