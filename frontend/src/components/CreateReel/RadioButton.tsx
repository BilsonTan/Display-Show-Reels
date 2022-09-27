import React, { useState } from "react";
import "./RadioButton.css";

const RadioButton = () => {
  // The selected drink
  const [selectDefinition, setSelectDefiniton] = useState<String>();
  const [selectStandard, setSelectStandard] = useState<String>();

  // This function will be triggered when a radio button is selected
  const definitionHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectDefiniton(event.target.value);
  };

  const standardHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectStandard(event.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="def-container">
          <fieldset>
            <legend>Please select definition?</legend>
            <p>
              <input
                type="radio"
                name="standard"
                value="PAL"
                id="pal"
                onChange={standardHandler}
              />
              <label htmlFor="pal">PAL</label>
            </p>

            <p>
              <input
                type="radio"
                name="standard"
                value="NTSC"
                id="ntsc"
                onChange={standardHandler}
              />
              <label htmlFor="ntsc">NTSC</label>
            </p>
          </fieldset>

          {selectStandard && <p>Standard selected: {selectStandard}</p>}
        </div>
        <div className="standard-container">
          <fieldset>
            <legend>Please select definition?</legend>
            <p>
              <input
                type="radio"
                name="definition"
                value="HD"
                id="hd"
                onChange={definitionHandler}
              />
              <label htmlFor="hd">HD</label>
            </p>

            <p>
              <input
                type="radio"
                name="definition"
                value="SD"
                id="sd"
                onChange={definitionHandler}
              />
              <label htmlFor="sd">SD</label>
            </p>
          </fieldset>

          {selectDefinition && <p>Definition selected: {selectDefinition}</p>}
        </div>
      </div>
    </>
  );
};

export default RadioButton;
