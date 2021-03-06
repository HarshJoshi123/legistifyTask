import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useDispatch } from 'react-redux'
import Chip from '@mui/material/Chip'
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid'
import Modal from './modal.js'
import React, { useState } from 'react';
import Button from '@mui/material/Button'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
const Component = ({ data }) => {
    const [open, setOpen] = useState(false)
    const [av, setAv] = useState(null);
    const dispatch = useDispatch()
    const handleBook = (data) => {
        setOpen(false);
        setAv(null);
        dispatch({
            type: 'BOOK_SLOT', data: {
                id: data.id,
                time: av
            }
        })
    }
    const handleClose = () => {
        setAv(null)
        setOpen(false)
    }
    return (
        <Card variant="outlined" >
            <CardContent>
                <Grid container>
                    <Grid item className="Laywer name cost speciality" xs={2}>
                        <h3>{data.name}</h3>
                        <h4 style={{display:'flex'}}> {data.cost} <CurrencyRupeeIcon/> </h4>
                        <p> Specialises in :</p>
                        <p> {data.speciality.map((spec, i) => <Chip label={spec} variant="contained" />)} </p>
                    </Grid>
                    <Grid xs={9} item justify="flex-start" direction="column">
                        <div style={{ textAlign: 'left', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '100%' }}>
                           <div>
                            {data.availablity.map((avail) => (
                                <Tooltip title={`Book ${avail}`} >
                                    <Chip label={avail} color="primary" style={{ margin: '10px' }} onClick={() => { setAv(avail); setOpen(true); }} />
                                </Tooltip>
                            ))}
                            {data.booked && data.booked.map((avail) => (
                                <Chip label={avail} style={{ margin: '10px' }} />
                            ))}
                         {data.availablity.length < 1 && (<div style={{display:'flex',justifyContent:'center'}}>No Slots Available</div>)}    
                        </div>
                        </div>
                        
                    </Grid>
                    <Grid xs={1}>
                        <Button disabled={data.availablity.length < 1} onClick={() => setOpen(true)}>Book Slot</Button>
                    </Grid>
                </Grid>
            </CardContent>
            <Modal setAv={setAv} av={data.availablity} open={open} handleClose={handleClose} data={data} time={av} handleBook={handleBook} />
        </Card>
    )
}
export default Component;