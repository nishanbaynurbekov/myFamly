import React from "react";
import { useParams } from "react-router-dom";
import { nurbek } from "./data/index1";
import { Link } from "react-router-dom";

function Service (){
    const {id} = useParams()
    const item = nurbek.find((x) => x.id == id)

    return (
        <div className=" top">
            <h2>{item.name}</h2>
            <img className="foto" src={item.img} alt="" />
            <h5>мектепте {item.mektep.azyr}</h5>
            <h6>мектепги абал: <br />{item.mektep.abal}</h6>
            <p> ийгилиги: <br />{item.mektep.iygilik}</p> <br />
            {
                item.video && (
                    <div style={{marginTop: "20px"}}>
                    <video width="400px" controls>
                  <source src={item.video} type="video/mp4" />
                    </video>
                    </div>
                )
            }
            {
                item.image && (
                    <div style={{marginTop: "20px"}}>
                        <img className="foto" src={item.image}/>
                    </div>
                )
            }
            <Link to="/"><button>артка</button></Link>
        </div>
    )
}

export default Service