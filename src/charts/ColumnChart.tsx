import React, { useRef } from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const options: Highcharts.Options = {
    title: {
        text: 'Column chart'
    },
    series: [{
        type: 'column',
        data: [1, 2, 3]
    }]
};

const ColumnChartDraw = (props: HighchartsReact.Props) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartComponentRef}
      {...props}
    />
  );
};

export default ColumnChartDraw;
