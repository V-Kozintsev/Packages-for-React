import { Component } from "react";
import React from "react";

export class Counter extends Component {
  state = {
    products: [],
    loading: false,
    error: false,
    title: "",
  };

  componentDidMount() {
    this.setState({ loading: true }); // Запускаем индикатор загрузки

    

    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(({ title }) => {
        this.setState({ title, loading: false }); // Обновляем состояние после успешного ответа
      })
      .catch((error) => {
        this.setState({ error: true, loading: false }); // Обновляем состояние после ошибки
        console.error("Ошибка при получении данных:", error);
      });

    this.setState({ products: [1, 2, 3] }); // Установите начальные значения products
  }

  render() {
    const { products, loading, error, title } = this.state; // Распакуйте state для улучшения читаемости.

    return (
      <div>
        <p>products: {products.toString()}</p>
        <p>loading: {loading.toString()}</p>
        <p>error: {error.toString()}</p>
        <p>title: {title}</p>
        <button
          onClick={() => {
            this.setState({ products: [5, 6] });
          }}
        >
          change
        </button>
      </div>
    );
  }
}
