import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Header = ({ text }) => {
  return (
    <Box className="header">
      <Typography variant="h5" className="gradient_text">
        {text}
      </Typography>
    </Box>
  );
};
export default Header;
