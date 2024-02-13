import './card.css';
import React from 'react';
import {Card,Typography, CardContent} from '@mui/material';
import { useState, useEffect } from 'react';



/*[title, videoID] */

function VidCard(props) {

const [Info, setInfo] = useState([['KA2kkauBNK8', 'Black Mirror: The Best Episode You Haven’t Watched'],['bu44IxER3HY', 'Why do Yearly Video Game Franchises still exist?'],['TQkxnr6iTRo', 'Best Of Rishaan 2020.'],['UTH6kfYPS_k', 'So I Became An Instagram Motivational Quote Page'],['QVmZMzDZ_IA', 'How I Won Finzar&#39;s Green Screen Challenge'],['1OJPQhChZGc', 'So I Did Photoshop Battles with my Discord Server']]);
const [Attributes, setAttributes] = useState(["ben","https://pbs.twimg.com/profile_banners/1166361953473875973/1652208941/1500x500",'https://www.youtube.com/watch?v=dQw4w9WgXcQ']);

  console.log("Info status at beginning", isAvailable(Info), Info);
  const attributes =[];
  var title =  "ben" ;
  var thumbnail = "https://pbs.twimg.com/profile_banners/1166361953473875973/1652208941/1500x500";
  var video = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  console.log(props, parseInt(props.index))

  useEffect(()=> {
    const getInformation = async () =>{
      await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCwieulz66aMjNSG8Opm_Wbg&maxResults=20&order=date&type=video&key=AIzaSyAirSBlM7m3z1x2iPt7K8Xau5fIgEBRlvQ")
      .then((response) => response.json())
      .then((data) => {
        console.log("API HAS BEEN CALLED")
        const tailoreddata = TailorData(data)
        setInfo(tailoreddata)
        console.log("MAYBE TAILORED", Info)
      })
      .then(() => {
        console.log("MAYBE TAILORED2", Info)
        const k = parseInt(props.index)
        attributes.push(Info[k][0])
        attributes.push(Info[k][1])
        console.log("ben",attributes)
      })
      .then(()=> {
        title =  attributes[1] ;
        thumbnail = "https://img.youtube.com/vi/"+ attributes[0] +"/maxresdefault.jpg";
        video = 'https://youtu.be/' + attributes[0] ;
        console.log("updated values", title, thumbnail, video);
        if (title.includes("&#39;")) {
        title = title.replace("&#39;","\'")
        } 
        setAttributes([title, thumbnail, video])
      })
    }
    getInformation()
    console.log("testing values", title, thumbnail, video);

  }, []);
 
  console.log("API TAILORED DATA", Info);
  console.log("Att", Attributes)

function isAvailable(Info) {
    if (Info.length != 0) {
      return true
    } else {
      return false
    }

}

function TailorData(Info) {
  const IDinfo = [];

  for (let i = 0; i < 6; i++) {

    const videoID = Info.items[i].id.videoId;
    const videoTitle = Info.items[i].snippet.title;
    const arr = [videoID, videoTitle];
    IDinfo.push(arr);
}
  return IDinfo
}
function CardData() {
  {
    for (let i = 0; i < 6; i++) {
      const item = Info.i;
      const attributes =[];

      attributes.push(item);
      };
    
    console.log("attributes", attributes);
            
     title =  attributes[0][1] ;
     thumbnail = "https://img.youtube.com/vi/"+ attributes[0][0] +"/maxresdefault.jpg";
     video = 'https://youtu.be/' + attributes[0][0] ;
     console.log("CardData video", video)
      console.log("CardData title", title)
      console.log("CardData thumbnail", thumbnail)
  }
}
    return(
        <div className='Card'>
        <a href={Attributes[2]} target="_blank" className='videolink'>
        <Card className='VideoCard'>
          <CardContent>
                <p className='title'>
                  {Attributes[0]}
                </p>
                
                
                  <img src={Attributes[1]} className='Thumbnail'/>
                
          </CardContent>
        </Card>
        </a>
        </div>
    )
  }

export default VidCard;