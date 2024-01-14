import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            {definition}
            <br />
            <em>{definition.example}</em>
            <p>{props.meaning.example}</p>
            <p>{props.meaning.definition}</p>
          </div>
        );
      })}
    </div>
  );
}
