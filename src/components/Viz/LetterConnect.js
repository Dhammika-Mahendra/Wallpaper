import React from 'react'
import * as d3 from 'd3';
import { useRef } from 'react';
import { useEffect } from 'react';
//import { links, nodes } from './Data';
import { wordAr, wordArr } from './TextArray';
import { findLongestWord, generateArray, generateValuePairs, letterInd } from './Funcs';

export default function LetterConnect() {

  const svgRef = useRef();

  useEffect(() => {

    const width = 1400;
    const height = 600;
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .style('background-color', '#f0f0f0');

  svg.selectAll('*').remove(); 

let nodes = generateArray(14, letterInd);
let links = generateValuePairs(wordAr, letterInd);
  
  svg.selectAll('line')
  .data(links)
  .enter()
  .append('line')
  .attr('x1', d => nodes[d[0]].x)
  .attr('y1', d => nodes[d[0]].y)
  .attr('x2', d => nodes[d[1]].x)
  .attr('y2', d => nodes[d[1]].y)
  .attr('stroke', '#999')
  .attr('stroke-width', 1);

// Draw nodes
const nodeGroup = svg.selectAll('g')
  .data(nodes)
  .enter()
  .append('g')
  .attr('transform', d => `translate(${d.x},${d.y})`);

nodeGroup.append('circle')
  .attr('r', 10)
  .attr('fill', d => d.group === 1 ? '#ff9999' : d.group === 2 ? '#99ccff' : '#99ff99');

nodeGroup.append('text')
  .attr('text-anchor', 'middle')
  .attr('dy', '.35em')
  .text(d => d.letter)
  .attr('font-size', '12px')
  .attr('fill', '#333');

  console.log(generateValuePairs(wordArr, letterInd));

  }, []);

  return <svg ref={svgRef}></svg>;
}
