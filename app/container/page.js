"use client";
import React, { useState, useEffect } from "react";
import { database } from "../../firebaseConfig";
import { get, ref } from "firebase/database";
import Down from "./DownGraph.svg";
import Image from "next/image";
import Up from "./UpGraph.svg";

const Container = () => {
  const [clicked, setClicked] = useState(false);
  const [clicked1, setClicked1] = useState(false);
  const [list, setList] = useState("Hot");
  const [data, setData] = useState([]);
  const [newData, setnewData] = useState([]);

  const handleClick = () => {
    setClicked(!clicked);
    setClicked1(false);
    setList("Hot");
  };

  const handleClick1 = () => {
    setClicked1(!clicked1);
    setClicked(false);
    setList("New");
  };
  //   let newData = [];
  useEffect(() => {
    const userRef = ref(database, "data");
    get(userRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const userArray = Object.entries(snapshot.val()).map(
            ([id, data]) => ({
              id,
              ...data,
            })
          );
          console.log("DATABASE", userArray[0]["Hot List"]);
          setData(userArray[0]["Hot List"]);
          setnewData(userArray[1]["New List"]);
        }
      })
      .catch((error) => {
        console.log("error coming", error);
      });
  }, []);

  return (
    <div className="w-9/12 m-auto">
      <div className="text-4xl font-semibold w-full m-auto mt-20">
        Catch Your Next Trading Opportunity
      </div>
      <div className="flex flex-row justify-left items-center  w-full m-auto bg-slate-100 h-14 mt-12">
        <div
          className={`flex flex-row justify-left items-center text ${
            clicked ? "text-green-600" : "text-black"
          } ml-16 font-semibold text=sm cursor-pointer`}
          onClick={handleClick}
        >
          HOT LIST
        </div>
        <div
          className={`flex flex-row justify-left items-center text ${
            clicked1 ? "text-green-600" : "text-black"
          } ml-16 font-semibold text=sm cursor-pointer`}
          onClick={handleClick1}
        >
          NEW LIST
        </div>
      </div>
      {list === "Hot" ? (
        <div className="w-full flex flex-col m-auto justify-between">
          <div className="flex flex-row justify-between items-center h-10 mt-3">
            <div className="text-slate-500 font-medium w-1/5">
              Trending Pairs
            </div>
            <div className="text-slate-500 font-medium w-1/5">Last Price</div>
            <div className="text-slate-500 font-medium w-1/5">
              24 hrs change
            </div>
            <div className="text-slate-500 font-medium w-1/6">
              Per/Day Chart
            </div>
            <div className="text-slate-500 font-medium w-1/6 text-center">
              Trade
            </div>
          </div>
          {data.map((price, index) => {
            return (
              <div
                className="flex flex-row justify-between items-center h-10 mt-3"
                index={price.id}
              >
                <div className="flex flex-row items-center font-medium w-1/5">
                  {" "}
                  <span className="mr-2">
                    {" "}
                    <img
                      style={{ height: "30px", width: "30px" }}
                      src={price.Image}
                      alt="/logo"
                    />
                  </span>
                  {price["Trending Pair"]}
                </div>
                <div className="text-left w-1/5 font-medium">
                  {price["Last Price"]}
                </div>
                <div className="text-left w-1/5 font-medium">
                  {price["24 hrs change"]}
                </div>
                <div className="w-1/6">
                  {price["24 hrs change"][0] !== "-" ? (
                    <div>
                      <Image src={Up} alt="graph" />
                    </div>
                  ) : (
                    <div>
                      <Image src={Down} alt="graph" />
                    </div>
                  )}
                </div>
                <div className="w-1/6 items-center text-center">
                  <button className="text-black border-green-500 h-8 font-medium border-2 rounded-3xl w-9/12">
                    Trade
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="w-full flex flex-col m-auto justify-between">
          <div className="flex flex-row justify-between items-center h-10 mt-3">
            <div className="text-slate-500 font-medium w-1/5">
              Trending Pairs
            </div>
            <div className="text-slate-500 font-medium w-1/5">Last Price</div>
            <div className="text-slate-500 font-medium w-1/5">
              24 hrs change
            </div>
            <div className="text-slate-500 font-medium w-1/6">
              Per/Day Chart
            </div>
            <div className="text-slate-500 font-medium w-1/6 text-center">
              Trade
            </div>
          </div>
          {newData.map((price, index) => {
            return (
              <div
                className="flex flex-row justify-between items-center h-10 mt-3"
                index={price.id}
              >
                <div className="flex flex-row items-center font-medium w-1/5">
                  {" "}
                  <span className="mr-2">
                    {" "}
                    <img
                      style={{ height: "30px", width: "30px" }}
                      src={price.Image}
                      alt="/logo"
                    />
                  </span>
                  {price["Trending Pair"]}
                </div>
                <div className="text-left w-1/5 font-medium">
                  {price["Last Price"]}
                </div>
                <div className="text-left w-1/5 font-medium">
                  {price["24 hrs change"]}
                </div>
                <div className="w-1/6">
                  {price["24 hrs change"][0] !== "-" ? (
                    <div>
                      <Image src={Up} alt="graph" />
                    </div>
                  ) : (
                    <div>
                      <Image src={Down} alt="graph" />
                    </div>
                  )}
                </div>
                <div className="w-1/6 items-center text-center">
                  <button className="text-black border-green-500 h-8 font-medium border-2 rounded-3xl w-9/12">
                    Trade
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Container;
