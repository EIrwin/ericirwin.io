// @flow
import * as React from 'react';
import { Sunburst, Hint, LabelSeries } from 'react-vis';
import './skills.css';
import { SkillsBreakdown } from './breakdown';
import { SkillsDistribution } from './distribution';

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="row">
          <div className="col-md-6">
            <h1 className="subtitle">Breakdown</h1>
            <SkillsBreakdown />
          </div>
          <div className="col-md-6">
            <h1 className="subtitle">Distribution</h1>
            <SkillsDistribution />
          </div>
        </div>
      </div>
    </section>
  );
}
