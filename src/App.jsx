import "./App.css";
import { Search } from "./components/Search";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
import { useState } from "react";

const override = css`
  display: block;
  margin: 15% auto;
`;

function App() {
  let [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  return (
    <div className="sweet-loading">
      {loading ? (
        <HashLoader color={"red"} loading={loading} css={override} size={150} />
      ) : (
        <Search />
      )}
    </div>
  );
}

export default App;
