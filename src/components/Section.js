import React from "react";
import Box from '@mui/material/Box';

export default function BoxComponent({children, width}) {
    return (
      <Box component="section" 
        sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            position: "sticky",
            top: "40%",
            marginLeft: "auto",
            marginRight: "auto",
            width:`${width}`,
            height:"auto",
            borderRadius:"10px",
            paddingBottom:"20px",
            paddingLeft:"20px",
            paddingRight:"20px",
            backgroundColor:"#FFFAFA",
        }}
      >
        {children}
      </Box>
    );
  }



// const Section = ({children}) => {
//     return (
//         <section style={{backgroundColor:"white", display:"flex", alignItems: "center", width:"100px"}}>{children}</section>
//     );
// }

// export default Section;