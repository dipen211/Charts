import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

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
const Years = () => (
  <>
    <h1>Year Graph</h1>
    <BarChart width={800} height={300} data={data}>
      <defs>
        <linearGradient
          id="colorUv"
          x1="0"
          y1="0"
          x2="0"
          y2="100%"
          spreadMethod="reflect"
        >
          <stop offset="0" stopColor="red" />
          <stop offset="1" stopColor="green" />
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" />s
      <XAxis dataKey="time" />
      <YAxis dataKey="value" />
      <Tooltip />
      <Bar dataKey="value" fill="url(#colorUv)" />
    </BarChart>
  </>
);

export default Years;