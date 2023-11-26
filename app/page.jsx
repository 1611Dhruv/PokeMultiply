"use client";
import Slider from "@mui/material/Slider";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function Home() {
  const [tableUpto, setTableUpto] = useState(6);
  const [upto, setUpto] = useState(10);

  const [pikachu, setPikachu] = useState("happy");

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const inpRef = useRef(null);
  const handleCheck = () => {
    const val = parseInt(inpRef.current.value);
    if (isNaN(val)) {
      setPikachu("mad");
      alert("Please enter a valid number");
      return;
    }
    if (x * y === val) {
      alert("Correct answer");
      setPikachu("happy");
      setX(Math.floor(Math.random() * tableUpto) + 1);
      setY(Math.floor(Math.random() * upto) + 1);
      inpRef.current.value = "";
    } else {
      setPikachu("sad");
      alert("Incorrect answer");
    }
  };

  useEffect(() => {
    setX(Math.floor(Math.random() * tableUpto) + 1);
    setY(Math.floor(Math.random() * upto) + 1);
  }, []);

  return (
    <main className=" grid grid-cols-2 grid-rows-2 w-full h-full">
      <div className="rounded-md m-6 flex justify-center items-center">
        <div className=" bg-slate-100 p-6 justify-evenly items-center rounded-md flex flex-col">
          <div>
            <div className=" flex flex-row gap-2">
              <div className="flex flex-row bg-white rounded-lg">
                <div className="flex bg-white h-10 w-10 rounded text-center items-center justify-center">
                  {x}
                </div>
                <div className="flex bg-white h-10 w-10 rounded text-center items-center justify-center">
                  X
                </div>
                <div className="flex bg-white h-10 w-10 rounded text-center items-center justify-center">
                  {y}
                </div>
              </div>
              <div className="flex bg-white h-10 w-10 rounded text-center items-center justify-center">
                =
              </div>
              <input
                ref={inpRef}
                className="input input-bordered w-16 h-10"
                type="text"
                placeholder="?"
                onSubmit={handleCheck}
              ></input>
            </div>
          </div>
          <div className="flex flex-row mt-4 justify-evenly items-center">
            <button className="btn btn-success" onClick={handleCheck}>
              Check
            </button>
            <button
              className="btn btn-info ml-2"
              onClick={() => {
                inpRef.current.value = x * y + "";
              }}
            >
              Show Answer
            </button>
            <button
              className="btn btn-warning ml-2"
              onClick={() => {
                let s = "Think about " + x + " * ";
                let t = 0;
                if (y <= 2) {
                  t = 0;
                } else if (y <= 7) {
                  t = 5;
                } else if (y <= 12) {
                  t = 10;
                } else if (y <= 17) {
                  t = 15;
                } else {
                  t = 20;
                }
                s += t;
                let rem = x * y - x * t;
                if (rem < 0) {
                  while (rem != 0) {
                    rem += x;
                    s += " - " + x;
                  }
                } else if (rem > 0) {
                  while (rem != 0) {
                    rem -= x;
                    s += " + " + x;
                  }
                }
                setPikachu("hint");
                alert(s);
              }}
            >
              Hint
            </button>
            <button
              className="btn btn-error ml-2"
              onClick={() => {
                setPikachu("mad");
                setX(Math.floor(Math.random() * tableUpto) + 1);
                setY(Math.floor(Math.random() * upto) + 1);
                inpRef.current.value = "";
              }}
            >
              New Question
            </button>
          </div>
        </div>
      </div>
      <div className="rounded-md m-6 flex justify-center items-center">
        <div className=" bg-slate-100 p-8 rounded-md w-60">
          <h2>Maximum Table of {tableUpto}</h2>
          <Slider
            aria-label="Maximum Table limit"
            defaultValue={30}
            valueLabelDisplay="auto"
            step={1}
            marks
            onChange={(e, v) => {
              setTableUpto(v);
            }}
            min={1}
            max={20}
          />
          <h2>Largest value to ask {upto}</h2>
          <Slider
            aria-label="Maximum Table limit"
            defaultValue={30}
            valueLabelDisplay="auto"
            step={1}
            marks
            onChange={(e, v) => {
              setUpto(v);
            }}
            min={1}
            max={20}
          />
        </div>
      </div>
      <div className=" rounded-md m-6 flex items-center justify-center">
        <Image src={`/${pikachu}.png`} width={300} height={300}></Image>
      </div>
      <div className="rounded-md m-6"> </div>
    </main>
  );
}
