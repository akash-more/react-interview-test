import {
  Paper,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@mui/material";
import { useEffect, useState } from "react";
import { fetchStarshipsData } from "../api/api";
import { useAppContext } from "./AppContext";
import Header from "./Header";
import Search from "./Search";
const Starships = () => {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { username } = useAppContext();
  const fetchStarships = async (searchText) => {
    try {
      const data = await fetchStarshipsData(searchText);
      setStarships(data.results);
      setLoading(false);
    } catch (error) {
      setError("Error fetching starships data.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStarships("");
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Header username={username} />
      <div style={{ margin: "0 0.5em" }}>
        <Typography variant="h5" sx={{ marginBottom: "10px" }}>
          Starships
        </Typography>
        <Search fetchData={fetchStarships} />
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
              {starships.map((item, index) => (
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
    </>
  );
};

export default Starships;
