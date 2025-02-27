import React from "react";
import { Button, Switch } from "antd";

function Panel({
  handleStartOver,
  handleChangeLetter,
  handleChangeLetterCase,
  handleLetterVariation,
  handleFontNameDisplay,
}) {
  return (
    <section>
      <Button onClick={handleStartOver}>Start Again</Button>
      <Button onClick={handleChangeLetter}>Change Letter</Button>
      <Button onClick={handleChangeLetterCase}>Upper/Lower Case</Button>
      <div className="switches">
        <label htmlFor="switchLetter">Show same letter for each card</label>
        <Switch onChange={handleLetterVariation} id="switchLetter" />
        <label htmlFor="switchFontName">Show Font Name</label>
        <Switch onChange={handleFontNameDisplay} id="switchFontName" />
      </div>
    </section>
  );
}

export default Panel;
