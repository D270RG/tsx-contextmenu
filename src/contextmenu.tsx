import * as React from "react";
import './contextmenu.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
interface clickboxProps{
    // className?:string;
    // style: React.CSSProperties;
    dropdownElement: JSX.Element;
    parentHookState:number[];
}
interface dropdownProps{
    entries:Map< Map<JSX.Element,React.MouseEventHandler<HTMLButtonElement>>,string >; //{{JSX.Element,listener()},type}
    parentHookState: number[];
}
interface inactiveElementProps{
    className?:string;
    innerComponent: JSX.Element;
}
interface activeElementProps{
    className?:string;
    clickListener: React.MouseEventHandler<HTMLButtonElement>;
    innerComponent: JSX.Element;
}
interface contextMenuProps{
    entries:Map< Map<JSX.Element,React.MouseEventHandler<HTMLButtonElement>>,string >, 
    parentHook:number[]
}
function Delimiter(props:inactiveElementProps){
    return (<div className={props.className}>
        {props.innerComponent}
    </div>);
}
function Button(props:activeElementProps){
    return (<button onClick={props.clickListener} className={props.className}>
        {props.innerComponent}
    </button>);
}
function Clickbox(props:clickboxProps){
            var clickboxStyle = {
                Position: "absolute",
                left:"0px",
                top:"0px",
            } as React.CSSProperties;

    var clickboxClassname = "w-100 h-100 context-menu-clickbox";
    // React.useEffect(()=>{
    //     if(isOpened === true){
    //         isOpened = false;
    //         console.log(isOpened);
    //     } else {
    //         isOpened = true;
    //         console.log(isOpened);
    //     }
    // },[props.parentHookState]);
    return <div style={clickboxStyle} className={clickboxClassname}>{props.dropdownElement}</div>
}
function Dropdown(props:dropdownProps){
    const delimiterClass = "w-100 border-0 my-1";
    const entryButtonClass = "w-100 btn-light btn-nooutline border-0 rounded text-left py-1";

    var dropdownStyle = {
        maxWidth: '130px',
        left: props.parentHookState.at(0)+'px',
        top: props.parentHookState.at(1)+'px',
        //Visibility: 'hidden'
    };
    const dropdownClass = 'pos-absolute context-menu rounded shadow bg-light p-1';
    //{
    //{JSX.Element,listener()},type},
    //{JSX.Element,listener()},type},   
    //}
    function init(){
        var options:JSX.Element[] = [];
        props.entries.forEach((value,key)=>{
            switch(value){
                case 'Button':{
                    options.push(<Button 
                        className={entryButtonClass}
                        innerComponent={key.keys().next().value as JSX.Element} 
                        clickListener={key.values().next().value as React.MouseEventHandler<HTMLButtonElement>}/>);
                    break;
                }
                case 'Delimiter':{
                        options.push(<Delimiter 
                            className={delimiterClass}
                            innerComponent={key.keys().next().value as JSX.Element}/>);
                    break;
                }
            }
        });
        return options;
    }
    return(
        <div className={dropdownClass} style={dropdownStyle}>      
            {
             init()
            }
        </div>
    );
}
function СontextMenu(props:contextMenuProps){
    return(<Clickbox parentHookState={props.parentHook} dropdownElement={<Dropdown parentHookState={props.parentHook} entries={props.entries}/>}/>);
}
export default СontextMenu;