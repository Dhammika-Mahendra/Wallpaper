import React from 'react'
import * as d3 from 'd3';
import { useRef } from 'react';
import { useEffect } from 'react';
import { links, nodes } from './Data';

export default function LetterConnect() {

  const svgRef = useRef();

  useEffect(() => {

    const width = 800;
    const height = 600;
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

   
  svg.selectAll('*').remove();  

      // Define nodes
 /*      const nodes = [
        { id: 'A', group: 'input', x: 100, y: 100 },
        { id: 'B', group: 'input', x: 100, y: 150 },
        { id: 'C', group: 'input', x: 100, y: 200 },
        { id: 'D', group: 'input', x: 100, y: 250 },
        { id: 'E', group: 'hidden', x: 200, y: 100 },
        { id: 'F', group: 'hidden', x: 200, y: 150 },
        { id: 'G', group: 'hidden', x: 200, y: 200 },
        { id: 'Z', group: 'output', x: 300, y: 150 }
      ];
  
      // Define links
      const links = [
        { source: 'A', target: 'E' },
        { source: 'A', target: 'F' },
        { source: 'B', target: 'F' },
        { source: 'C', target: 'G' },
        { source: 'C', target: 'E' },
        { source: 'D', target: 'F' },
        { source: 'G', target: 'Z' },
        { source: 'F', target: 'Z' },
      ]; */

    const simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id(d => d.id).distance(100))
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', null)  // Disable centering force
      .force('x', null)       // Disable x force
      .force('y', null)       // Disable y force
      .on('tick', ticked);
  
    nodes.forEach(node => {
        node.fx = node.x;
        node.fy = node.y;
      });

  // Add links
  const link = svg.append('g')
    .selectAll('line')
    .data(links)
    .enter().append('line')
    .attr('stroke-width', 1)
    .attr('stroke', '#999');

  // Add nodes
  const node = svg.append('g')
    .selectAll('circle')
    .data(nodes)
    .enter().append('circle')
    .attr('r', 15)
    .attr('fill', d => d.group === 1 ? '#6baed6' : d.group === 2 ? '#fd8d3c' : '#74c476')

  // Add labels
  svg.append('g')
    .selectAll('text')
    .data(nodes)
    .enter().append('text')
    .attr('x', d => d.x)
    .attr('y', d => d.y)
    .attr('dy', 4)
    .attr('dx', -10)
    .text(d => d.id);

  function ticked() {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

      node
        .attr('cx', d => d.x)
        .attr('cy', d => d.y);

      svg.selectAll('text')
        .attr('x', d => d.x)
        .attr('y', d => d.y);
  }

  }, []);

  return <svg ref={svgRef}></svg>;
}
