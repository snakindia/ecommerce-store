import React, { Component } from "react";
import { SideBySideMagnifier } from "react-image-magnifiers";
class Zoomer extends Component {
  state = {
    alwaysInPlace: false,
    overlayOpacity: 0.6,
    switchSides: false,
    fillAvailableSpace: false,
    fillAlignTop: false,
    fillGapLeft: 0,
    fillGapRight: 10,
    fillGapTop: 10,
    fillGapBottom: 10
  };
  render() {
    const {
      alwaysInPlace,
      overlayOpacity,
      switchSides,
      fillAvailableSpace,
      fillAlignTop,
      fillGapLeft,
      fillGapRight,
      fillGapTop,
      fillGapBottom
    } = this.state;

    const { image, largeImage } = this.props;

    return (
      <React.Fragment>
            <SideBySideMagnifier
              className="input-position"
              style={{ order: switchSides ? "1" : "0" , height:'350px'}}
              imageSrc={image}
              largeImageSrc={largeImage}
              alwaysInPlace={alwaysInPlace}
              overlayOpacity={overlayOpacity}
              switchSides={switchSides}
              zoomPosition="left"
              inPlaceMinBreakpoint={641}
              fillAvailableSpace={fillAvailableSpace}
              fillAlignTop={fillAlignTop}
              fillGapTop={fillGapTop}
              fillGapRight={fillGapRight}
              fillGapBottom={fillGapBottom}
              fillGapLeft={fillGapLeft}
              className="zoomer-img"
              zoomContainerBorder="1px solid #ccc"
              zoomContainerBoxShadow="0 4px 8px rgba(0,0,0,.5)"
            />
      </React.Fragment>
    );
  }
}

export default Zoomer;
