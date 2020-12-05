import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

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
const Months = () => (
    <>
        <h1>Month Graph</h1>
        <BarChart width={800} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis dataKey="value" />
            <Tooltip />
            <Bar dataKey="value" />
        </BarChart>
    </>
);

export default Months;