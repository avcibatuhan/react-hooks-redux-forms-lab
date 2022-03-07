import React from "react";
import BandInput from "./BandInput";
import {useSelector,useDispatch} from "react-redux";
import {bandAdded} from "./bandsSlice";


function BandsContainer() {
  const bands = useSelector((state) => state.bands.entities);
  const bandList = bands.map((band,index) => <li key={index}>{band}</li>)
  const dispatch = useDispatch();
  const onBandSubmit = (name) => {
    dispatch(bandAdded(name));
  }
  return <div>
    <BandInput onBandSubmit={onBandSubmit}/>
    <ul>{bandList}</ul>
  </div>;
}

export default BandsContainer;
