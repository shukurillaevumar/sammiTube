import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Main, Channel, Navbar, VideoDetail, Search } from "../";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/channel/:id" element={<Channel />} />
        <Route path="/video/:id" element={<VideoDetail />}></Route>
        <Route path="/search/:id" element={<Search />}></Route>
      </Routes>
    </Box>
  );
};

export default App;
