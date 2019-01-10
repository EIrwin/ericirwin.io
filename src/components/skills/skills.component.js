// @flow
import * as React from 'react';
import { Sunburst, Hint, LabelSeries } from 'react-vis';
import './skills.css';

export const EXTENDED_DISCRETE_COLOR_RANGE = [
  '#19CDD7',
  '#DDB27C',
  '#88572C',
  '#FF991F',
  '#F15C17',
  '#223F9A',
  '#DA70BF',
  '#125C77',
  '#4DC19C',
  '#776E57',
  '#12939A',
  '#17B8BE',
  '#F6D18A',
  '#B7885E',
  '#FFCB99',
  '#F89570',
  '#829AE3',
  '#E79FD5',
  '#1E96BE',
  '#89DAC1',
  '#B3AD9E',
];

const D3FlareData = {
  children: [
    {
      name: 'Frontend',
      children: [
        { name: 'React', hex: '#12939A', value: 10 },
        { name: 'React Native', hex: '#12939A', value: 10 },
        { name: 'Angular', hex: '#12939A', value: 10 },
      ],
    },
    {
      name: 'Backend',
      children: [
        { name: 'Node', hex: '#12939A', value: 10 },
        { name: 'Go', hex: '#12939A', value: 10 },
        { name: 'C#', hex: '#12939A', value: 10 },
        { name: 'Java', hex: '#12939A', value: 10 },
        { name: 'Typescript', hex: '#12939A', value: 10 },
      ],
    },
    {
      name: 'Database',
      children: [
        { name: 'Postgres', hex: '#12939A', value: 10 },
        { name: 'MongoDB', hex: '#12939A', value: 10 },
        { name: 'MySQL', hex: '#12939A', value: 10 },
        { name: 'SQL Server', hex: '#12939A', value: 10 },
        { name: 'Redis', hex: '#12939A', value: 10 },
      ],
    },
    {
      name: 'Ops/Infrastructure',
      children: [
        { name: 'Docker', hex: '#12939A', value: 10 },
        { name: 'Kubernetes', hex: '#12939A', value: 10 },
        { name: 'RabbitMQ', hex: '#12939A', value: 10 },
        { name: 'NGINX', hex: '#12939A', value: 10 },
        { name: 'HAProxy', hex: '#12939A', value: 10 },
      ],
    },
    {
      name: 'Monitoring/Observability',
      children: [
        { name: 'New Relic', hex: '#12939A', value: 10 },
        { name: 'Prometheus', hex: '#12939A', value: 10 },
        { name: 'SysDig', hex: '#12939A', value: 10 },
      ],
    },
    {
      name: 'CI/CD Tools',
      children: [
        { name: 'TravisCI', hex: '#12939A', value: 10 },
        { name: 'CircleCI', hex: '#12939A', value: 10 },
        { name: 'Jenkins', hex: '#12939A', value: 10 },
      ],
    },
    {
      name: 'Platforms',
      children: [
        { name: 'GCP', hex: '#12939A', value: 10 },
        { name: 'AWS', hex: '#12939A', value: 10 },
        { name: 'Azure', hex: '#12939A', value: 10 },
        { name: 'Digital Ocean', hex: '#12939A', value: 10 },
      ],
    },
    {
      name: 'Build Tools',
      children: [
        { name: 'Webpack', hex: '#12939A', value: 10 },
        { name: 'Gulp', hex: '#12939A', value: 10 },
        { name: 'Grunt', hex: '#12939A', value: 10 },
      ],
    },
  ],
};

const LABEL_STYLE = {
  fontSize: '24px',
  fill: '#fff',
  textAnchor: 'middle',
};

function getKeyPath(node) {
  if (!node.parent) {
    return [''];
  }

  return [(node.data && node.data.name) || node.name].concat(
    getKeyPath(node.parent),
  );
}

function updateData(data: any, keyPath) {
  if (data.children) {
    data.children.map(child => updateData(child, keyPath));
  }
  // add a fill to all the uncolored cells
  if (!data.hex) {
    data.style = {
      fill: EXTENDED_DISCRETE_COLOR_RANGE[5],
    };
  }
  data.style = {
    ...data.style,
    fillOpacity: keyPath && !keyPath[data.name] ? 0.2 : 1,
  };

  return data;
}

const decoratedData = updateData(D3FlareData, false);

type Props = {};

type State = {
  pathValue: string | boolean,
  data: any,
  finalValue: string | boolean,
  clicked: boolean,
};

export default class BasicSunburst extends React.Component<Props, State> {
  state = {
    pathValue: ' ',
    data: decoratedData,
    finalValue: 'Skills',
    clicked: false,
  };

  render() {
    const { clicked, data, finalValue, pathValue } = this.state;
    return (
      <section id="skills">
        <div className="container">
          <h2>Skills</h2>
          <div className="instruction">
            {clicked
              ? 'Click to unlock and keep exploring'
              : 'Hover and click to explorer my skills'}
          </div>
          <div className="row justify-content-center">
            <div className="col-12">
              <Sunburst
                className="diagram"
                animation
                hideRootNode
                onValueMouseOver={node => {
                  if (clicked) {
                    return;
                  }
                  const path = getKeyPath(node).reverse();
                  const pathAsMap = path.reduce((res, row) => {
                    res[row] = true;
                    return res;
                  }, {});
                  this.setState({
                    finalValue: path[path.length - 1],
                    pathValue: path.slice(1, path.length).join(' > '),
                    data: updateData(decoratedData, pathAsMap),
                  });
                }}
                onValueMouseOut={() =>
                  clicked
                    ? () => {}
                    : this.setState({
                        pathValue: false,
                        finalValue: false,
                        data: updateData(decoratedData, false),
                      })
                }
                onValueClick={() => this.setState({ clicked: !clicked })}
                style={{
                  stroke: '#fff',
                  strokeOpacity: 0.3,
                  strokeWidth: '0.5',
                }}
                colorType="literal"
                getSize={d => d.value}
                getColor={d => d.hex}
                data={data}
                height={500}
                width={500}
              >
                {finalValue && (
                  <LabelSeries
                    data={[
                      { x: 0, y: 0, label: finalValue, style: LABEL_STYLE },
                    ]}
                  />
                )}
              </Sunburst>
            </div>
          </div>
          <div className="path">{pathValue}</div>
        </div>
      </section>
    );
  }
}
