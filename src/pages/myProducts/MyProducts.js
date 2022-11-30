import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authProvider/AuthProvider";
import Advertised from "../advertised/Advertised";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState("");

  const { data: categories = [], refetch } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete!");
    if (proceed) {
      fetch(`http://localhost:5000/categories/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          refetch();
        });
    }
  };

  const handleAd = (id) => {
    setProducts(id);
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Advertised</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {user?.email &&
            categories.map((category, i) => (
              <tr key={category._id}>
                <td> {i + 1} </td>
                <td> {category.title} </td>
                <td>
                  <button
                    onClick={() => handleAd(category._id)}
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(category._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <Advertised products={products}></Advertised>
    </div>
  );
};

export default MyProducts;
