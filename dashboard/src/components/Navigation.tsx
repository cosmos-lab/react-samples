import Box from "@mui/material/Box";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AdbIcon from "@mui/icons-material/Adb";
import { Typography } from "@mui/material";

const linkStyle = {
  color: "#282857",
  display: "flex",
  alignItems: "center",
  borderRadius: "5px",
  py: 2,
  px: 2,
};

const linkStyleSelected = {
  bgcolor: "#ffffff",
};

const iconStyle = {
  color: "#999",
};

export default function Navigation({ style }: any) {
  return (
    <Box
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        width: 1 / 4,
        bgcolor: "#E1DCFF",
        borderRadius: "10px",
        color: "white",
        ...style,
      }}
    >
      <Box sx={linkStyle}>
        <AdbIcon sx={{ mr: 1, ...iconStyle }} />
        <Typography noWrap sx={{ flexGrow: 1, mr: 3 }}>
          Experiments
        </Typography>
        <ChevronRightIcon sx={iconStyle} />
      </Box>
      <Box sx={linkStyle}>
        <AdbIcon sx={{ mr: 1, ...iconStyle }} />
        <Typography noWrap sx={{ flexGrow: 1, mr: 3 }}>
          Data
        </Typography>
        <ChevronRightIcon sx={iconStyle} />
      </Box>
      <Box sx={{ ...linkStyle, ...linkStyleSelected }}>
        <AdbIcon sx={{ mr: 1, ...iconStyle }} />
        <Typography noWrap sx={{ flexGrow: 1, mr: 3 }}>
          Data Sources
        </Typography>
        <ChevronRightIcon sx={iconStyle} />
      </Box>
      <Box sx={linkStyle}>
        <AdbIcon sx={{ mr: 1, ...iconStyle }} />
        <Typography noWrap sx={{ flexGrow: 1, mr: 3 }}>
          Model Factory
        </Typography>
        <ChevronRightIcon sx={iconStyle} />
      </Box>
      <Box sx={linkStyle}>
        <AdbIcon sx={{ mr: 1, ...iconStyle }} />
        <Typography noWrap sx={{ flexGrow: 1, mr: 3 }}>
          Model Tuning
        </Typography>
        <ChevronRightIcon sx={iconStyle} />
      </Box>
    </Box>
  );
}
