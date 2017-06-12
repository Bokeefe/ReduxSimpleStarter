import React from 'react';

const VideoDetail = ({video})=>{
    if(!video){
        return <div>loading... </div>;
    }
        const videoId = video.id.videoId;
        const url = `http://youtube.com/embed/${videoId}`;
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-resonside-16by9">
                <iframe className="embed-resonsive-item" src={url}></iframe>
                {/*<div className="details">
                    <div className="">{video.snippet.title}</div>
                    <div className="">{video.snippet.description}</div>
                </div>*/}
            </div>
        </div>
    );
};

export default VideoDetail;