import React, { FC, useState } from "react";
import Button from "react-bootstrap/Button";
import "./DecideReel.css";
import { Link, useNavigate } from "react-router-dom";

const DecideReel: FC = () => {
  const [reelName, setReelName] = useState("");
  const [selectDefinition, setSelectDefiniton] = useState<String>();
  const [selectStandard, setSelectStandard] = useState<String>();

  // This function will be triggered when a radio button is selected
  const definitionHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectDefiniton(event.target.value);
  };

  const standardHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectStandard(event.target.value);
  };

  const nameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReelName(event.target.value);
  };

  const nav = useNavigate();
  const handleSelectClips = () => {
    nav("/select-clips");
  };

  return (
    <div className="container">
      <div className="name-container">
        Name:
        <input
          type="text"
          name="name"
          onChange={nameHandler}
          value={reelName}
        />
      </div>

      <div className="radio-container">
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

      <div className="button">
        <Link
          to="/select-clips"
          state={{
            reelName: reelName,
            selectDefinition: selectDefinition,
            selectStandard: selectStandard,
          }}
        >
          <Button
            onClick={handleSelectClips}
            disabled={(reelName && selectDefinition && selectStandard) ? false : true }
          >
            Select Clips
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DecideReel;
