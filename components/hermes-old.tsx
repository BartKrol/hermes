/* eslint-disable  @typescript-eslint/no-explicit-any */

"use client";

import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import game from "@/game.json";
import { getActiveEdges } from "@/actions/edgesAction";

interface NodeData {
  main?: boolean;
  symbol: string;
  color?: string;
}

interface EdgeData {
  nodes: string[];
  variable: boolean;
  color: string;
}

interface GraphData {
  nodes: { [key: string]: NodeData };
  edges: { [key: string]: EdgeData };
}

const graphData: GraphData = {
  nodes: game.nodes,
  edges: game.edges,
};

const width = 1200;
const height = 800;

type GraphProps = {
  activeEdges: Set<string>;
};

function Graph({ activeEdges: initialActiveEdges }: GraphProps) {
  const [activeEdges, setActiveEdges] = useState(initialActiveEdges);

  useEffect(() => {
    const interval = setInterval(() => {
      const fetchActiveEdges = async () => {
        const newActiveEdges = await getActiveEdges();
        setActiveEdges(newActiveEdges);
      };
      fetchActiveEdges();
    }, 30000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    d3.select(svgRef.current).selectAll("*").remove(); // Clear previous SVG content

    // Parse nodes and edges
    const centerNode = {
      id: "center",
      symbol: "",
      color: "#fff",
      isMain: true,
      fx: width / 2,
      fy: height / 2,
    };

    const mainNodes = Object.keys(graphData.nodes)
      .filter((key) => graphData.nodes[key].main)
      .map((key, index, array) => {
        const angle = (index / array.length) * 2 * Math.PI; // Distribute in an ellipse
        return {
          id: key,
          symbol: graphData.nodes[key].symbol,
          color: d3.schemePaired[index % d3.schemePaired.length],
          isMain: true,
          angle, // Store the initial angle for rotation
        };
      });

    const secondaryNodes = Object.keys(graphData.nodes)
      .filter((key) => !graphData.nodes[key].main)
      .map((key) => ({
        id: key,
        symbol: graphData.nodes[key].symbol,
        color: "#ccc", // Grey for secondary nodes
        isMain: false,
      }));

    const allNodes = [centerNode, ...mainNodes, ...secondaryNodes];

    const links = Object.keys(graphData.edges)
      .filter((key) => !graphData.edges[key].variable || activeEdges.has(key))
      .map((key) => {
        const edge = graphData.edges[key];
        const sourceNode = allNodes.find((node) => node.id === edge.color);
        return {
          source: edge.nodes[0],
          target: edge.nodes[1],
          color: sourceNode ? sourceNode.color : "black", // Edge color from source node
        };
      });

    // Create SVG container
    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .style("border", "1px solid black");

    // Add force simulation for dynamic placement
    const simulation = d3
      // @ts-expect-error TODO
      .forceSimulation(allNodes)
      .force(
        "link",
        d3
          .forceLink(links)
          .id((d: any) => d.id)
          .distance(150) // Increase link distance to spread nodes apart
      )
      .force("charge", d3.forceManyBody().strength(-200)) // Increased negative charge for more spacing
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force(
        "collide",
        // @ts-expect-error TODO
        d3.forceCollide((d) => (d.isMain ? 10 : 20)) // Larger collision radius for main and secondary nodes
      )
      .on("tick", () => {
        // Boundary clamping to prevent nodes from going outside the canvas
        allNodes.forEach((node) => {
          // @ts-expect-error TODO
          node.x = Math.max(40, Math.min(width - 40, node.x)); // Keep x within boundaries
          // @ts-expect-error TODO
          node.y = Math.max(40, Math.min(height - 40, node.y)); // Keep y within boundaries
        });

        link
          .attr("x1", (d: any) => d.source.x)
          .attr("y1", (d: any) => d.source.y)
          .attr("x2", (d: any) => d.target.x)
          .attr("y2", (d: any) => d.target.y);

        // @ts-expect-error TODO
        node.attr("transform", (d) => `translate(${d.x},${d.y})`);

        // @ts-expect-error TODO
        labels.attr("x", (d) => d.x).attr("y", (d) => d.y);
      });

    // Add links
    const link = svg
      .append("g")
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke", (d) => d.color)
      .attr("stroke-width", 2);

    // Add nodes
    const node = svg
      .append("g")
      .selectAll("path")
      .data(allNodes)
      .join("path")
      .attr("d", (d) =>
        d.isMain
          ? d3.symbol().type(d3.symbolCircle).size(400)()
          : d3.symbol().type(d3.symbolSquare).size(150)()
      )
      .attr("fill", (d) => d.color)
      .call(
        // @ts-expect-error TODO
        d3
          .drag<SVGPathElement, any>()
          .on("start", (event, d) => {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            if (!d.isMain && d.id !== "center") {
              d.fx = event.x;
              d.fy = event.y;
            }
          })
          .on("drag", (event, d) => {
            if (!d.isMain && d.id !== "center") {
              d.fx = event.x;
              d.fy = event.y;
            }
          })
          .on("end", (event, d) => {
            if (!event.active) simulation.alphaTarget(0);
            if (!d.isMain && d.id !== "center") {
              d.fx = null;
              d.fy = null;
            }
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
  }, [activeEdges]);

  return <svg ref={svgRef} width={width} height={height}></svg>;
}

export default Graph;
