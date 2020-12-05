import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

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
const Weeks = () => (
  <>
    <h1>Week Graph</h1>
    <BarChart width={800} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis dataKey="value" />
      <Tooltip />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  </>
);

export default Weeks;