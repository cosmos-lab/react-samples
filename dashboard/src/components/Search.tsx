import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

export default function Search({ style }: any) {
  return (
    <Box
      sx={{
        p: 4,
        bgcolor: "#E1DCFF",
        borderRadius: "10px",
        display: "flex",
        alignItems: "stretch",
        ...style,
      }}
    >
      <Box
        sx={{
          bgcolor: "#fff",
          px: 2,
          mr: 2,
          display: "flex",
          alignItems: "center",
          borderRadius: "5px",
        }}
      >
        <SearchIcon fontSize="large" sx={{
            color:'#999'
        }}/>
      </Box>

      <input
        type="text"
        style={{
          border: "none",
          padding:"20px 30px",
          flexGrow:1,
          borderRadius:"5px"
        }}
        placeholder="Spam Mail Project"
      />
    </Box>
  );
}
