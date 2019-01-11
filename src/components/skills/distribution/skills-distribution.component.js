// @flow
import React, { Component } from 'react';
import { RadarChart, Hint } from 'react-vis';
import './skills-distribution.css';

// The first 6 data elements here are to simulate a 'spider' type of radar chart -
// similar to CircularGridLines, but straight edges instead.
const DATA = [
  {
    name: 'Spider5',
    Frontend: 5,
    Backend: 5,
    Ops: 5,
    Database: 5,
    Tools: 5,
    Platforms: 5,
    fill: '#f8f8f8',
    stroke: '#cccccc',
  },
  {
    name: 'Spider4',
    Frontend: 4,
    Backend: 4,
    Ops: 4,
    Database: 4,
    Tools: 4,
    Platforms: 4,
    fill: 'white',
    stroke: '#cccccc',
  },
  {
    name: 'Spider3',
    Frontend: 3,
    Backend: 3,
    Ops: 3,
    Database: 3,
    Tools: 3,
    Platforms: 3,
    fill: '#f8f8f8',
    stroke: '#cccccc',
  },
  {
    name: 'Spider2',
    Frontend: 2,
    Backend: 2,
    Ops: 2,
    Database: 2,
    Tools: 2,
    Platforms: 2,
    fill: 'white',
    stroke: '#cccccc',
  },
  {
    name: 'Spider1',
    Frontend: 1,
    Backend: 1,
    Ops: 1,
    Database: 1,
    Tools: 1,
    Platforms: 1,
    fill: '#f8f8f8',
    stroke: '#cccccc',
  },
  {
    name: 'Spider0',
    Frontend: 0,
    Backend: 0,
    Ops: 0,
    Database: 0,
    Tools: 0,
    Platforms: 0,
    fill: '#f8f8f8',
    stroke: '#cccccc',
  },
  {
    name: 'Skills',
    Frontend: 4,
    Backend: 4.8,
    Ops: 4.5,
    Database: 4,
    Tools: 4.5,
    Platforms: 4.5,
    fill: '#11ABB0',
    stroke: 'rgba(114,172,240,0.2)',
  },
];

const tipStyle = {
  display: 'flex',
  color: '#fff',
  background: '#000',
  alignItems: 'center',
  padding: '5px',
};

type Props = {};

type State = {
  hoveredCell: any,
};

export default class RadarChartWithTooltips extends Component<Props, State> {
  state = {
    hoveredCell: false,
  };

  render() {
    const { hoveredCell } = this.state;

    return (
      <section id="skills-distribution">
        <div className="row justify-content-center">
          <div className="col-12">
            <RadarChart
              className="chart"
              data={DATA}
              tickFormat={t => {
                return '';
              }}
              domains={[
                {
                  name: 'Backend',
                  domain: [0, 5],
                  tickFormat: t => {
                    if (t < 5 && t > 0) {
                      return Math.round(t);
                    }
                    return '';
                  },
                },
                {
                  name: 'Frontend',
                  domain: [0, 5],
                  getValue: d => d.Frontend,
                },
                { name: 'Ops', domain: [0, 5], getValue: d => d.Ops },
                {
                  name: 'Database',
                  domain: [0, 5],
                  getValue: d => d.Database,
                },
                { name: 'Tools', domain: [0, 5], getValue: d => d.Tools },
                {
                  name: 'Platforms',
                  domain: [0, 5],
                  getValue: d => d.Platforms,
                },
              ]}
              width={600}
              height={600}
              margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
              onValueMouseOver={v => {
                this.setState({ hoveredCell: v });
              }}
              onValueMouseOut={v => this.setState({ hoveredCell: false })}
              style={{
                polygons: {
                  stroke: '#ccc',
                  strokeWidth: 1,
                  strokeOpacity: 0.8,
                  fillOpacity: 0.6,
                },
                labels: {
                  textAnchor: 'middle',
                  fill: '#fff',
                  margin: '20px;',
                },
                axes: {
                  line: {
                    stroke: '#fff',
                    fillOpacity: 0.8,
                    strokeWidth: 1.5,
                    strokeOpacity: 0.8,
                  },
                  ticks: {
                    fillOpacity: 0,
                    strokeOpacity: 0,
                  },
                  text: {},
                },
              }}
              colorRange={['transparent']}
              hideInnerMostValues={false}
              renderAxesOverPolygons={true}
            >
              {hoveredCell && hoveredCell.dataName === 'Skills' && (
                <Hint value={hoveredCell}>
                  <div style={tipStyle}>
                    {hoveredCell.domain}: {hoveredCell.value}
                  </div>
                </Hint>
              )}
            </RadarChart>
          </div>
        </div>
      </section>
    );
  }
}
