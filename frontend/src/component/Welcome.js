import React, { useEffect, useState } from "react";
import isAuth from "../lib/isAuth";
import "./Welcome.css";

function Welcome() {
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) window.location.href = "/login";
  }, []);

  const user = {
    name: "Name",
    desg: "Designation",
  };

  return (
    <div className="home">
      <div className="h-profile">
        <img
          src="https://lh3.googleusercontent.com/a/AEdFTp4zhbC2ZEr9-78CPrRzQ-gw3XMeB3tmwYtnu1G4=s512-p-k-rw-no"
          alt=""
        />
        <p>{user.name}</p>
        <span>{user.desg}</span>
        <h4>Email ID</h4>
        <h4>Phone Num </h4>
      </div>
      <div className="h-main">
        <div className="hm-search">
          <input type="text" placeholder="Create a post ..." />
          <div>
            <input type="file" />
            <img
              src="https://img.icons8.com/fluency-systems-filled/48/1859ff/camera.png"
              alt=""
            />
          </div>
          <img
            src="https://img.icons8.com/fluency-systems-filled/48/ffffff/share-rounded.png"
            alt=""
          />
        </div>
        <div className="hm-post">
          <div className="p-head">
            <img
              src="https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt=""
            />
            <p>Name</p>
          </div>
          <div className="p-body">
            <img
              src="https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt=""
            />
            <div className="pb-cont">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              consequuntur sint inventore error nisi? Necessitatibus laboriosam
              recusandae ex numquam facere corporis dignissimos, dicta nesciunt
              praesentium, sint culpa nostrum beatae error.
            </div>
            <div className="p-opts">
              <img
                src="https://img.icons8.com/fluency-systems-filled/48/1859ff/like.png"
                alt=""
              />
              <img
                src="https://img.icons8.com/fluency-systems-filled/48/1859ff/share.png"
                alt=""
              />
            </div>
            <div className="p-cmts">
              <div className="pc-title">
                <p>Comments</p>
                <span></span>
              </div>
              <div className="p-cmt">
                <div className="pc-head">
                  <img
                    src="https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&w=1000&q=80"
                    alt=""
                  />
                  <p>Name</p>
                </div>
                <p>Comment goes here...</p>
              </div>
              <div className="p-cmt">
                <div className="pc-head">
                  <img
                    src="https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&w=1000&q=80"
                    alt=""
                  />
                  <p>Name</p>
                </div>
                <p>Comment goes here...</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hm-post">
          <div className="p-head">
            <img
              src="https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt=""
            />
            <p>Name</p>
          </div>
          <div className="p-body">
            <img
              src="https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt=""
            />
            <div className="pb-cont">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              consequuntur sint inventore error nisi? Necessitatibus laboriosam
              recusandae ex numquam facere corporis dignissimos, dicta nesciunt
              praesentium, sint culpa nostrum beatae error.
            </div>
            <div className="p-opts">
              <img
                src="https://img.icons8.com/fluency-systems-filled/48/1859ff/like.png"
                alt=""
              />
              <img
                src="https://img.icons8.com/fluency-systems-filled/48/1859ff/share.png"
                alt=""
              />
            </div>
            <div className="p-cmts">
              <div className="pc-title">
                <p>Comments</p>
                <span></span>
              </div>
              <div className="p-cmt">
                <div className="pc-head">
                  <img
                    src="https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&w=1000&q=80"
                    alt=""
                  />
                  <p>Name</p>
                </div>
                <p>Comment goes here...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-users">
        <div className="hu-user">
          <div>
            <img
              src="https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt=""
            />
            <p>Name</p>
          </div>
          <button>Connect</button>
        </div>
        <div className="hu-user">
          <div>
            <img
              src="https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt=""
            />
            <p>Name</p>
          </div>
          <button>Connect</button>
        </div>
        <div className="hu-user">
          <div>
            <img
              src="https://lh3.googleusercontent.com/a/AEdFTp4zhbC2ZEr9-78CPrRzQ-gw3XMeB3tmwYtnu1G4=s512-p-k-rw-no"
              alt=""
            />
            <p>Name</p>
          </div>
          <button>Connect</button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
