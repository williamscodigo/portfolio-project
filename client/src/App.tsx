import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:3001/")
      .then((res) => res.text())
      .then((data) => setData(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return <div className="text-3xl font-bold underline">{data ? <h1>{data}</h1> : <p>Loading...</p>}</div>;
}

export default App;
