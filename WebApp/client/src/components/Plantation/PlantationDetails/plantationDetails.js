// SideNavbar.js
import React from "react";
import { useState, useEffect } from "react";
import { MdArrowBack } from "react-icons/md";
import { BsBoundingBox } from "react-icons/bs";
import { PiSquareDuotone } from "react-icons/pi";
import { styles } from "./plantationDetailsStyles";
import { MdGrass,MdFormatLineSpacing } from "react-icons/md";
import { GiGrassMushroom } from "react-icons/gi";
import { FaTree } from "react-icons/fa";
import { RxRowSpacing } from "react-icons/rx";

export default function PlantationDetails({
  onBackToSidebar,
  inputValuePlantspace,
  inputValueRowSpace,
  PlantSpaceUnitselectedValue,
  RowSpaceUnitselectedValue,
  PlantTypeselectedValue,
}) {

  const [numberOfPlants, setnumberOfPlants] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('http://192.168.1.4:3000/api/plantation/numberOfPlants');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setnumberOfPlants(data.data);
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
        <p style={styles.titleText1}>Plantation Details</p>
      </div>

      {/* first box  */}
      {/* to rotate - style={{ transform: "rotate(90deg)" }} */}

      <div style={styles.Box1}>
        <p style={styles.titleText}>Total Plants</p>
        <div style={styles.propertyBox}>
          <div style={styles.property}>
            <div >
              <MdGrass color="gray" size={30} />
            </div>
            <div style={styles.propertyDetails}>
              <p style={styles.propertyLabel}>Plant count</p>
              <p style={styles.propertyValue}>{numberOfPlants} Plants</p>
            </div>
          </div>
          <div className="property" style={styles.property}>
            <GiGrassMushroom color="gray" size={30} />
            <div style={styles.propertyDetails}>
              <p style={styles.propertyLabel}>Plant Density</p>
              <p style={styles.propertyValue}>
                {numberOfPlants} / m<sup>2</sup>
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
        <p style={styles.innertopText}>Results based on</p>

        <div style={styles.innercenter}>
          <div style={styles.innersquareleft}>
            <FaTree name="tree" size={30} color="gray" />
            <div style={styles.propertybox}><p style={styles.propertyLabel1}>Plant Type</p></div>
            
          </div>
          <div style={styles.innersquareright}>
            <p style={styles.propertyLabel}>: {PlantTypeselectedValue}</p>
          </div>
        </div>

        <div style={styles.innercenter}>
          <div style={styles.innersquareleft}>
            <RxRowSpacing  style={{ transform: "rotate(90deg)" }}name="boom-gate" size={30} color="gray" />
            <div style={styles.propertybox}><p style={styles.propertyLabel1}>
              Plant Spacing
            </p></div>
            
          </div>
          <div style={styles.innersquareright}>
            <p style={styles.propertyLabel}>: {inputValuePlantspace}{PlantSpaceUnitselectedValue}</p>
          </div>
        </div>

        <div style={styles.innercenter}>
          <div style={styles.innersquareleft}>
            <MdFormatLineSpacing name="boom-gate" size={30} color="gray" />
            <div style={styles.propertybox}><p style={styles.propertyLabel1}>
              Row Spacing
            </p></div>
            
          </div>
          <div style={styles.innersquareright}>
            <p style={styles.propertyLabel}>: {inputValueRowSpace}{RowSpaceUnitselectedValue}</p>
          </div>
        </div>

      </div>

      <div style={styles.bottom}>
        <button style={styles.Button1}>
          <p style={styles.Box4ButtonText}>Fertilization</p>
        </button>
      </div>

      <div style={styles.bottom2}>
        <button style={styles.Button2}>
          <p style={styles.Box4ButtonText}>Save as PDF</p>
        </button>
      </div>

    </div>
  );
}
