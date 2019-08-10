import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from "prop-types"
import List from "./List";
import { getItemsData, updateItemsData } from "../actions"
import { connect } from "react-redux";
import Spinner from "./Spinner";

const Dashboard = ({ getItemsData, updateItemsData, groupId, userId, items: { itemsList, loading } }) => {

    useEffect(() => {
        if (groupId && userId) {
            getItemsData(groupId, userId);
        }
    }, [groupId, userId ,getItemsData]);

    const [itemsUpdated, setItemsUpdated] = useState(false);

    if (itemsUpdated) {
        updateItemsData(groupId, userId, itemsList);
        setItemsUpdated(false);
    }

    return (
        <Fragment>
            <h1>Should I ... ?</h1>
            {
                !loading && !itemsUpdated ? (<div className="list-container">
                    <List placeholder="Add new Pro item" title="Pro's" updateItems={() => setItemsUpdated(true)} items={itemsList.pros} type="pros" />
                    <List placeholder="Add new Con item" title="Con's" updateItems={() => setItemsUpdated(true)} items={itemsList.cons} type="cons" />
                </div>) :
                    <Spinner />
            }
        </Fragment>
    );
};

Dashboard.propTypes = {
    getItemsData: PropTypes.func.isRequired,
    groupId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    items: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    groupId: state.groupId,
    userId: state.userId,
    items: state.items,
})

export default connect(mapStateToProps, { getItemsData, updateItemsData })(Dashboard);
