import React from "react";
import { useState } from "react";
import "./index.css";
import Header from "./Header";
export default function Calculator() {
  const [result, setResult] = useState(0);
  const [val_1, setVal_1] = useState(0);
  const [val_2, setVal_2] = useState(0);
  function reset() {
    setVal_1(0);
    setVal_2(0);
    setResult(0);
  }
  return (
    <>
    <Header/>
      <div className="flex flex-col justify-center items-center shadow-md shadow-gray-500 rounded-md w-[480px] p-8">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div>
            <label className="flex flex-col" htmlFor="num1" id="num2">
              VALUE 1:
            </label>
            <input
              className="border-2 border-salmon-500 py-2 px-2 rounded-md"
              onChange={(e) => {
                setVal_1(e.target.value);
              }}
              value={val_1}
              type="number"
              required
            />
          </div>
          <div>
            <label className="flex flex-col" htmlFor="num2" id="num2">
              VALUE 2:
            </label>
            <input
              className="border-2 border-salmon-500 py-2 px-2 rounded-md"
              onChange={(e) => {
                setVal_2(e.target.value);
              }}
              value={val_2}
              type="number"
              required
            />
          </div>
          <div className="gap-5 flex justify-center item-center mt-10">
            <button
              onClick={() => {
                setResult(Number(val_1) + Number(val_2));
                // setVal_1(0);
                // setVal_2(0);
              }}
              className="bg-black text-white p-3 rounded font-bold"
              type="submit"
            >
              +
            </button>
            <button
              onClick={() => {
                setResult(Number(val_1) - Number(val_2));
                // setVal_1(0);
                // setVal_2(0);
              }}
              className="bg-black text-white p-3 rounded font-bold"
              type="submit"
            >
              -
            </button>
            <button
              onClick={() => {
                setResult(Number(val_1) * Number(val_2));
                // setVal_1(0);
                // setVal_2(0);
              }}
              className="bg-black text-white p-3 rounded font-bold"
              type="submit"
            >
              *
            </button>
            <button
              onClick={() => {
                setResult(Number(val_1) / Number(val_2));
                // setVal_1(0);
                // setVal_2(0);
              }}
              className="bg-black text-white p-3 rounded font-bold"
              type="submit"
            >
              /
            </button>
            <button
              type="reset"
              className="bg-black text-white p-3 rounded font-bold"
              onClick={reset}
            >
              Clear
            </button>
          </div>
        </form>
        <div className="flex justify-center item-center mt-10">
          <h1 className="bg-black text-white p-3 rounded font-bold">
            {" "}
            Result = {result}
          </h1>
        </div>
      </div>
    </>
  );
}