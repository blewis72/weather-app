import React from 'react';
import { FaArrowDownLong } from "react-icons/fa6";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";

import"./descriptions.css";

const Descriptions = () => {



 const cards = [
  {

  }
 ] 
//will display the forcast for the week. Havemt worked on this yet
  return (
<div className='forcast'>
  <div className='card'>
    <div className='description_card-icon'>
<FaArrowDownLong/>
<small>Monday</small>
    </div>
    <h2>32 °F</h2>
  </div>
  <div className='card'>
    <div className='description_card-icon'>
<FaArrowDownLong/>
<small>Tuesday</small>
    </div>
    <h2>32 °F</h2>
  </div>
  <div className='card'>
    <div className='description_card-icon'>
<FaArrowDownLong/>
<small>Wednesday</small>
    </div>
    <h2>32 °F</h2>
  </div>
  <div className='card'>
    <div className='description_card-icon'>
<FaArrowDownLong/>
<small>Thursday</small>
    </div>
    <h2>32 °F</h2>
  </div>
  <div className='card'>
    <div className='description_card-icon'>
<FaArrowDownLong/>
<small>Friday</small>
    </div>
    <h2>32 °F</h2>
  </div>
  <div className='card'>
    <div className='description_card-icon'>
<FaArrowDownLong/>
<small>Saturday</small>
    </div>
    <h2>32 °F</h2>
  </div>

</div>

  );
};

export default Descriptions;