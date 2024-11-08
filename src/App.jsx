import { useState,useEffect } from "react";


function App() {
  useEffect(() => {
    fetchData()
  },[]);
  const [todo,setTodo] = useState([]);
  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.org/comments');
    const data = await response.json();
    setTodo(data);
  }
  // const [key, setKey] = useState("");
  // const [count, setCount] = useState(0);

  return (
    
      <section>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Post ID</th>
              <th>User ID</th>
              <th>Comment</th>
            </tr>
          </thead>
          <tbody>
            {todo.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.postId}</td>
                <td>{item.userId}</td>
                <td>{item.comment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    
  );
}

export default App;
