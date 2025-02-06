import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import AddTodo from "../components/AddTodo";
import axios from "axios";

const url = "https://64ecd95ff9b2b70f2bfb0943.mockapi.io/todos";

interface ITodo {
  task: string;
  isDone: boolean;
  id: string;
}

export default function Home() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const getTodos = () => {
    const {data} = await axios(url);

    console.log(data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Container>
      <Header />
      <AddTodo />
      <h1>todoList</h1>
    </Container>
  );
}
