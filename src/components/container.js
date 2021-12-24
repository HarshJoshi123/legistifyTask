import React from 'react'
import Component from './card.js'
import Grid from '@mui/material/Grid'
import { useSelector } from 'react-redux'
const Container = () => {
    const s = useSelector(state=>state)
    console.log(s)
    const data = useSelector(state=>state.availability.data);
    data.sort((i1,i2)=>i1.id > i2.id)
    console.log(data)
    return (
        <Grid container direction="column" >
            { data.sort((i1,i2)=>i1.id > i2.id).map((lawyer, i) => {
                return (
                    <Component data={lawyer} />
                )

        }) }
    
        </Grid>

    )
}
export default Container