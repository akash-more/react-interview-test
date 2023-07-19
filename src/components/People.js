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
import Search from "./Search";
// import people from "../data/people.json";
import Header from "./Header";
import { fetchPeopleData } from "../api/api";
import { useEffect, useState } from "react";
import { useAppContext } from "./AppContext";
const People = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { username } = useAppContext();
  const fetchPeople = async (searchText) => {
    try {
      const data = await fetchPeopleData(searchText);
      setPeople(data.results);
      setLoading(false);
    } catch (error) {
      setError("Error fetching people data.");
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPeople("");
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
          People
        </Typography>
        <Search fetchData={fetchPeople} />
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
              {people.map((item, index) => (
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
    </>
  );
};
export default People;
