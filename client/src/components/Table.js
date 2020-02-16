import React, { useEffect } from 'react';
import styled,  { css } from 'styled-components';
import { tableActions } from '../table/actions';
import { connect } from 'react-redux';
import { store } from '../_helpers/store';

const StyledTable = styled.div`
    border-spacing: 0;
    border-collapse: collapse;
`;

const Row = styled.div`
    ${props => (props.type === 'header') && css`
        color: blue;
    `}

    display: flex;
    flex-direction: row;
`;

const TableCell = styled.span`
    border: 1px solid black;
    padding: 0.25em;
    min-width: 100px;
`;

const Table = (props) => {
    const { data } = props;

    useEffect(() => {
        store.dispatch(tableActions.getInitialTable());
    }, []); // don't put 'data' here without an "exit condition"--infinite recall loop.

    return (
        <StyledTable>
            <Row key={'header'} type={'header'}>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Date Created</TableCell>
                <TableCell>Actions</TableCell>
            </Row>
            {(data && data.length !== 0) ? data.map(item => {
                return (
                    <Row key={item.id}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>Active</TableCell>
                        <TableCell>02 / 15 / 2020</TableCell>
                        <TableCell>+ | x | E </TableCell>
                    </Row>
                );
            }) : 'No items to display.'}
        </StyledTable>
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