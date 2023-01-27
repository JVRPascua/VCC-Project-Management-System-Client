import React, {useEffect} from "react";
import { Pagination, PaginationItem } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getProjects } from "../actions/projects";

import useStyles from "./styles";

const Paginate = ({page}) => {
    const { numberOfPages } = useSelector((state) => state.projects)
    const classes = useStyles();
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(page) dispatch(getProjects(page));
    }, [dispatch, page]);

    return (
        <Pagination 
            classes={{ ul: classes.ul }}
            count={numberOfPages}
            page={Number(page) || 1}
            variant="outline"
            color="primary"
            renderItem={(item) => (
                <PaginationItem {...item} component={Link} to={`/projects?page=${item.page}`} />
            )}
        />
    )
}

export default Paginate;