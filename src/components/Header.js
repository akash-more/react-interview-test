import { Box, Link } from "@mui/material";
import { useAppContext } from "./AppContext";

const Header = ({ username }) => {
  return (
    <Box
      sx={{
        typography: "body1",
        "& > :not(style) + :not(style)": {
          ml: 2,
        },
      }}
      style={{ textAlign: "center" }}
    >
      <Link href="/People">People</Link>
      <Link href="/Starships">
        <strong>Starships</strong>
      </Link>
      <span>
        <em>{username}</em>
      </span>
    </Box>
  );
};

export default Header;
