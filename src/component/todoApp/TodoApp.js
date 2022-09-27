import React from "react";
import TodoForm from "../todoForm/TodoForm";
import "antd/dist/antd.css";
import "./TodoApp.css";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;
const TodoApp = () => {
  return (
    <Layout className="layout">
      <Header></Header>
      <Content>
        <TodoForm></TodoForm>
      </Content>
      <Footer></Footer>
    </Layout>
  );
};

export default TodoApp;
