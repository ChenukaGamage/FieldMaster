// SideNavbar.js
import React from "react";
import { useState, useEffect } from "react";
import { HiMiniBars4 } from "react-icons/hi2";
import { TbArrowBarBoth, TbBarrierBlock, TbFence } from "react-icons/tb";
import { MdArrowBack } from "react-icons/md";
import { BsBoundingBox } from "react-icons/bs";
import { PiSquareDuotone } from "react-icons/pi";
import { styles } from "./fenceDetailsStyles";

export default function FenceDetails({
  onBackToSidebar,
  inputValuePostspace,
  displayValues,
  PostSpaceUnitselectedValue,
  FenceTypeselectedValue,
}) {

  const [numberOfSticks, setnumberOfSticks] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('https://fieldmaster.kosmoz.io/api/fence/numberOfSticks');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setnumberOfSticks(data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    fetchData();
  }, []);

  return (
    <div style={styles.content}>
      <div style={styles.header}>
        <MdArrowBack
          onClick={onBackToSidebar}
          style={styles.backButton}
          fontSize={20}
        />
        <p style={styles.titleText1}>Fence Details</p>
      </div>

      {/* first box */}

      <div style={styles.Box1}>
        <p style={styles.titleText}>Total Posts / Sticks</p>
        <div style={styles.propertyBox}>
          <div style={styles.property}>
            <div style={{ transform: "rotate(90deg)" }}>
              <HiMiniBars4 color="gray" size={30} />
            </div>
            <div style={styles.propertyDetails}>
              <p style={styles.propertyLabel}>Total Amount</p>
              <p style={styles.propertyValue}>{numberOfSticks} Sticks</p>
            </div>
          </div>
          <div className="property" style={styles.property}>
            <TbArrowBarBoth color="gray" size={30} />
            <div style={styles.propertyDetails}>
              <p style={styles.propertyLabel}>post Gap</p>
              <p style={styles.propertyValue}>
                {inputValuePostspace} {PostSpaceUnitselectedValue}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second box */}

      <div style={styles.Box2}>
        <div style={styles.propertyBox}>
          <div style={styles.property}>
            <BsBoundingBox color="gray" size={28} />
            <div style={styles.propertyDetails}>
              <p style={styles.propertyLabel}>Perimeter</p>
              <p style={styles.propertyValue}>1.5Km</p>
            </div>
          </div>
          <div className="property" style={styles.property}>
            <PiSquareDuotone color="gray" size={40} />
            <div style={styles.propertyDetails}>
              <p style={styles.propertyLabel}>Area</p>
              <p style={styles.propertyValue}>100 acres</p>
            </div>
          </div>
        </div>
      </div>

      {/* Third box */}

      <div style={styles.box3}>
        <p style={styles.innertopText}>Result based on</p>

        <div style={styles.innercenter}>
          <div style={styles.innersquareleft}>
            <TbFence name="gate" size={35} color="gray" />
            <p style={styles.propertyLabel1}>Fence Type &nbsp;&nbsp;:</p>
          </div>
          <div style={styles.innersquareright}>
            <p style={styles.propertyLabel}>{FenceTypeselectedValue}</p>
          </div>
        </div>

        <div style={styles.innercenter}>
          <div style={styles.innersquareleft}>
            <TbBarrierBlock name="boom-gate" size={35} color="gray" />
            <p style={styles.propertyLabel1}>
              Gates &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              :
            </p>
          </div>
          <div style={styles.innersquareright1}>
            {displayValues.length === 0 ? (
              <div>No Gate</div>
            ) : (
              displayValues.map((value, index) => (
                <div key={index}>{value}</div>
              ))
            )}
          </div>
        </div>
      </div>

      <div style={styles.bottom}>
        <button style={styles.Button1}>
          <p style={styles.Box4ButtonText}>Save Data</p>
        </button>
      </div>
    </div>
  );
}
