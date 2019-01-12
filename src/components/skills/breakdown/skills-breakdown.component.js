// @flow
import * as React from 'react';
import { Sunburst, Hint, LabelSeries } from 'react-vis';
import './skills-breakdown.css';

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

const skillData = {
  children: [
    {
      name: 'Frontend',
      hex: '#777777',
      children: [
        { name: 'React', hex: '#11ABB0', value: 10 },
        { name: 'React Native', hex: '#11ABB0', value: 10 },
        { name: 'Angular', hex: '#11ABB0', value: 10 },
      ],
    },
    {
      name: 'Backend',
      hex: '#777777',
      children: [
        { name: 'Node', hex: '#11ABB0', value: 10 },
        { name: 'Go', hex: '#11ABB0', value: 10 },
        { name: 'C#', hex: '#11ABB0', value: 10 },
        { name: 'Java', hex: '#11ABB0', value: 10 },
        { name: 'Typescript', hex: '#11ABB0', value: 10 },
      ],
    },
    {
      name: 'Database',
      hex: '#777777',
      children: [
        { name: 'Postgres', hex: '#11ABB0', value: 10 },
        { name: 'MongoDB', hex: '#11ABB0', value: 10 },
        { name: 'MySQL', hex: '#11ABB0', value: 10 },
        { name: 'SQL Server', hex: '#11ABB0', value: 10 },
        { name: 'Redis', hex: '#11ABB0', value: 10 },
      ],
    },
    {
      name: 'Ops/Infrastructure',
      hex: '#777777',
      children: [
        { name: 'Docker', hex: '#11ABB0', value: 10 },
        { name: 'Kubernetes', hex: '#11ABB0', value: 10 },
        { name: 'RabbitMQ', hex: '#11ABB0', value: 10 },
        { name: 'NGINX', hex: '#11ABB0', value: 10 },
        { name: 'HAProxy', hex: '#11ABB0', value: 10 },
      ],
    },
    {
      name: 'Monitoring/Observability',
      hex: '#777777',
      children: [
        { name: 'New Relic', hex: '#11ABB0', value: 10 },
        { name: 'Prometheus', hex: '#11ABB0', value: 10 },
        { name: 'SysDig', hex: '#11ABB0', value: 10 },
      ],
    },
    {
      name: 'CI/CD Tools',
      hex: '#777777',
      children: [
        { name: 'TravisCI', hex: '#11ABB0', value: 10 },
        { name: 'CircleCI', hex: '#11ABB0', value: 10 },
        { name: 'Jenkins', hex: '#11ABB0', value: 10 },
      ],
    },
    {
      name: 'Platforms',
      hex: '#777777',
      children: [
        { name: 'GCP', hex: '#11ABB0', value: 10 },
        { name: 'AWS', hex: '#11ABB0', value: 10 },
        { name: 'Azure', hex: '#11ABB0', value: 10 },
        { name: 'Digital Ocean', hex: '#11ABB0', value: 10 },
      ],
    },
    {
      name: 'Build Tools',
      hex: '#777777',
      children: [
        { name: 'Webpack', hex: '#11ABB0', value: 10 },
        { name: 'Gulp', hex: '#11ABB0', value: 10 },
        { name: 'Grunt', hex: '#11ABB0', value: 10 },
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

const decoratedData = updateData(skillData, false);

type Props = {};

type State = {
  pathValue: string | boolean,
  data: any,
  finalValue: string | boolean,
  clicked: boolean,
};

export default class SkillsBreakdown extends React.Component<Props, State> {
  state = {
    pathValue: ' ',
    data: decoratedData,
    finalValue: 'Skills',
    clicked: false,
  };

  render() {
    const { clicked, data, finalValue, pathValue } = this.state;
    return (
      <section id="skills-breakdown">
        <div className="instruction">
          {clicked
            ? 'Click to unlock and keep exploring'
            : 'Hover and click to explorer my skills'}
        </div>
        <div>
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
            height={300}
            width={300}
          >
            {finalValue && (
              <LabelSeries
                data={[{ x: 0, y: 0, label: finalValue, style: LABEL_STYLE }]}
              />
            )}
          </Sunburst>
        </div>
        <div className="path">{pathValue}</div>
      </section>
    );
  }
}
