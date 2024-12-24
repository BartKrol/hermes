function getNode(i: number) {
  if (i > 11) {
    return `node_${-(11 - i)}`;
  }

  if (i < 1) {
    return `node_${11 + i}`;
  }

  return `node_${i}`;
}

type Graph = {
  [key: string]: {
    [key: string]: {
      enabled: boolean;
    };
  };
};

function main() {
  const graph: Graph = {};

  for (let i = 1; i <= 11; i++) {
    graph[`node_${i}`] = {
      [getNode(i + 1)]: {
        enabled: true,
      },
      [getNode(i - 1)]: {
        enabled: true,
      },
      [getNode(i + 2)]: {
        enabled: false,
      },
      [getNode(i - 2)]: {
        enabled: false,
      },
    };
  }

  console.log(JSON.stringify(graph, null, 2));
}

main();
