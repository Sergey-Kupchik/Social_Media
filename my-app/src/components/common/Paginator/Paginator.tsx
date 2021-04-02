import React, {ChangeEvent, useCallback} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import styles from './Paginator.module.scss';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

type PaginationControlledType ={
    totalCount: number
    pageSize:number
    currentPage:number
    onSetNewCurrentPage: (pageNumber: number) => void
}




export const Paginator =React.memo(function Paginator(props:PaginationControlledType){
    const {totalCount,pageSize,currentPage,onSetNewCurrentPage}=props
    let pagesQuantity = Math.ceil(totalCount / pageSize);
    let pagesArray = [];
    for (let i = 1; i <= pagesQuantity; i++) {
        pagesArray.push(i)
    }

    const classes = useStyles();
    const handleChange = useCallback((event: ChangeEvent<unknown>, page: number) => {
        onSetNewCurrentPage(page)},[totalCount,pageSize,currentPage]);
    return (
        <div className={`${classes.root} ${styles.wrapper}`}>
            <Pagination count={pagesQuantity} page={currentPage} onChange={handleChange} color="primary" />
        </div>
    );
})
