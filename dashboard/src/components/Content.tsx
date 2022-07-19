import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Checkbox, styled } from "@mui/material";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const headerCellStyle = {
  fontWeight: "bold",
  
  padding: "10px 10px",
  border: 0,
};

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const StyledTableCell = styled(TableCell)({
  padding: "5px 10px",
});
export default function Content({ style }: any) {
  return (
    <TableContainer
      component={Paper}
      sx={{
        ...style,
        boxShadow: "none",
        borderRadius: "5px",
        bgcolor: "#FFF4EA",
      }}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={headerCellStyle}></StyledTableCell>
            <StyledTableCell sx={headerCellStyle} width="100%">
              Dessert (100g serving)
            </StyledTableCell>
            <StyledTableCell sx={headerCellStyle} align="right">
              Calories
            </StyledTableCell>
            <StyledTableCell sx={headerCellStyle} align="right">
              Fat&nbsp;(g)
            </StyledTableCell>
            <StyledTableCell sx={headerCellStyle} align="right">
              Carbs&nbsp;(g)
            </StyledTableCell>
            <StyledTableCell sx={headerCellStyle} align="right">
              Protein&nbsp;(g)
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{bgcolor: "#ffffff",}}>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <StyledTableCell>
                <Checkbox />
              </StyledTableCell>
              <StyledTableCell component="th" sx={{fontWeight: "bold"}}>
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
