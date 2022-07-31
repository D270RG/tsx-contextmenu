import React from 'react';
import СontextMenu from './contextmenu';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import 'react-bootstrap';
import {Folder2Open,InfoSquare,Pencil,Trash,Download,Share} from 'react-bootstrap-icons'


// [<i class='bi bi-folder2-open' style='margin-right: 5px'></i>Open,
//                     <i class='bi bi-info-square' style='margin-right: 5px'></i>Info,
//                     <i class='bi bi-pencil' style='margin-right: 5px'></i>Rename,
//                     <i class='bi bi-trash' style='margin-right: 5px'></i>Delete,
//                     <hr class='my-0 py-0'>",
//                     <i class='bi bi-download' style='margin-right: 5px'></i> Download,
//                     <i class='bi bi-share' style='margin-right: 5px'></i> Share]
function folderOpenListener(){
  console.log('openListener');
}
function infoListener(){
  console.log('infoListener');
}
function renameListener(){
  console.log('renameListener');
}
function deleteListener(){
  console.log('deleteListener');
}
function emptyListener(){}
function downloadListener(){
  console.log('downloadListener');
}
function shareListener(){
  console.log('shareListener');
}
// var entryMap = new Map([Button: [ {: folderOpenListener},
//                           {<InfoSquare style={{marginRight: '5px'}}/>,infoListener},
//                           {<Pencil style={{marginRight: '5px'}}/>,renameListener},
//                           {<Trash style={{marginRight: '5px'}}/>,deleteListener},
//                           {<Download style={{marginRight: '5px'}}/>,downloadListener},
//                           {<Share style={{marginRight: '5px'}}/>,shareListener},
//                         ],
//                 Delimiter:[{<hr class='my-0 py-0'>,emptyListener}]]);
var openButton = new Map([
  [<div><Folder2Open style={{marginRight: '5px'}}/>Open</div>,()=>{console.log('openListener')}]
]);
var infoButton = new Map([
  [<div><InfoSquare style={{marginRight: '5px'}}/>Info</div>,()=>{console.log('infoListener')}]
]);
var editButton = new Map([
  [<div><Pencil style={{marginRight: '5px'}}/>Edit</div>,()=>{console.log('EditListener')}]
]);
var Delimiter1 = new Map([
  [<hr style={{marginRight: '5px'}}></hr>,()=>{}]
]);
var deleteButton = new Map([
  [<div><Trash style={{marginRight: '5px'}}/>Delete</div>,()=>{console.log('DeleteListener')}]
]);
var entryMap = new Map([
  [openButton,'Button'],
  [infoButton,'Button'],
  [editButton,'Button'],
  [Delimiter1,'Delimiter'],
  [deleteButton,'Button']
]);
//{{JSX.Element,listener()},type}

var isOpened = false;
function ExampleApp() {
  const [contextMenuHook,contextMenuState] = React.useState([0,0]);
  function contextMenuEvent(e:React.MouseEvent){
    if(isOpened){
      isOpened = false;
    } else {
      isOpened = true;
    }
    e.preventDefault();
    contextMenuState([e.clientX,e.clientY]);
  }
  return (
   <div style={{width: '500px', height: '500px', backgroundColor: 'black'}} onContextMenu={(e)=>contextMenuEvent(e)}>
    {
    !isOpened && <СontextMenu parentHook={contextMenuHook} entries={entryMap}/>
    }
  </div>
  );
}

export default ExampleApp;
