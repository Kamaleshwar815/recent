import { useState, useContext, useEffect } from "react";
import { Grid, Button, TextField, LinearProgress } from "@material-ui/core";
import { CloudUpload } from "@material-ui/icons";
import Axios from "axios";

import { SetPopupContext } from "../App";
import { storage } from "../firebase/firebase";

const FileUploadInput = (props) => {
  const setPopup = useContext(SetPopupContext);

  const { uploadTo, identifier, handleInput, setImageAsUrl, imageAsUrl } = props;

  const [file, setFile] = useState({ image_preview: "", image_file: "" });
  const [uploadPercentage, setUploadPercentage] = useState(0);


  const handleUpload = () => {
    console.log(file);

    const data = new FormData();
    data.append("file", file);
    // Axios.post(uploadTo, file.image_file, {

    //   onUploadProgress: (progressEvent) => {
    //     setUploadPercentage(
    //       parseInt(
    //         Math.round((progressEvent.loaded * 100) / progressEvent.total)
    //       )
    //     );
    //   },
    // })
    //   .then((response) => {
    //     console.log(response.data);
    //     handleInput(identifier, response.data.url);
    //     setPopup({
    //       open: true,
    //       severity: "success",
    //       message: response.data.message,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err.response);
    //     setPopup({
    //       open: true,
    //       severity: "error",

    //       //   message: err.response.data
    //       //     ? err.response.data.message
    //       //     : err.response.statusText,
    //     });
    //   });



    const uploadTask = storage.ref(`/job/${file.name}`).put(file)
    //initiates the firebase side uploading 
    uploadTask.on('state_changed',
      (snapShot) => {
        //takes a snap shot of the process as it is happening

      }, (err) => {
        //catches the errors

      }, () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        storage.ref('job').child(file.name).getDownloadURL()
          .then(fireBaseUrl => {
            setImageAsUrl(prevObject => ({ ...prevObject, fireBaseUrl }))

          })
      })



  };

  useEffect(() => {
    const getData = () => {
      handleInput("profile", imageAsUrl.fireBaseUrl)
      setPopup({
        open: true,
        severity: "success",
        message: "photo uploaded successfully",
      });
    }
    if (imageAsUrl !== undefined) {
      getData()
    }
  }, [imageAsUrl])

  const handleImage = (e) => {
    const image = e.target.files[0]
    console.log(image.name)
    setFile(imageFile => (image))

  }
  console.log(imageAsUrl)

  return (
    <Grid container item xs={12} direction="column" className={props.className}>
      <Grid container item xs={12} spacing={0}>
        <Grid item xs={3}>
          <Button
            variant="contained"
            color="primary"
            component="label"
            style={{ width: "100%", height: "100%" }}
          >
            {props.icon}
            <input
              type="file"
              style={{ display: "none" }}
              onChange={(event) => {
                console.log(event)
                handleImage(event)
                setUploadPercentage(0);

              }}

            // onChange={onChange}
            // onChange={
            //   (e) => {}
            //   //   setSource({ ...source, place_img: e.target.files[0] })
            // }
            />
          </Button>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label={props.label}
            value={file.image_file}

            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            color="secondary"
            style={{ width: "10%", height: "100%" }}


            onClick={() => handleUpload()}
            disabled={file ? false : true}
          >
            <input
              type="file"
              style={{ display: "none" }}
              onChange={(event) => {
                console.log(event)
                handleImage(event)
                setUploadPercentage(0);

              }} />
            <CloudUpload />
          </Button>
        </Grid>
      </Grid>
      {uploadPercentage !== 0 ? (
        <Grid item xs={12} style={{ marginTop: "10px" }}>
          <LinearProgress variant="determinate" value={uploadPercentage} />
        </Grid>
      ) : null}
    </Grid>
  );
};

export default FileUploadInput;
