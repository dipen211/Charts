import React from "react";
import { Line, LineChart, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

function formatDate(string: any) {
    var options = { month: 'long' };
    return new Date(string).toLocaleDateString([], options);
}

const data = [
    { time: formatDate("1"), value: 130 },
    { time: formatDate("2"), value: 165 },
    { time: formatDate("3"), value: 142 },
    { time: formatDate("4"), value: 130 },
    { time: formatDate("5"), value: 165 },
    { time: formatDate("6"), value: 142 },
    { time: formatDate("7"), value: 165 },
    { time: formatDate("8"), value: 142 },
    { time: formatDate("9"), value: 130 },
    { time: formatDate("10"), value: 165 },
    { time: formatDate("11"), value: 142 },
    { time: formatDate("12"), value: 190 }
];
const MonthLine = () => (
    <>
        <h1>Month Graph</h1>
        <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" strokeDasharray="5 5" />
      </LineChart>
    </>
);

export default MonthLine;