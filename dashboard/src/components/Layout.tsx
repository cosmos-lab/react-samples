import Box from "@mui/material/Box";
import Card from "./Card";
import Content from "./Content";
import Navigation from "./Navigation";
import Search from "./Search";

export default function Layout() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Search style={{ flexGrow: 1, m: 2 }} />
        <Card style={{ flexGrow: 1, m: 2 }} />
      </Box>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Navigation style={{ m: 2}} />
        <Content style={{ m: 2 }} />
      </Box>
    </Box>
  );
}
