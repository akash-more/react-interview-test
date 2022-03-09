import React from "react"
import {
  Paper,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  TextField,
  Grid,
  Box,
  Link,
  Pagination,
} from "@mui/material"
import people from "./data/people.json"
import starships from "./data/starships.json"
import './App.css'

const Header = () => {
  return (
    <Box
      sx={{
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
      }}
      style={{ textAlign: "center" }}
    >
      <Link href="/">Home</Link>
      <Link href="/People">People</Link>
      <Link href="/Planets">Planets</Link>
      <Link href="/Starships">Starships</Link>
      <span><em>username</em></span>
    </Box>
  )
}

const Login = () => {
  return (
    <Grid container>
      <Grid item xs />
      <Grid item xs={6}>
        <div style={{ textAlign: "center" }}>
          <TextField id="standard-basic" label="First Name" variant="standard" />
        </div>
        <div style={{ textAlign: "center" }}>
          <TextField id="standard-basic" label="Surname" variant="standard" />
        </div>
        <div style={{ textAlign: "center" }}>
          <Button type="submit">Enter Site</Button>
        </div>
      </Grid>
      <Grid item xs />
    </Grid>
  )
}

const Search = () => {
  return (
    <div>
      <TextField id="" label="Search" size="small" />
      <Button>Search</Button>
    </div>
  )
}

const Starships = () => {
  return (
    <div style={{ margin: "0 0.5em"}}>
      <Typography variant="h5" sx={{ marginBottom: "10px" }}>Starships</Typography>
      <Search />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400 }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Model</TableCell>
              <TableCell>Manufacture</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {starships.results.map((item: any, index: number) => (
              <TableRow key={index}>
                <TableCell align="left">{item.name}</TableCell>
                <TableCell align="left">{item.model}</TableCell>
                <TableCell align="left">{item.manufacturer}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination count={10} />
    </div>
  )
}

const People = () => {
  return (
    <div style={{ margin: "0 0.5em"}}>
      <Typography variant="h5" sx={{ marginBottom: "10px" }}>People</Typography>
      <Search />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400 }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Birth Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {people.results.map((item: any, index: number) => (
              <TableRow key={index}>
                <TableCell align="left">{item.name}</TableCell>
                <TableCell align="left">{item.gender}</TableCell>
                <TableCell align="left">{item.birth_year}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination count={10} />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Starships />
      <People />
    </div>
  );
}

export default App;
