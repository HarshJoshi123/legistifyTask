import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Modal({ av, setAv, time, open, handleBook, handleClose, data }) {


    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                fullWidth={true}
                maxWidth={'sm'} // 'sm' || 'md' || 'lg' || 'xl'
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Book slot ?"}</DialogTitle>
                <DialogContent>
                    <div>
                        Name : {data.name}
                    </div>
                    <div>
                        Slot : {time ? time : ''}
                        {!time ? (
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={av}
                                label="Select Slot"
                                onChange={(e) => setAv(e.target.value)}
                            >
                                {av.map((time, i) => (
                                    <MenuItem value={time}>{time}</MenuItem>
                                ))}
                            </Select>

                        ) : ''}
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={() => handleBook(data)}>Agree</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}