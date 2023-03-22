function dfs(vertex, graph) {
	// Initialize a set for tracking visited vertices
    const visited = new Set();
	// Initialize a stack for tracking traversal
    const stack = [];
	// Add the start vertex to visited
    visited.add(vertex);
	// Push the the start vertex to the stack
    stack.push(vertex);
	// While the stack is not empty
    while(stack.length){
    //   Pop  a vertex from the stack
    const currentVertex = stack.pop();
    console.log(currentVertex);
	//   For each neighbor of the vertex
    for(const neighbor of graph[currentVertex]){
	//     If neighbor has not been visited
        if(!visited.has(neighbor)){
    //       Add neighbor to visited
        visited.add(neighbor);
	//       Push neighbor to the stack
        stack.push(neighbor);

    }
    
    }

    }

}


const graph = {
    0: [1, 2], 
    1: [2], 
    2: [3], 
    3: [1, 2]
  }
  
  const graph2 = {
    0: [1, 2, 3],
    1: [0, 2],
    2: [0, 4],
    3: [0],
    4: [2]
  }
  
  // graph from the diagram
  const graph3 = {
    0: [1, 3, 6],
    1: [4, 5],
    2: [5, 7],
    3: [0, 5],
    4: [1, 6],
    5: [1, 2, 3],
    6: [0, 4],
    7: [2]
  }
  
  console.log(dfs(0, graph3));