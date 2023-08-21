import React, { useState } from "react";
import Cropper from "react-easy-crop";
import { Button, Modal } from "react-bootstrap";

const ImageCropper = ({
  image,
  onCropDone,
  onCropCancel,
  handleClose,
  handleShow,
  showModal,
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(2);
  const [cropShape, setCropShape] = useState("square");
  const [croppedArea, setCroppedArea] = useState(null);

  const onCropComplete = (croppedAreaPercentage,croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const handleRadioChange = (e) => {
    setCropShape(e.target.value);
  };

  return (
    <>
      {/* react bootstrap */}

      <Modal show={showModal} onHide={()=> { handleClose();}}>
        <Modal.Header closeButton onClick={()=> setImgAfterCrop("")} className="border-bottom-0"></Modal.Header>
        <Modal.Body style={{ height: "230px", margin: "4px 5px" }}>
          <Cropper
            image={image}
            aspect={1 / 1}
            crop={crop}
            zoom={zoom}
            maxZoom={4}
            showGrid={false}
            zoomWithScroll={true}
            cropShape={cropShape}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
            style={{
              containerStyle: {
                width: "100%",
                height: "100%",
                backgroundColor: "white",
              },
            }}
          />
        </Modal.Body>

        <div className="shapRadioBtns">
          <div className="radioBtnWrapper">
            <label htmlFor="rounded">Square</label>
            <input
              class="form-check-input"
              type="radio"
              checked={cropShape === "square"}
              onChange={handleRadioChange}
              name="shap"
              value="square"
            />
          </div>

          <div className="radioBtnWrapper">
            <label htmlFor="rounded">Round</label>
            <input
              class="form-check-input"
              type="radio"
              checked={cropShape === "round"}
              onChange={handleRadioChange}
              name="shap"
              value="round"
            />
          </div>
        </div>

        <h2 style={{ fontSize: "20px", margin: "0 15px" }}>
          Tip:{" "}
          <span style={{ fontSize: "15px", color: "gray", fontWeight: "400" }}>
            Center your photo around and zoom in till it's perfect.
          </span>
        </h2>

        <Modal.Footer className="border-top-0">
          <Button
            variant="primary"
            onClick={() => {
              onCropDone(croppedArea);
              setCropShape("square");
              handleClose();
              document.getElementById('addProfile').value = "";
            }}
          >
            Crop & Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ImageCropper;
