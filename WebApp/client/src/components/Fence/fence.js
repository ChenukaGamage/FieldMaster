// SideNavbar.js
import React, { useState, useRef } from "react";
import { FaBars, FaSquare, FaRegSquare } from "react-icons/fa";
import { MdArrowBack, MdFence } from "react-icons/md";
import { GiGate } from "react-icons/gi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Select from "react-select";

export default function Fence({ onBackToSidebar }) {
  const [perimeter, setPerimeter] = useState("1.5");
  const [area, setArea] = useState("100");
  const [selectedFenceType, setSelectedFenceType] = useState(null);
  const [selectedPostSpaceUnit, setSelectedPostSpaceUnit] = useState("");
  const [inputValuePostspace, setInputValuePostspace] = useState("");
  const [inputValueFenceLength, setInputValueFenceLength] = useState("");
  const [inputValueFenceAmount, setInputValueFenceAmount] = useState("");
  const [fenceLengthsArray, setFenceLengthsArray] = useState([]);
  const [fenceAmountsArray, setFenceAmountsArray] = useState([]);
  const [displayValues, setDisplayValues] = useState([]);
  const inputValueFenceAmountRef = useRef(null);

  const handleFenceLengthChange = (event) => {
    setInputValueFenceLength(event.target.value);
  };

  const handleFenceAmountChange = (event) => {
    setInputValueFenceAmount(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputValuePostspace(event.target.value);
  };

  const handleFenceTypeChange = (selectedOption) => {
    setSelectedFenceType(selectedOption);
  };

  const handlePostSpaceUnitChange = (selectedOption) => {
    setSelectedPostSpaceUnit(selectedOption);
  };

  const handleAdd = () => {
    const length = parseFloat(inputValueFenceLength);
    const amount = parseInt(inputValueFenceAmount);
    setFenceLengthsArray([...fenceLengthsArray, length]);
    setFenceAmountsArray([...fenceAmountsArray, amount]);
    const combinedValue = `${length}m x ${amount}`;
    const newDisplayValues = [...displayValues, combinedValue].filter(Boolean);
    setDisplayValues(newDisplayValues);
    setInputValueFenceLength("");
    setInputValueFenceAmount("");
    inputValueFenceAmountRef.current.focus();
  };

  const handleRemoveValue = (index) => {
    const newDisplayValues = [...displayValues];
    newDisplayValues.splice(index, 1);
    setDisplayValues(newDisplayValues);

    const newFenceLengthsArray = [...fenceLengthsArray];
    newFenceLengthsArray.splice(index, 1);
    setFenceLengthsArray(newFenceLengthsArray);

    const newFenceAmountsArray = [...fenceAmountsArray];
    newFenceAmountsArray.splice(index, 1);
    setFenceAmountsArray(newFenceAmountsArray);
  };

  return (
    <div style={styles.content}>
      <div style={styles.header}>
        <MdArrowBack
          onClick={onBackToSidebar}
          style={styles.backButton}
          fontSize={20}
        />
        <p style={styles.titleText1}>Fence</p>
      </div>

      <div style={styles.Box1}>
        <p style={styles.titleText}>Land Info</p>
        <div style={styles.propertyBox}>
          <div style={styles.property}>
            <FaRegSquare color="gray" size={40} />
            <div style={styles.propertyDetails}>
              <p style={styles.propertyLabel}>Perimeter</p>
              <p style={styles.propertyValue}>{perimeter}Km</p>
            </div>
          </div>
          <div style={styles.property}>
            <FaSquare color="gray" size={40} />
            <div style={styles.propertyDetails}>
              <p style={styles.propertyLabel}>Area</p>
              <p style={styles.propertyValue}>{area} m<sup>2</sup></p>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.box2}>
        <div style={styles.box2Property}>
          <MdFence
            name="gate"
            size={40}
            color="gray"
            rotation={270}
            style={styles.squareIcon}
          />
          <div style={styles.box2PropertyDetails}>
            <p style={styles.Box2PropertyLabel}>Fence Type</p>
          </div>
        </div>
        <div style={styles.box2Property}>
          <div style={styles.Box2DropdownContainer}>
            <Select
              placeholder="Type"
              options={[
                { value: "option1", label: "Wood" },
                { value: "option2", label: "Metal" },
                { value: "option3", label: "Fiber" }
              ]}
              value={selectedFenceType}
              onChange={handleFenceTypeChange}
              styles={{
                control: (provided) => ({
                  ...provided,
                  textAlign: "center"
                })
              }}
            />
          </div>
        </div>
      </div>

      <div style={styles.box3}>
        <div style={styles.box3Property}>
          <div style={{ transform: "rotate(90deg)" }}>
            <FaBars name="format-line-spacing" size={30} color="gray" />
          </div>
          <div style={styles.box3PropertyDetails}>
            <p style={styles.Box3PropertyLabel}>Post Space</p>
          </div>
        </div>
        <div style={styles.box3Property}>
          <div style={styles.box3inputContainer}>
            <input
              type="text"
              style={styles.box3input}
              placeholder="00"
              value={inputValuePostspace}
              onChange={handleInputChange}
            />
            <Select
              placeholder="m"
              options={[
                { value: "option1", label: "m" },
                { value: "option2", label: "cm" }
              ]}
              value={selectedPostSpaceUnit}
              onChange={handlePostSpaceUnitChange}
              styles={{
                control: (provided) => ({
                  ...provided,
                  textAlign: "center"
                })
              }}
            />
          </div>
        </div>
      </div>

      <div style={styles.box4}>
        <div style={styles.box4innertop}>
          <GiGate name="boom-gate" size={32} color="gray" />
          <p style={styles.Box4TopText}>Gates</p>
        </div>
        <div style={styles.box4InnerCenter}>
          <div style={styles.line}>
            <p style={styles.linetext}>Length :</p>
            <input
              type="text"
              style={styles.linetextinput}
              placeholder="Length of Gate"
              value={inputValueFenceLength}
              onChange={handleFenceLengthChange}
            />
          </div>
          <div style={styles.line}>
            <p style={styles.linetext}>Count :</p>
            <input
              type="text"
              style={styles.linetextinput}
              placeholder="Number of Gate"
              value={inputValueFenceAmount}
              onChange={handleFenceAmountChange}
              ref={inputValueFenceAmountRef}
              onSubmitEditing={handleAdd}
            />
          </div>
        </div>
        <div style={styles.Box4InnerBottom}>
          <button style={styles.Box4Button} onClick={handleAdd}>
            <p style={styles.Box4ButtonText}>Add</p>
          </button>
        </div>
        
        <div style={styles.displayValuesContainer}>
          {displayValues.map((value, index) => (
         <div key={index} style={styles.displayValueContainer }>
         <div style={styles.displayValueText}>{value}</div>
      <button
        onClick={() => handleRemoveValue(index)}
        style={styles.closeButton}
      >
        <IoIosCloseCircleOutline
          name="close-circle-outline"
          size={20}
          color="#007BFF"
        />
      </button>
    </div>
  ))}
</div>

      </div>

      <div style={styles.bottom}>
        <button style={styles.Button1}>
          <p style={styles.Box4ButtonText}>Calculate</p>
        </button>
      </div>
    </div>
  );
}


