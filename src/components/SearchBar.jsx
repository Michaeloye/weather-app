import { useState, useEffect } from "react";
import axios from "axios";
import { nanoid } from "nanoid";

function SearchBar({ placeholder }) {
  const [input, setInput] = useState();
  const [data, setData] = useState([]);

  function clearInput() {
    setInput("");
  }
  function setInputValue(e) {
    setInput(e.target.value);
  }
  useEffect(() => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries")
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch((error) => console.log(error.message));
    return () => {
      setData([]);
    };
  }, []);

  return (
    <div>
      <input
        type="text"
        className="border-2 h-10 px-2 rounded-lg w-3/4 bg-primary-bg"
        list="countries"
        value={input}
        placeholder={`Select to ${placeholder}`}
        onClick={clearInput}
        onChange={setInputValue}
      />
      <datalist id="countries">
        {data.map((country) => (
          <option key={nanoid()}>
            {country.iso2} - {country.country}
          </option>
        ))}
      </datalist>
    </div>
  );
}

export default SearchBar;
