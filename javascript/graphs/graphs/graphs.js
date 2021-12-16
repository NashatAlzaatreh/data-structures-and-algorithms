"use strict";

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.list = new Map();
    this.graphSize = 0;
  }

  addVertex(vertex) {
    this.graphSize++;
    return this.list.set(vertex, []);
  }

  addDirectedEdge(startVertex, endVertex, weight = 0) {
    if (!this.list.has(startVertex) || !this.list.has(endVertex)) {
      return console.log("start or end vertex is not defined");
    }

    const edge = new Edge(endVertex, weight);
    const start = this.list.get(startVertex);
    start.push(edge);
    return edge;
  }

  getVertexes() {
    let array = [];
    for (const [vertex] of this.list.entries()) {
      array.push(vertex);
    }
    return array;
  }

  size() {
    return this.graphSize;
  }

  printAll() {
    for (const [vertex, edge] of this.list.entries()) {
      console.log(vertex, edge);
    }
  }
}
module.exports = { Graph, Vertex };

// Example

//   2 <-- 1 --> 3
//   \    / \
//    \  /   \
//      6     4
//       \   /
//         5
//
// const vertexOne = new Vertex(1);
// const vertexTwo = new Vertex(2);
// const vertexThree = new Vertex(3);
// const vertexFour = new Vertex(4);
// const vertexFive = new Vertex(5);
// const vertexSix = new Vertex(6);

// const graph = new Graph();
// graph.addVertex(vertexOne);
// graph.addVertex(vertexTwo);
// graph.addVertex(vertexThree);
// graph.addVertex(vertexFour);
// graph.addVertex(vertexFive);
// graph.addVertex(vertexSix);

// graph.addDirectedEdge(vertexOne, vertexTwo, 6);
// graph.addDirectedEdge(vertexOne, vertexThree, 5);
// graph.addDirectedEdge(vertexOne, vertexFour, 9);
// graph.addDirectedEdge(vertexOne, vertexSix, 3);
// graph.addDirectedEdge(vertexFour, vertexFive, 1);
// graph.addDirectedEdge(vertexFive, vertexSix, 2);
// graph.addDirectedEdge(vertexSix, vertexTwo, 2);

// graph.printAll();

// console.log("size >>>", graph.size());
// console.log("getVertexes >>>", graph.getVertexes());
