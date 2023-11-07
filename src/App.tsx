import React from 'react';
import './App.css';
import LineChartDraw from './charts/Linecharts';
import BarchartDraw from './charts/BarChart';
import PieChartDraw from './charts/PieChart';
import ColumnChartDraw from './charts/ColumnChart';

function App() {
  return (
    <div className="App">
      <LineChartDraw/>
      <BarchartDraw/>
      <PieChartDraw/>
      <ColumnChartDraw/>
    </div>
  );
}

export default App;
