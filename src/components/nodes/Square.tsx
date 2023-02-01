import { NodeResizer } from '@reactflow/node-resizer';
import { NodeProps, Handle, Position } from 'reactflow';
import '@reactflow/node-resizer/dist/style.css';


export function Square( {selected}:NodeProps) {
    return (
        <div className='bg-violet-500 rounded min-w-[200px] min-h-[200px] w-full h-full'>

            <NodeResizer
             minHeight={200} minWidth={200}  
            lineClassName='border-blue-400' 
            handleClassName='h-3 w-3 bg-white border-2 rounded border-blue-400' 
            isVisible={selected}/>
                <Handle className='-right-5 w-3 h-3 border-2 bg-blue-600/60' id="right" type="source" position={Position.Right} />
                <Handle className='-left-5 w-3 h-3 border-2 bg-blue-600/60' id="left" type="source" position={Position.Left} />
                <Handle className='-top-5 w-3 h-3 border-2 bg-blue-600/60' id="top" type="source" position={Position.Top} />
                <Handle className='-bottom-5 w-3 h-3 border-2 bg-blue-600/60' id="bottom" type="source" position={Position.Bottom} />
        </div>
    )
}
