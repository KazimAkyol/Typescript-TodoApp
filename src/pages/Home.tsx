import { Container } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import AddTodo from "../components/AddTodo";

export default function Home() {
  return (
    <Container>
      <Header />
      <AddTodo />
      <h1>todoList</h1>
    </Container>
  );
}
