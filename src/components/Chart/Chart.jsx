import React from "react";
import ChartBar from "./ChartBar";
import styled from "styled-components";

const DivChart = styled.div`
  margin-top: 90px;
  padding: 1rem;
  border-radius: 12px;
  background-color: #f8dfff;
  text-align: center;
  display: flex;
  justify-content: space-around;
  height: 10rem;
`;

const Chart = ({ items }) => {
  const maximumPrice = 2000;
  const month = [
    {
      label: "Январь",
      currentPrice: 0,
    },
    {
      label: "Февраль",
      currentPrice: 0,
    },
    {
      label: "Март",
      currentPrice: 0,
    },
    {
      label: "Апрель",
      currentPrice: 0,
    },
    {
      label: "Май",
      currentPrice: 0,
    },
    {
      label: "Июнь",
      currentPrice: 0,
    },
    {
      label: "Июль",
      currentPrice: 0,
    },
    {
      label: "Август",
      currentPrice: 0,
    },
    {
      label: "Сентябрь",
      currentPrice: 0,
    },
    {
      label: "Октябрь",
      currentPrice: 0,
    },
    {
      label: "Ноябрь",
      currentPrice: 0,
    },
    {
      label: "Декабрь",
      currentPrice: 0,
    },
  ];
  items.forEach((item) => {
    const mothNumber = new Date(item.date).getMonth();
    month[mothNumber].currentPrice += item.price;
  });
  return (
    <DivChart>
      {month.map((item) => {
        return (
          <ChartBar
            key={item.label}
            label={item.label}
            currentPrice={item.currentPrice}
            maximumPrice={maximumPrice}
          />
        );
      })}
    </DivChart>
  );
};

export default Chart;
