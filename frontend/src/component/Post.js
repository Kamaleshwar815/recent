import { Avatar, Box, Button, Typography } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';
import React, { useEffect, useState } from 'react'
import CommentIcon from '@material-ui/icons/Comment';
import AddPost from './AddPost';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import apiList from '../lib/apiList';
import axios from "axios"
function Post() {
    const [addPost, setAddPost] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios.get(`${apiList.post}/listPost`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    }

                })
                if (data.data) {
                    console.log(data)
                    setData(data.data)
                }
            } catch (err) {

            }
        }
        getData()
    }, [])
    return (
        <div style={{ width: "100vw", height: "100vh", padding: "2ch", zIndex: 0 }}>
            {addPost ? (
                <div style={{ width: "100%", zIndex: "50", height: "50%", alignContent: "center", alignItems: "center" }}>
                    <AddPost setAddPost={setAddPost} />
                </div>
            ) : (

                <>
                    <Button onClick={() => setAddPost(true)} style={{ marginLeft: "5ch" }} variant="contained">Add New Post</Button>
                    {data && data.map((item) => (


                        <div style={{ Width: "100%", padding: "5%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center" }} >

                            <Avatar style={{ marginLeft: "-50%" }} alt="Remy Sharp" src={item && item.userId.profile} />
                            <div style={{ width: "50%", height: "55%" }}>

                                <img style={{ width: "100%", height: "100%" }} src={item.image && item.image} />

                            </div>
                            <Box style={{ marginLeft: "-43%", marginTop: "1ch" }}>
                                <Typography>{item.description}</Typography>
                                <FavoriteBorderIcon />
                                {/* <FavoriteIcon /> */}
                                <CommentIcon style={{ marginLeft: "1ch" }} />
                            </Box>
                        </div>
                    ))}
                </>
            )}
        </div >
    )
}

export default Post