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
        <SkillsBreakdown />
        <SkillsDistribution />
      </div>
    </section>
  );
}
