import React, { useCallback } from 'react';
import ReactFlow, { addEdge, Background, Connection, ConnectionMode, Controls, Node, useEdgesState, useNodesState } from 'reactflow';
import { zinc } from 'tailwindcss/colors'
import 'reactflow/dist/style.css';
import { Square } from './components/nodes/Square';
import DefaultEdge from './components/edges/DefaultEdge';
import * as Toolbar from '@radix-ui/react-toolbar';


const NODE_TYPES = {
  square: Square
}

const EDGE_TYPES = {
  default: DefaultEdge
}

const INITIAL_NODES = [
  {
    id: crypto.randomUUID(),
    type: 'square',
    position: {
      x: 200,
      y: 400
    },

    data: {},
  },
  {
    id: crypto.randomUUID(),
    type: 'square',
    position: {
      x: 1000,
      y: 400
    },

    data: {},
  },

]satisfies Node[]



function App() {
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const [nodes, setNodes, onNodesChanges] = useNodesState(INITIAL_NODES)

  const onConnect = useCallback((connection: Connection) => {
    return setEdges(edges => addEdge(connection, edges))
  }, [])


  function addSquareNode() {
    setNodes(nodes => [
      ...nodes, {
        id: crypto.randomUUID(),
        type: 'square',
        position: {
          x: 750,
          y: 350
        },
        data: {},
      }
    ])
  }

  return (
    <div className="w-screen h-screen  bg-slate-300" >
      <ReactFlow
        edgeTypes={EDGE_TYPES} defaultEdgeOptions={{ type: 'default' }}
        onConnect={onConnect} onEdgesChange={onEdgesChange} edges={edges}
        nodeTypes={NODE_TYPES} nodes={nodes} onNodesChange={onNodesChanges}
        connectionMode={ConnectionMode.Loose}>
        <Background size={2} gap={12} color={zinc[400]} />
        <Controls />
      </ReactFlow >


      <Toolbar.Root className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg border border-zinc-300 px-8 h-20 w-96 overflow-hidden">
        <Toolbar.Button
          onClick={addSquareNode}
          className='w-32 h-32 bg-violet-500 rounded transition-transform mt-6 hover:-translate-y-2'>
        </Toolbar.Button>
      </Toolbar.Root>
    </div>
  );
}

export default App;
