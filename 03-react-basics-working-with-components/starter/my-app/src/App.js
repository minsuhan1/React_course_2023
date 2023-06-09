import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // 이전 상태의 스냅샷을 이용하여 완벽하게 상태를 변경
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  // 리액트 컴포넌트를 생성: React.createElement(태그명, 속성 객체, 내부 요소)
  // 하나의 리턴문으로 여러 개의 리액트 컴포넌트(React.createElement의 결과)를 반환할 수가 없다
  // 이것이 JSX에서 항상 wrapper element로 감싸서 리턴해야 하는 이유이다

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
