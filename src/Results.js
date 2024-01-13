import React from "react";

export default function Results(props) {
  console.log(props.results);
  if (Array.isArray(props.results) && props.results.length > 0) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
      </div>
    );
  } else {
    return null;
  }
}
