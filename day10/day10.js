let day = "10"
let fileHandler = require('../lib/fileHandler.js')
let input = fileHandler.getInputArr(`../inputs/input${day}.txt`)

let process = function(el){

}

class Graph {
    // defining vertex array and
    // adjacent list
    constructor(noOfVertices)
    {
        this.noOfVertices = noOfVertices;
        this.children = new Map();
    }

    addVertex(v){
        this.children.set(v, new Set());
    }
    
    addEdge(v, w){
        this.children.get(v).add(w)
        //this.children.get(w).add(v)
    }

    dfs(startingNode){
        let visited = new Map();
        this.DFSUtil(startingNode, visited);
    }

    DFSUtil(vert, visited){
        visited.set(vert, true)
        console.log(vert.print());
    
        let get_neighbours = this.children.get(vert);
    
        for (let node of get_neighbours) {
            let get_elem = node;
            let vis = visited.get(get_elem)
            if (!vis)
                this.DFSUtil(get_elem, visited);
        }
    }  

    printGraph()
{
    // get all the vertices
    var get_keys = this.children.keys();
 
    // iterate over the vertices
    for (var i of get_keys) 
{
        // get the corresponding adjacency list
        // for the vertex
        var get_values = this.children.get(i);
        var conc = "";
 
        // iterate over the adjacency list
        // concatenate the values into a string
        for (var j of get_values)
            conc += j.print() + " ";
 
        // print the vertex and its adjacency list
        console.log(i.print() + " -> " + conc);
    }
}
    
}

class Node {
    constructor(x, y){
        this.x = x 
        this.y = y
    }

    print(){
        return `(${this.x}, ${this.y})`
    }

}

let ans = "todo"
let i = 0

input = input.map(line => line.trim())

let graph = new Graph(input.length * input[0].trim().length)

let nodes = new Map()

for(line of input){
    let j = 0
    for(el of line){
        let node = new Node(j, i)
        nodes.set(`${j};!${i}`, node)
        graph.addVertex(node)
        j++
    }
    i++
}

// | is a vertical pipe connecting north and south.
// - is a horizontal pipe connecting east and west.
// L is a 90-degree bend connecting north and east.
// J is a 90-degree bend connecting north and west.
// 7 is a 90-degree bend connecting south and west.
// F is a 90-degree bend connecting south and east.
// . is ground; there is no pipe in this tile.
// S is the starting position of the animal; there is a pipe on this tile, but your sketch doesn't show what shape the pipe has.
// jjjjj
// -L|F7 i
// 7S-7| i
// L|7|| i
// -L-J| i
// L|-JF i

let getNeighbours = function(i, j, el){
    let neighbours = []
    let node1, node2;
    let el1, el2;
    let node1Index, node2Index;
    switch (el) {
        case '|':
            node1 = nodes.get(`${j};!${i-1}`)
            node2 = nodes.get(`${j};!${i+1}`)
          break;
          case '-':
            node1 = nodes.get(`${j-1};!${i}`)
            node2 = nodes.get(`${j+1};!${i}`)
          break;
          case 'L':
            node1 = nodes.get(`${j};!${i-1}`)
            node2 = nodes.get(`${j+1};!${i}`)
          break;
          case 'J':
            node1 = nodes.get(`${j};!${i-1}`)
            node2 = nodes.get(`${j-1};!${i}`)
          break;
          case '7':
            node1 = nodes.get(`${j-1};!${i}`)
            node2 = nodes.get(`${j};!${i+1}`)
          break;
          case 'F':
            node1 = nodes.get(`${j+1};!${i}`)
            node2 = nodes.get(`${j};!${i+1}`)
            break;
          case 'S':
            for(let y = i -1; y < i + 1; y++){
                for(let x = j - 1; x < j + 1; x++){
                    let n = nodes.get(`${x};!${y}`)
                    if(n!= undefined) {neighbours.push(n)}
                }
            }
            break;
        default:
          console.log(`sus and odd: ${el}`);
      }
      if(node1 !== undefined) {neighbours.push(node1)}
      if(node2 !== undefined) {neighbours.push(node2)}
      return neighbours
}

i = 0
let start;

for(line of input){
    let j = 0
    for(el of line){
        let v = nodes.get(`${j};!${i}`)
        if(el == "S"){
            start = nodes.get(`${j};!${i}`)
            el = "F"
        }
        let ws = getNeighbours(i, j, el)
        for(w of ws){
            graph.addEdge(v, w)
        }
    
        
        j++
    }
    i++
}

graph.printGraph()
graph.dfs(start)

console.log(ans)