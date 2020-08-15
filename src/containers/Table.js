import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import rows from '../components/Rows';
import { StyledTableCell, StyledTableRow } from '../components/Style';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}

function buy(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

function cote(items) {
    return items.map(({ newPrice }) => newPrice).reduce((sum, i) => sum + i, 0);
}

const invoiceBuy = buy(rows);
const invoiceCote = cote(rows);
const invoiceTotal = invoiceCote - invoiceBuy;


const SimpleTable = () => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell>Universe</StyledTableCell>
                        <StyledTableCell align="left">Name</StyledTableCell>
                        <StyledTableCell align="left">Edition</StyledTableCell>
                        <StyledTableCell align="center">Type</StyledTableCell>
                        <StyledTableCell align="center">Number</StyledTableCell>
                        <StyledTableCell align="center">Buy</StyledTableCell>
                        <StyledTableCell align="right">Price</StyledTableCell>
                        <StyledTableCell align="right">New Price</StyledTableCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.universe}>
                            <StyledTableCell component="th" scope="row">
                                {row.universe}
                            </StyledTableCell>
                            <StyledTableCell align="left">{row.name}</StyledTableCell>
                            <StyledTableCell align="left">{row.edition}</StyledTableCell>
                            <StyledTableCell align="center">{row.type}</StyledTableCell>
                            <StyledTableCell align="center">{row.number}</StyledTableCell>
                            <StyledTableCell align="center">{row.buy}</StyledTableCell>
                            <StyledTableCell align="right">{row.price}</StyledTableCell>
                            <StyledTableCell align="right">{row.newPrice}</StyledTableCell>
                        </StyledTableRow>
                    ))}

                    <StyledTableRow>
                        <StyledTableCell rowSpan={3} />
                        <StyledTableCell colSpan={5}>Buy</StyledTableCell>
                        <StyledTableCell align="right">{ccyFormat(invoiceBuy)}</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                        <StyledTableCell colSpan={6}>Cote</StyledTableCell>
                        <StyledTableCell align="right">{ccyFormat(invoiceCote)}</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                        <StyledTableCell colSpan={6}>Total</StyledTableCell>
                        <StyledTableCell align="right">{ccyFormat(invoiceTotal)}</StyledTableCell>
                    </StyledTableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default SimpleTable;