import { Box, Button, ButtonBase, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { storage } from "../firebase/firebase"
import axios from "axios"
import apiList, { server } from '../lib/apiList'
function AddPost({ setAddPost }) {
    const [imageAsFile, setImageAsFile] = useState("")
    const [description, setdescription] = useState("")
    const [imageAsUrl, setImageAsUrl] = useState("")
    // image upload on firebase
    const handleSubmit = async () => {
        try {
            const { data } = await axios.post(`${apiList.post}/create`, {
                image: imageAsUrl.fireBaseUrl,
                description: description
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            })
            if (data.status) {
                console.log(data.data)
            }
        } catch (err) {
            console.log(err)
        }
    }
    const handleImageAsFile = (e) => {
        const image = e.target.files[0]
        setImageAsFile(imageFile => (image))
    }


    useEffect(() => {
        const handleFireBaseUpload = () => {


            const uploadTask = storage.ref(`/job/${imageAsFile.name}`).put(imageAsFile)
            //initiates the firebase side uploading 
            uploadTask.on('state_changed',
                (snapShot) => {
                    //takes a snap shot of the process as it is happening

                }, (err) => {
                    //catches the errors

                }, () => {
                    // gets the functions from storage refences the image storage in firebase by the children
                    // gets the download url then sets the image from firebase as the value for the imgUrl key:
                    storage.ref('job').child(imageAsFile.name).getDownloadURL()
                        .then(fireBaseUrl => {
                            setImageAsUrl(prevObject => ({ ...prevObject, fireBaseUrl }))

                        })
                })

        }
        if (imageAsFile !== "") {
            handleFireBaseUpload()
        }
    }, [imageAsFile])
    console.log(imageAsUrl)
    return (
        <div style={{ border: "2px solid lightgray", marginTop: "1ch", width: "70%", height: "100%", alignItems: "center", display: "flex", flexDirection: "column", margin: "0 auto" }}>
            <Typography style={{ textAlign: "center", marginTop: "1ch" }}>Add New Post</Typography>
            <Box style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", height: "100%" }}>


                <Box style={{ marginTop: "1ch", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", marginLeft: "60%" }}>
                    <Typography style={{ marginTop: "1ch" }}>Add Post</Typography>
                    <input onChange={(e) => handleImageAsFile(e)} style={{ marginTop: "1ch" }} type="file" />
                </Box>

                <div style={{ marginTop: "1ch", marginLeft: "5ch", height: "100%", width: "50%", display: "flex", flexDirection: "column" }}>
                    <Typography style={{ marginTop: "0ch" }}>Add Description</Typography>
                    <input style={{ marginTop: "1ch", height: "30%", width: "100%" }} onChange={(e) => setdescription(e.target.value)} type="text" />
                    <Button style={{ marginTop: "2ch" }} onClick={() => handleSubmit()} variant="contained">Save</Button>
                    <Button style={{ marginTop: "2ch" }} onClick={() => setAddPost(false)} variant="contained">Back to feed</Button>
                </div>

            </Box>
        </div>

    )
}

export default AddPost