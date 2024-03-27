import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const PagesToRead = () => {

    const [readBooks, setReadBooks] = useState([])

    useEffect(() => {
        const getData = JSON.parse(localStorage.getItem('read-book')) || [];
        setReadBooks(getData);
    }, [])




    function CustomTooltip({ payload, label, active }) {
        if (active) {
          return (
            <div className="custom-tooltip">
              <p className="label">{`${label} : ${payload[0].value}`}</p>
              <p className="intro">{getIntroOfPage(label)}</p>
              <p className="desc">Anything you want can be displayed here.</p>
            </div>
          );
        }
      
        return null;
      }
      
      const data = readBooks.map(({bookName, totalPages}, index) => ({
        name: bookName,
        uv: totalPages,
        index // To have a unique identifier for the custom tooltip
      }));

    const getPath = (x, y, width, height) => (
        `M${x},${y + height}
         C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
         C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
         Z`
      );
    const TriangleBar = (props) => {
        const {
            fill, x, y, width, height,
        } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    const renderCustomAxisTick = (props) => {
        const { x, y, stroke, payload } = props;
        return (
          <g transform={`translate(${x},${y})`}>
            <text x={0} y={0} dy={16} textAnchor="end" fill={stroke} transform="rotate(-45)">
              {payload.value}
            </text>
          </g>
        );
      };

    return (
        <div>
            Pages to Read
            <BarChart width={500} height={500} data={readBooks}>
                <XAxis dataKey="name" tick={renderCustomAxisTick}/>
                <YAxis/>
                <Bar dataKey="uv" fill="#8884d8"
                    shape={<TriangleBar />} />
            </BarChart>
        </div>
    );
};

export default PagesToRead;