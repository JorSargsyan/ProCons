import React,{Fragment} from 'react'
import PropTypes from "prop-types"
 
function ListItem({text,handleRemove,type}) {
    return (
        <Fragment>
            <div className="list-item">
                <p className="text">{text}</p>
                <button onClick={(e)=>handleRemove(e,text,type)} className="button remove-button"><i className="fa fa-trash"></i></button>
            </div>
        </Fragment>
    )
}

ListItem.propTypes = {
    text: PropTypes.string.isRequired,
    handleRemove : PropTypes.func.isRequired,
}


export default ListItem;


