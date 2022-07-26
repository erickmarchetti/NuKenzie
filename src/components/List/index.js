import { useState } from "react"
import { Card } from "../Card"
import { Loading } from "../Loading"
import "./style.css"

export function List({ listTransactions, removeListTransactions }) {
  const [filter, setFilter] = useState("todos")

  function filterType(e) {
    const valueButton = e.target.value
    setFilter(valueButton)
  }

  return (
    <div className="listContainer">
      <div className="listContainer__header">
        <h2>Resumo financeiro</h2>

        <button
          onClick={filterType}
          value="todos"
          className={filter === "todos" && "header__button--ativo"}
        >
          Todos
        </button>
        <button
          onClick={filterType}
          value="Entrada"
          className={filter === "Entrada" && "header__button--ativo"}
        >
          Entradas
        </button>
        <button
          onClick={filterType}
          value="Saída"
          className={filter === "Saída" && "header__button--ativo"}
        >
          Saídas
        </button>
      </div>

      <ul className="listContainer__content">
        {listTransactions.length === 0 ? (
          <Loading />
        ) : (
          listTransactions.map(
            (item, index) =>
              (item.type === filter || item.secondType === filter) && (
                <Card
                  item={item}
                  index={index}
                  removeListTransactions={removeListTransactions}
                />
              )
          )
        )}
      </ul>
    </div>
  )
}
