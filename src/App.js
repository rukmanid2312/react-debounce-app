import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [pincode, setPincode] = useState("");

  useEffect(() => {
    const getData = setTimeout(() => {
      axios
        .get(`https://api.postalpincode.in/pincode/${pincode}`)
        .then((response) => {
          console.log(response.data[0]);
        });
    }, 2000);

    return () => clearTimeout(getData);
  }, [pincode]);
  return (
    <div className="App">
      <input
        type="text"
        name="pincode"
        onChange={(event) => {
          setPincode(event.target.value);
        }}
      />
    </div>
  );
}

export default App;