const styles = {
  backButton: {
    marginLeft: "10px",
    cursor: "pointer",
    color: "white",
  },

  content: {
    paddingLeft: "20px",
    paddingRight: "20px",
    width: "100%",
    marginTop: "0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "whitesmoke",
  },
  menuItem: {
    marginTop: "0px",
    borderBottom: "1px solid #CED0D4",
    transition: "background-color 0.3s ease, color 0.3s ease",
  },

  header: {
    display: "flex",
    width: "105%",
    height: "40px",
    backgroundColor: "#007BFF",
    alignItems: "center",
    borderRadius: "5px",
  },

  titleText1: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 0,
    color: "white",
    marginLeft: "140px",
  },

  Box1: {
    width: "90%",
    height: "101px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: "10px",
    borderRadius: "11px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    padding: "10px",
  },

  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 0,
  },

  propertyBox: {
    display: "flex",
    flexDirection: "coloumn",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "100%",
    backgroundColor: "white",
  },

  property: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    alignItems: "center",
    justifyContent: "left",
    backgroundColor: "white",
    width: "46%",
    //height: 50,
  },

  propertyDetails: {
    flexDirection: "column",
    marginLeft: 15,
    width: "50%",
    //height: 40,
    backgroundColor: "white",
  },

  propertyLabel: {
    fontSize: 14,
    marginBottom: 0,
  },

  propertyValue: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 0,
  },

  box2: {
    display: "flex",
    width: "92%",
    height: 71,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "white",
    marginTop: 25,
    borderRadius: 11,
    padding: 0,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },

  box2Property: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: "46%",
    padding: 7,
  },

  box2PropertyDetails: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 5,
    width: "70%",
    backgroundColor: "white",
  },

  Box2PropertyLabel: {
    fontSize: 16,
    marginLeft: 7,
    marginBottom: 0,
  },

  Box2DropdownContainer: {
    backgroundColor: "#F0F2F5",
    borderRadius: 11,
    width: "100%",
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#CED0D4",
  },

  /* Third section */

  box3: {
    display: "flex",
    width: "92%",
    height: 71,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    marginTop: 10,
    borderRadius: 11,
    padding: 0,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },

  box3Property: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: "46%",
    padding: 7,
  },

  box3inputContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    height: "100%",
  },

  box3PropertyDetails: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 5,
    width: "70%",
    backgroundColor: "white",
  },

  Box3PropertyLabel: {
    fontSize: 16,
    marginLeft: 7,
    marginBottom: 0,
  },
  box3input: {
    display: "flex",
    backgroundColor: "white",
    width: "35%",
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "1px solid gray",
    borderLeft: "none",
    borderRight: "none",
    borderTop: "none",
    outline: "none",
  },

  dropdownContainer: {
    backgroundColor: "#F0F2F5",
    borderRadius: 10,
    borderColor: "black",
    width: "70%",
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#CED0D4",
  },

  /* Forth section */

  box4: {
    display: "flex",
    flexDirection: "column",
    width: "92%",
    height: 225,
    backgroundColor: "white",
    marginTop: 10,
    borderRadius: 11,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 6,
  },

  box4innertop: {
    display: "flex",
    width: "40%",
    height: "17%",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    marginTop: 1,
  },

  Box4TopText: {
    fontSize: 16,
    marginLeft: 7,
    marginBottom: 0,
  },

  box4InnerCenter: {
    display: "flex",
    width: "100%",
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  line: {
    display: "flex",
    width: "80%",
    height: 30,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },

  linetext: {
    fontSize: 14,
    textAlign: "right",
    width: 80,
    marginBottom: 0,
  },

  linetextinput: {
    width: 140,
    marginLeft: "10px",
    borderBottomWidth: "1px",
    borderBottomColor: "lightgray",
    borderBottom: "1px solid gray",
    borderLeft: "none",
    borderRight: "none",
    borderTop: "none",
    outline: "none"
  },

  Box4InnerBottom: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  Box4Button: {
    display: "flex",
    width: 119,
    height: 33,
    backgroundColor: "#0866FF",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 11,
    borderWidth: 0,
  },

  Box4ButtonText: {
    color: "white",
    fontSize: 16,
    marginBottom: 0,
  },


  displayValuesContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 5,
    alignItems: "center",
    backgroundColor: "white",
    height: "max-content",
    borderRadius: 11,
    width: "100%",
  },
  displayValueContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "white",
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 10,
    borderRadius: 8,
    padding: 2,
    width: "21%",
    border: '1px solid lightblue',

  },
  displayValueText: {
    fontSize: 11,
    marginRight: 5,
    color: "#007BFF",
  },
  closeButton: {
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  padding: 0,

  },
  closeButtonText: {
    color: "white",
    fontSize: 14,
  },

  bottom: {
    width: "92%",
    alignItems: "center",
    marginTop: 20,
  },

  Button1: {
    display: "flex",
    width: "100%",
    height: 38,
    backgroundColor: "#0866FF",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 11,
    borderWidth: 0,
  },
};
