import React from 'react'
import * as s from './MiddleCard.styles';
import { Grid } from "@material-ui/core";
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function MiddleCard() {

    const mcItem = [

        {
            title: 'Asset Balance',
            sub: 'Enter Amount',
            display: 'Rs 1,25,000'
        },
        {
            title: 'Financial Independence',
            sub: 'Age',
            display: '45 years'
        },
        {
            title: 'Growth Rate',
            sub: 'Enter Growth Rate',
            display: '9.3%'
        },
        {
            title: 'Average Expenses',
            sub: 'Amount',
            display: 'Rs 25,000'
        },
        {
            title: 'Major Investments',
            sub: 'Return generated per month',
            display: 'Rs 1,25,000'
        }
    ]

    return (
        <s.MiddleCard>
            <Grid container>

                {mcItem.map((data1) => (
        
                <Grid item xs = {12} sm = {12} md = {6} lg = {4}>
                    <s.item>

                        <s.itemHeader>
                            <h3>{data1.title}</h3>
                            <MoreHorizOutlinedIcon />
                        </s.itemHeader>

                        <p>{data1.sub}:</p>

                        <s.spann>
                            <s.text>{data1.display}</s.text>
                            <AddCircleOutlineIcon />
                        </s.spann>
                    </s.item>
                </Grid>

                ))}
            </Grid>
        </s.MiddleCard>
    )
}

export default MiddleCard
