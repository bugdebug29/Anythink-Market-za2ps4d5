import React from "react";
import agent from "../../agent";
import logo from "../../imgs/logo.png";

const SearchInput = (props) => {

  const inputHandler = (ev) => {
    const len = ev.target.value.length;
    const title = len > 2 ? ev.target.value : "";

    console.log("\nev.target.value:", ev.target.value, "\nlen:", len, "\ntitle:", title);
    // const newItemsPromise = agent.Items.all;
    const newItemsPromise = agent.Items.byTitle(title);
    props.onUpdateItems(newItemsPromise);
    props.onUpdateSearchTitle(title);

  };

  return (
    <>
      <input id="search-box" type="text" placeholder="Search" onInput={inputHandler} />
    </>
  );
};

const Banner = (props) => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span>A place to </span>
          <span id="get-part">get</span>
          <SearchInput onUpdateItems={props.onUpdateItems} onUpdateSearchTitle={props.onUpdateSearchTitle} />
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
