import React from "react";
import { useState } from "react";
import styled from "styled-components";
import "./newlead.css";
import { GoLocation } from "react-icons/go";
import { GiWorld } from "react-icons/gi";

const NewLeadContainer = styled.div`
  width: 95%;
  background-color: #fff;
  margin: 25px auto;

  .h2-heading {
    text-align: center;
    color: gray;
    background-color: #fff;
  }
  h2 {
    background-color: #fff !important;
    margin: 15px 15px;
    padding: 5px 15px;
    text-align: center;
    color: gray;
  }

  h3 {
    padding: 10px 0 0 20px;
  }
  .formLabel {
    font-size: 17px;
    margin: 15px 15px;
    font-weight: 600;
    padding: 5px 15px;
    display: flex;
    background-color: #fff;
    flex-direction: column;

    label {
      background-color: #fff;
    }

    input {
      margin: 5px 0;
      padding: 8px;
      background-color: #fff;
      border: 1px solid lightgray;
      border-radius: 3px;
      height: 30px;
    }
  }

  .hr-center {
    width: 95%;
    border: 1px solid lightgray;
  }

  hr {
    border: 1px solid lightgray;
  }
  .btn-deviation {
    padding: 12px 22px;
    background-color: #264ae5;
    border: 1px solid #264ae5;
    color: #ffffff;
    cursor: pointer;
    border-radius: 6px;
    font-weight: 500;
    font-size: 14px;
    width: 15vw;
    margin-left: 75vw;
  }

  .btn-eligibility {
    color: #ffffff;
    margin-left: 1.5vw;
    padding: 12px 22px;
    cursor: pointer;
    background-color: #eca51c;
    border: 1px solid #eca51c;
    margin-left: 2.3vw;
    border-radius: 6px;
    font-weight: 500;
    font-size: 14px;
  }
  .btn-save {
    padding: 12px 22px;
    cursor: pointer;
    color: #ffffff;
    margin-left: 2.3vw;
    border-radius: 6px;
    font-size: 14px;
    background-color: #3cb33d;
    border: 1px solid #3cb33d;
    font-weight: 500;
  }
  .btn-cancel {
    padding: 12px 22px;
    cursor: pointer;
    color: #264ae5;
    margin-left: 67vw;
    border-radius: 6px;
    background-color: transparent;
    border: 1px solid lightgray;
    font-weight: 500;
    font-size: 14px;
  }
  img {
    width: 25px;
  }

  .btn-icons {
    background-color: #0086d9;
    border: 1px solid #0086d9;
    margin-left: 1vw;
    width:2.5vw;
    height: 40px;
    border-radius: 6px;
    cursor: pointer;
  }

  .icons {
    color: white;
    font-size: 18px;
  }
`;
export default function NewLead() {
  //
  const [show, setShow] = useState(true);
  //
  const [isColorActive, setIsColorActive] = useState(false);

  const handleClick = () => {
    setShow(!show);
    setIsColorActive(true);
  };
  return (
    <div>
      <NewLeadContainer>
        <h3
          style={{ color: isColorActive ? "blue" : "" }}
          onClick={handleClick}
        >
          Business Information
        </h3>
        {show ? (
          <>
            <div className="formLabel">
              <label htmlFor="">Business Name</label>
              <input type="text" />
            </div>
            <div className="formLabel">
              <label htmlFor="">Business Category</label>
              <input type="text" />
            </div>
            <div className="formLabel">
              <label htmlFor="">Business Type</label>
              <input type="text" />
            </div>
            <div className="formLabel">
              <label htmlFor="">Location</label>
              <input type="text" />
            </div>
            <div className="formLabel">
              <label htmlFor="">Pin code Business</label>
              <input type="text" />
            </div>
            <div className="formLabel">
              <label htmlFor="">Geo Tagging Info</label>
              <input type="text" />
            </div>
            <hr className="hr-center" />
            <button className="btn-save">Save</button>
            <button className="btn-icons">
              <GoLocation className="icons" />
            </button>
            <button className="btn-icons">
              <GiWorld className="icons" />
            </button>
            <button className="btn-cancel">Cancel</button>
          </>
        ) : null}
        <hr />
        <h3
          style={{ color: isColorActive ? "blue" : "" }}
          onClick={handleClick}
        >
          Lead Information
        </h3>
        {show ? (
          <>
            <div className="formLabel">
              <label htmlFor="">First Name</label>
              <input type="text" />
            </div>
            <div className="formLabel">
              <label htmlFor="">Middle Name</label>
              <input type="text" />
            </div>
            <div className="formLabel">
              <label htmlFor="">Surname</label>
              <input type="text" />
            </div>
            <div className="formLabel">
              <label htmlFor="">Data of birth</label>
              <input type="date" name="" id="" />
            </div>
            <div className="formLabel">
              <label htmlFor="">Age</label>
              <input type="text" />
            </div>
            <div className="formLabel">
              <label htmlFor="">Mobile number</label>
              <input type="number" />
            </div>
            <div className="formLabel">
              <label htmlFor="">Email ID</label>
              <input type="text" />
            </div>
            <div className="formLabel">
              <label htmlFor="">Language</label>
              <input type="text" />
            </div>
            <div className="formLabel">
              <label htmlFor="">Current Loan requirement</label>
              <input type="text" />
            </div>
            <div className="formLabel">
              <label htmlFor="">Purpose of loan</label>
              <input type="text" />
            </div>
            <div className="formLabel">
              <label htmlFor="">Loan amount</label>
              <input type="text" />
            </div>
            <div className="formLabel">
              <label htmlFor="">Owner of the property</label>
              <input type="text" />
            </div>
            <div className="formLabel">
              <label htmlFor="">Property Type</label>
              <input type="text" />
            </div>
            <div className="formLabel">
              <label htmlFor="">Property Occupancy</label>
              <input type="text" />
            </div>
            <div className="formLabel">
              <label htmlFor="">Roof type</label>
              <input type="text" />
            </div>
            <div className="formLabel">
              <label htmlFor="">Pincode residence</label>
              <input type="text" />
            </div>
            <div className="formLabel">
              <label htmlFor="">Address</label>
              <input type="text" />
            </div>
            <div className="formLabel">
              <label htmlFor="">Nature of property</label>
              <input type="text" />
            </div>
            <div className="formLabel">
              <label htmlFor="">Outstanding loan against this property</label>
              <input type="text" />
            </div>
            <div className="formLabel">
              <label htmlFor="">Pincode collateral</label>
              <input type="text" />
            </div>
            <div className="formLabel">
              <label htmlFor="">Lead Status</label>
              <input type="text" />
            </div>
            <hr className="hr-center" />
            <button className="btn-eligibility">Eligibility</button>
            <button className="btn-save">Save</button>
            <button className="btn-cancel">Cancel</button>
          </>
        ) : null}
        <hr />
        <h3
          style={{ color: isColorActive ? "blue" : "" }}
          onClick={handleClick}
        >
          Follow Ups
        </h3>
        {show ? (
          <>
            <div className="formLabel">
              <h3 htmlFor="" className="h2-heading">
                No Items Found
              </h3>
              <hr className="hr-center" />
              <button className="btn-deviation">NEW FOLLOW UP</button>
            </div>
          </>
        ) : null}
        <hr />
        <h3
          style={{ color: isColorActive ? "blue" : "" }}
          onClick={handleClick}
        >
          Deviation
        </h3>
        {show ? (
          <>
            <div className="formLabel">
              <h3 htmlFor="" className="h2-heading">
                Deviation
              </h3>
              <hr className="hr-center" />

              <button className="btn-deviation">NEW DEVIATION</button>
            </div>
          </>
        ) : null}
        <hr />
      </NewLeadContainer>
    </div>
  );
}
