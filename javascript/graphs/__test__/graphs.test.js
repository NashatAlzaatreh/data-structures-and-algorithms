"use strict";
const { Graph, Vertex } = require("../graphs/graphs");

describe("Graphs tests", () => {
  const vertexOne = new Vertex(1);
  const vertexTwo = new Vertex(2);
  const vertexThree = new Vertex(3);
  const vertexFour = new Vertex(4);
  const vertexFive = new Vertex(5);
  const vertexSix = new Vertex(6);

  const graph = new Graph();
  graph.addVertex(vertexOne);
  graph.addVertex(vertexTwo);
  graph.addVertex(vertexThree);
  graph.addVertex(vertexFour);
  graph.addVertex(vertexFive);
  graph.addVertex(vertexSix);

  graph.addDirectedEdge(vertexOne, vertexTwo, 6);
  graph.addDirectedEdge(vertexOne, vertexThree, 5);
  graph.addDirectedEdge(vertexOne, vertexFour, 9);
  graph.addDirectedEdge(vertexOne, vertexSix, 3);
  graph.addDirectedEdge(vertexFour, vertexFive, 1);
  graph.addDirectedEdge(vertexFive, vertexSix, 2);
  graph.addDirectedEdge(vertexSix, vertexTwo, 2);
  console.log("vertexOne", vertexOne);

  test("should instantiate a new graph", () => {
    expect(graph).toBeDefined();
  });
  test("Node can be successfully added to the graph", async () => {
    expect(vertexOne).toBeDefined();
    expect(vertexTwo).toEqual({ value: 2 });
  });

  test("A collection of all nodes can be properly retrieved from the graph", async () => {
    expect(graph.getVertexes()).toBeDefined();
    expect(graph.getVertexes()).toEqual([
      { value: 1 },
      { value: 2 },
      { value: 3 },
      { value: 4 },
      { value: 5 },
      { value: 6 },
    ]);
  });
  test("The proper size is returned, representing the number of nodes in the graph", async () => {
    expect(graph.size()).toEqual(6);
  });

  test("An edge can be successfully added to the graph", async () => {
    expect(graph.addDirectedEdge(vertexOne, vertexTwo, 6)).toEqual({
      vertex: { value: 2 },
      weight: 6,
    });
  });
});
