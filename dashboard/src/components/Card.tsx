import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Card({ style }: any) {
  return (
    <Box
      sx={{
        p: 2,
        bgcolor: "#FFF4EA",
        display: "flex",
        borderRadius: "10px",
        justifyContent: "space-between",
        ...style,
      }}
    >
      <Box
        sx={{
          mr: 2,
        }}
      >
        <Typography variant="h6" component="h2" sx={{fontWeight:'bold'}}>
          Spam Mail Project
        </Typography>
      </Box>
      <Box>
        <Box>Author Name: Nagarajan More</Box>
        <Box>Author Name: Nagarajan More</Box>
        <Box>Author Name: Nagarajan More</Box>
      </Box>
    </Box>
  );
}
