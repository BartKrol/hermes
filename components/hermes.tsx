"use client";

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import game from "../game.json";

interface GraphData {
  [key: string]: {
    main?: boolean;
    enabled: boolean | string;
    symbol: string;
    connections: string[];
  };
}

const graphData: GraphData = game;

const Graph: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  const width = 1200;
  const height = 800;

  useEffect(() => {
    d3.select(svgRef.current).selectAll("*").remove(); // Clear previous SVG content

    const radius = 250; // Circle radius for main nodes

    // Separate nodes into main and secondary categories
    const mainNodes = Object.keys(graphData)
      .filter((key) => graphData[key].main)
      .map((key, index, array) => {
        const angle = (index / array.length) * 2 * Math.PI; // Distribute in a circle
        return {
          id: key,
          symbol: graphData[key].symbol,
          x: width / 2 + radius * Math.cos(angle),
          y: height / 2 + radius * Math.sin(angle),
          color: d3.schemeCategory10[index % d3.schemeCategory10.length],
          isMain: true,
        };
      });

    const secondaryNodes = Object.keys(graphData)
      .filter((key) => !graphData[key].main)
      .map((key) => ({
        id: key,
        symbol: graphData[key].symbol,
        color: "#ccc", // Grey for secondary nodes
        isMain: false,
      }));

    // Combine main and secondary nodes
    const allNodes = [...mainNodes, ...secondaryNodes];

    const links = Object.keys(graphData).flatMap((key) =>
      graphData[key].connections
        .filter((connection) => graphData[connection]?.enabled)
        .map((connection) => ({ source: key, target: connection }))
    );

    // Create SVG container
    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .style("border", "1px solid black");

    // Add simulation for all nodes
    const simulation = d3
      .forceSimulation(allNodes)
      .force(
        "link",
        d3
          .forceLink(links)
          .id((d: any) => d.id)
          .distance(100)
      )
      .force("charge", d3.forceManyBody().strength(-200))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force(
        "collide",
        d3.forceCollide((d) => (d.isMain ? 40 : 20)) // Avoid overlapping
      );

    // Add links
    const link = svg
      .append("g")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke-width", 2);

    // Add nodes
    const node = svg
      .append("g")
      .selectAll("circle")
      .data(allNodes)
      .join("circle")
      .attr("r", (d) => (d.isMain ? 20 : 12))
      .attr("fill", (d) => d.color)
      .call(
        d3
          .drag<SVGCircleElement, any>()
          .on("start", (event, d) => {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = event.x;
            d.fy = event.y;
          })
          .on("drag", (event, d) => {
            d.fx = event.x;
            d.fy = event.y;
          })
          .on("end", (event, d) => {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          })
      );

    // Add labels
    const labels = svg
      .append("g")
      .selectAll("text")
      .data(allNodes)
      .join("text")
      .text((d) => d.symbol)
      .attr("font-size", 12)
      .attr("text-anchor", "middle")
      .attr("dy", ".35em");

    // Update positions for all nodes and links on tick
    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

      labels.attr("x", (d) => d.x).attr("y", (d) => d.y);
    });
  }, []);

  return <svg ref={svgRef} width={width} height={height}></svg>;
};

export default Graph;
