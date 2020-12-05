import React from "react";
import { Line, LineChart, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

function formatDate(string: any) {
    var options = { year: 'numeric' };
    return new Date(string).toLocaleDateString([], options);
}
const data = [
    { time: formatDate("2014"), value: 130 },
    { time: formatDate("2015"), value: 165 },
    { time: formatDate("2016"), value: 142 },
    { time: formatDate("2017"), value: 130 },
    { time: formatDate("2018"), value: 165 },
    { time: formatDate("2019"), value: 142 },
    { time: formatDate("2020"), value: 190 }
];
const YearLine = () => (
    <>
        <h1>Year Graph</h1>
        <LineChart width={500} height={300} data={data}>
            <XAxis dataKey="time" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
            <Tooltip />
        </LineChart>
    </>
);

export default YearLine;