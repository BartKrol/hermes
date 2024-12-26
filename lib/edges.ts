// "edge_center_node_1"
// "edge_alternative_node_1"
// "edge_alternative_center_node_1"

export function getEdgeName(node: string, active: number) {
  if (active === 1) {
    return `edge_center_${node}`;
  } else {
    return `edge_alternative_${node}`;
  }
}
