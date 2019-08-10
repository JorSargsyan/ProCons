import React, { useState} from 'react'
import ListItem from "./ListItem";
import { addItem, removeItem } from "../actions";
import PropTypes from "prop-types"
import { connect } from 'react-redux';

function List({ title, type, items, addItem,removeItem, updateItems ,placeholder }) {

    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text) {
            addItem(text, type);
            setText("");
            updateItems();
        }
    }

    const handleRemove = (e,text,type) => {
        removeItem(text, type);
        updateItems();
    }
    return (
        <div className="list">
            <div className="title-area">
                <h3>{title}</h3>
            </div>
            <div className="list-inner">
                {
                    items && items.map((item, index) => {
                        return (<ListItem handleRemove={(e,text,type) => handleRemove(e,text,type)} key={index + item} text={item} type={type} />)
                    })
                }
            </div>
            <div className="add-item-area">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input placeholder={placeholder} type="text" value={text} onChange={(e) => setText(e.target.value)} />
                    <button type="submit" className="button add-button"><i className="fa fa-plus"></i></button>
                </form>
            </div>
        </div>
    );
}

List.propTypes = {
    addItem: PropTypes.func.isRequired,
}


export default connect(null, { addItem ,removeItem })(List);

