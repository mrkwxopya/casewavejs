import { CaseWaveGraph }
from "../packages/core/dist/index.js";

const graph = new CaseWaveGraph({
 allowCycles:true
});

graph.addNode({
 id:"a",
 type:"entity",
 position:{x:0,y:0}
});

let crashed=false;

try{
 graph.addEdge({
   id:"broken",
   type:"bad",
   source:{
    kind:"node",
    nodeId:"missing"
   },
   target:{
    kind:"node",
    nodeId:"a"
   },
   direction:"directed"
 });
}catch{
 crashed=true;
}

if(!crashed){
 throw new Error(
  "Crash replay expected failure."
 );
}

if(!graph.getNode("a")){
 throw new Error(
  "Graph recovery failed."
 );
}

console.log(
 "Crash replay OK."
);


