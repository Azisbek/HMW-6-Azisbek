import styled from "styled-components";

const DivExpenseFilter = styled.div`
  color: white;
  padding: 0;
  margin-top: 20px;
  margin-bottom: 1rem;
`;

const ExpenseFilterControl = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const SelectValue = styled.select`
  width: 100px;
  height: 50px;
  border-radius: 5px;
  text-align: center;
`;

const ExpensesFilter = ({ value, onChange }) => {
  return (
    <DivExpenseFilter>
      <ExpenseFilterControl>
        <label>Filter by year</label>
        <SelectValue value={value} onChange={onChange}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </SelectValue>
      </ExpenseFilterControl>
    </DivExpenseFilter>
  );
};

export default ExpensesFilter;
