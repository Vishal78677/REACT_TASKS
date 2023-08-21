import React, { useState } from "react";
import FileInput from "./fileInput";
import ImageCropper from "./ImageCropper";

const ReactCro = () => {
  const [image, setImage] = useState("");
  const [imgAfterCrop, setImgAfterCrop] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    document.getElementById("addProfile").value = "";
    setShowModal(false);
  };
  const handleShow = () => setShowModal(true);

  const onImageSelected = (selectedImg) => {
    setImage(selectedImg);
  };

  const onCropDone = (imgCroppedArea) => {
    const canvasEle = document.createElement("canvas");
    canvasEle.width = imgCroppedArea.width;
    canvasEle.height = imgCroppedArea.height;

    const context = canvasEle.getContext("2d");

    let imageObj1 = new Image();
    imageObj1.src = image;
    imageObj1.onload = function () {
      context.drawImage(
        imageObj1,
        imgCroppedArea.x,
        imgCroppedArea.y,
        imgCroppedArea.width,
        imgCroppedArea.height,
        0,
        0,
        imgCroppedArea.width,
        imgCroppedArea.height
      );

      const dataURL = canvasEle.toDataURL("image/jpeg");
      setImgAfterCrop(dataURL);
    };
  };

  const onCropCancel = () => {
    setImage("");
  };

  return (
    <>
      <FileInput
        handleClose={handleClose}
        handleShow={handleShow}
        showModal={showModal}
        setShowModal={setShowModal}
        setImage={setImage}
        imgAfterCrop={imgAfterCrop}
        onImageSelected={onImageSelected}
      />
      <ImageCropper
        setImgAfterCrop={setImgAfterCrop}
        handleClose={handleClose}
        showModal={showModal}
        setShowModal={setShowModal}
        handleShow={handleShow}
        image={image}
        onCropDone={onCropDone}
        onCropCancel={onCropCancel}
      />
    </>
  );
};

export default ReactCro;
