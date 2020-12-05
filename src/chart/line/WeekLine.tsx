import React from "react";
import { Line, LineChart, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

function formatDate(string: any){
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(string).toLocaleDateString([],options);
}

const data = [
  { time: formatDate("12/1/2020"), value: 130 },
  { time: formatDate("12/2/2020"), value: 165 },
  { time: formatDate("12/3/2020"), value: 142 },
  { time: formatDate("12/4/2020"), value: 130 },
  { time: formatDate("12/5/2020"), value: 165 },
  { time: formatDate("12/6/2020"), value: 142 },
  { time: formatDate("12/7/2020"), value: 190 }
];
const WeekLine = () => (
  <>
    <h1>Week Graph</h1>
    <LineChart width={500} height={300} data={data}>
            <XAxis dataKey="time" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
            <Tooltip />
        </LineChart>
  </>
);

export default WeekLine;