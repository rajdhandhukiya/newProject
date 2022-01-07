import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

function Comment() {
  const [tableComment, setTableComment] = useState();

  const getTableComment = async () => {
    try {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      console.log(data.data);
      setTableComment(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getTableComment();
  }, []);
  return (
    <div>
      {tableComment.map((data) => {
        return (
          <>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>postId</th>
                  <th>id</th>
                  <th>name</th>
                  <th>email</th>
                  <th>body</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{data.postId}</td>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.body}</td>
                </tr>
              </tbody>
            </Table>
          </>
        );
      })}
    </div>
  );
}

export default Comment;
