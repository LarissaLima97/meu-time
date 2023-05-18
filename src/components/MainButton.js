import React from "react";
import { Button } from "@mui/material";

export default function MainButton({children}){
    return (
        <Button variant="contained" sx={{backgroundColor:"#228B22", marginTop:"20px"}}>
            {children}
        </Button>
    );
}