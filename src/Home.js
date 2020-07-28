import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import rows from './Data'

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
                    <TableRow>
                        <TableCell>Univers</TableCell>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">Edition</TableCell>
                        <TableCell align="center">Type</TableCell>
                        <TableCell align="center">Number</TableCell>
                        <TableCell align="center">Buy</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">New Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.univers}>
                            <TableCell component="th" scope="row">
                                {row.univers}
                            </TableCell>
                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="left">{row.edition}</TableCell>
                            <TableCell align="center">{row.type}</TableCell>
                            <TableCell align="center">{row.number}</TableCell>
                            <TableCell align="center">{row.buy}</TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                            <TableCell align="right">{row.newPrice}</TableCell>
                        </TableRow>
                    ))}

                    <TableRow>
                        <TableCell rowSpan={3} />
                        <TableCell colSpan={5}>Buy</TableCell>
                        <TableCell align="right">{ccyFormat(invoiceBuy)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={6}>Cote</TableCell>
                        <TableCell align="right">{ccyFormat(invoiceCote)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={6}>Total</TableCell>
                        <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default SimpleTable;