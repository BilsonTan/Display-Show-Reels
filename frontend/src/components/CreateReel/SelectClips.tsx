import { FC, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { ClipTypeObj } from "../../types/ClipTypes";
import { sumTime, diffTime } from "../../utils/data-utils";
import "./SelectClips.css";

const SelectClips: FC = (props) => {

  const location = useLocation();
  const {reelName="", selectDefinition="", selectStandard=""} = location?.state;
  
  const CONSTANT_TIME = "00:00:00:00"
  const [clipList, setClipList] = useState<ClipTypeObj[]>([]);
  const [duration, setDuration] = useState("00:00:00:00");
  const [disableCheck, setDisableCheck] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/select-clips")
      .then((res) => res.json())
      .then((data) => setClipList(data));
  }, []);

  const handleAdd = (time: any, standard:any) => {
    setDuration(sumTime(duration,time,standard))
    setDisableCheck(true);
  };

  const handleDiff = (time: any, standard: any) => {
    (duration !== CONSTANT_TIME && !duration.includes("-")) &&
      setDuration(diffTime(duration, time, standard));
  };
  return (
    <div className="select-clips-container">
      <div>{reelName}</div>
      {clipList.filter(clip =>  clip.definition === selectDefinition && clip.standard === selectStandard).map(
        ({ name, definition, standard, startTimecode, endTimecode }) => (
          <div className="clip-card">
            <div>Clip name: {name}</div>
            <div>Defintion: {definition}</div>
            <div>Standard: {standard}</div>
            <div>Start time: {startTimecode} </div>
            <div>End time: {endTimecode}</div>
            <div className="buttons">
              <Button onClick={() => handleAdd(endTimecode, selectStandard)}>Add Clip</Button>
              <Button onClick={() => handleDiff(endTimecode, selectStandard)}>
                Remove Clip
              </Button>
            </div>
          </div>
        )
      )}
      <div> Total Duration: {duration.includes("-") ? CONSTANT_TIME:duration}</div>
    </div>
  );
};

export default SelectClips;
