import { useState, useEffect } from "react";
import axios from "axios";
import { nanoid } from "nanoid";

function SearchBar({
  input,
  stateInput,
  data,
  stateData,
  clearInput,
  setInputValue,
  clearStateInput,
  setStateInputValue,
}) {
  // const [input, setInput] = useState("");
  // const [stateInput, setStateInput] = useState("");
  // const [data, setData] = useState([]);
  // const [stateData, setStateData] = useState([]);

  // function clearInput() {
  //   setInput("");
  // }
  // function setInputValue(e) {
  //   setInput(e.target.value);
  //   // initially setting stateInput because if user changes the country the previous states of the
  //   // previous country will be shown unless clicked on
  //   setStateInput("");
  //   // the value needs to be sliced because the target value contains the short name and full name
  //   // US - United States of America but what is needed is United States of America for filtering
  //   const filtered = data.filter(
  //     (country) => country.country == e.target.value.slice(5)
  //   );
  //   setStateData(filtered[0].cities);
  // }

  // function clearStateInput() {
  //   setStateInput("");
  // }
  // function setStateInputValue(e) {
  //   setStateInput(e.target.value);
  // }
  // // The useEffect runs only on initial mount of the app, at this point the data is fetched
  // useEffect(() => {
  //   axios
  //     .get("https://countriesnow.space/api/v0.1/countries")
  //     .then((res) => {
  //       setData(res.data.data);
  //       console.log(res.data.data);
  //     })
  //     .catch((error) => console.log(error.message));
  //   return () => {
  //     setData([]);
  //   };
  // }, []);

  return (
    <div className="flex flex-col gap-3 items-center md:justify-center md:flex-row md:gap-10 mt-5">
      <input
        type="text"
        className="border text-sm outline-none h-10 px-2 md:h-9 rounded-full w-3/4 md:w-1/3 bg-primary-bg text-white"
        list="countries"
        value={input}
        placeholder={`Select country`}
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

      {/* The second input is dependent on the first input 'countries' based on the country chosen in the
      first input the second input is filtered accordingly */}
      <input
        type="text"
        className="border text-sm h-10 px-2 md:h-9 rounded-full w-3/4 md:w-1/3 bg-primary-bg text-white"
        list="states"
        value={stateInput}
        placeholder={`Select state`}
        onClick={clearStateInput}
        onChange={setStateInputValue}
      />
      <datalist id="states">
        {stateData.map((state) => (
          <option key={nanoid()}>{state}</option>
        ))}
      </datalist>
    </div>
  );
}

export default SearchBar;
