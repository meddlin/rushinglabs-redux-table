import React, { useEffect } from 'react';
import styled from 'styled-components';
import { tableActions } from '../table/actions';
import { connect } from 'react-redux';
import { store } from '../_helpers/store';

const Row = styled.div`
    margin: 1em;
    span {
        margin: 0.25em;
    }
`;

const Table = (props) => {
    const { data } = props;

    useEffect(() => {
        store.dispatch(tableActions.getInitialTable());
    }, []); // don't put 'data' here without an "exit condition"--infinite recall loop.

    return (
        <div>
            {(data && data.length !== 0) ? data.map(item => {
                return (
                    <Row key={item.id}>
                        <span>id: {item.id}</span>
                        <span>{item.name}</span>
                    </Row>
                );
            }) : 'No items to display.'}
        </div>
    );
}

function mapStateToProps(state) {
    const { table } = state;
    return {
        loading: (table && table.loading) || false,
        data: (table && table.data) || [],
    };
}

const connectedTable = connect(mapStateToProps)(Table);
export { connectedTable as Table };