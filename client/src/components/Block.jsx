import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Block = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Remove any existing chart elements
    d3.select(chartRef.current).selectAll('*').remove();

    // Create the chart container
    const svg = d3
      .select(chartRef.current)
      .append('svg')
      .attr('width', 700)
      .attr('height', 350);

    // Define the scales
    const xScale = d3
      .scaleBand()
      .domain(data.labels)
      .range([0, 700])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([Math.min(0, d3.min(data.dataset)), Math.max(0, d3.max(data.dataset))])
      .range([300, 0]);

    // Create the bars
    svg
      .selectAll('rect')
      .data(data.dataset)
      .enter()
      .append('rect')
      .attr('x', (d, i) => xScale(data.labels[i]))
      .attr('y', (d) => (d >= 0 ? yScale(d) : yScale(0)))
      .attr('width', xScale.bandwidth())
      .attr('height', (d) => Math.abs(yScale(0) - yScale(d)))
      .attr('fill', (d) => (d >= 0 ? 'green' : 'red'));

    svg
      .selectAll('.value-label')
      .data(data.dataset)
      .enter()
      .append('text')
      .text((d) => d)
      .attr('class', 'value-label')
      .attr('x', (d, i) => xScale(data.labels[i]) + xScale.bandwidth() / 2)
      .attr('y', (d) => (d >= 0 ? yScale(d)+15 : yScale(d) -5))
      .attr('text-anchor', 'middle')
      .attr('fill', 'black');

    // Create the x-axis
    const xAxis = d3.axisBottom(xScale);
    svg.append('g').attr('transform', 'translate(0,300)').call(xAxis);

    // Create the y-axis
    const yAxis = d3.axisLeft(yScale);
    svg.append('g').call(yAxis);
  }, [data]);

  return <div ref={chartRef}></div>;
};

export default Block;
