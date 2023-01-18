import React, { useState } from "react";
import Button from "../../UI/button/Button";
import ExpenseForm from "../expense-form/ExpenseForm";
import styled from "styled-components";

const DivContainer = styled.div`
  background: #ad9be9;
  border-radius: 12px;
  padding: 50px;
`;

const NewExpense = ({ onNewExpenseAdd }) => {
  const [showForm, setShowForm] = useState(false);
  const showExpenseForm = () => {
    setShowForm((prevState) => {
      return !prevState;
    });
  };
  return (
    <DivContainer>
      {showForm ? (
        <ExpenseForm
          onShowForm={showExpenseForm}
          onNewExpenseAdd={onNewExpenseAdd}
        />
      ) : (
        <Button title="Добавить новый расход" onClick={showExpenseForm} />
      )}
    </DivContainer>
  );
};

export default NewExpense;
