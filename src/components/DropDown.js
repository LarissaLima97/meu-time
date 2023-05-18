import React from "react";
import { Select, InputLabel,FormControl } from "@mui/material";

export default function DropDown ({children,label}) {
    return(
        <FormControl>
            <InputLabel>{label}</InputLabel>
            <Select
            sx={{ width: 300 }}
            label={label}
            >
                {children}
            </Select>
        </FormControl>
    );
}
