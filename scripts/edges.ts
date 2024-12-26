function getNumber(i: number) {
  if (i > 11) {
    return i - 11;
  }

  if (i < 1) {
    return 11 + i;
  }

  return i;
}

function getNode(i: number, j?: number) {
  const iNumber = getNumber(i);
  if (j !== undefined) {
    const jNumber = getNumber(j);
    if (iNumber > jNumber) {
      return `node_${jNumber}_${iNumber}`;
    }

    return `node_${iNumber}_${jNumber}`;
  }

  return `node_${iNumber}`;
}

type Graph = {
  [key: string]: {
    nodes: [string, string];
    enabled: boolean;
    color: string;
  };
};

function main() {
  const graph: Graph = {};

  for (let i = 1; i <= 11; i++) {
    graph[`edge_main_${getNode(i)}`] = {
      nodes: [getNode(i), getNode(i, i + 1)],
      enabled: true,
      color: getNode(i),
    };

    graph[`edge_second_${getNode(i)}`] = {
      nodes: [getNode(i, i + 1), getNode(i, i - 2)],
      enabled: true,
      color: getNode(i),
    };

    graph[`edge_third_${getNode(i)}`] = {
      nodes: [getNode(i, i - 2), getNode(i, i - 1)],
      enabled: true,
      color: getNode(i),
    };

    graph[`edge_center_${getNode(i)}`] = {
      nodes: [getNode(i, i - 1), "center"],
      enabled: true,
      color: getNode(i),
    };

    graph[`edge_alternative_${getNode(i)}`] = {
      nodes: [getNode(i, i - 1), getNode(i, i + 2)],
      enabled: false,
      color: getNode(i),
    };

    graph[`edge_alternative_center_${getNode(i)}`] = {
      nodes: [getNode(i, i + 2), "center"],
      enabled: false,
      color: getNode(i),
    };
  }

  console.log(JSON.stringify(graph, null, 2));
}

main();
