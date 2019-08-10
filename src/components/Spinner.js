import React,{Fragment} from 'react'
import spinner from "../img/spinner.gif"

function Spinner(props) {
    return (
        <Fragment>
            <img alt="Here can be your Add" style={{width:70,margin:"auto",display:"block",position: "absolute",top: "calc(50vh - 35px)",left: "calc(50vw - 35px)",background:"transparent"}} src={spinner}></img>
        </Fragment>
    )
}


export default Spinner


