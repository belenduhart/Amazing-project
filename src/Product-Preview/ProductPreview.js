import React from "react";
import './ProductPreview.css';

const ProductPreview = (props) =>{
    const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
    const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();
    
    return (
        <div className="ProductPreview">
            <img src={props.currentPreviewImage} alt="watch Preview"/> 
            {
                props.currentSelectedFeature === 1 ?  
                <div className="HeartBeatSection">
                <i className="fas fa-heartbeat"></i>
                <p>
                    78
                </p>
            </div> : 
            <div className="TimeSection">
                <p>
                    {`${currentHour}:${currentMinute}`}
                </p>
            </div>
            }
        </div>
    )
}

export default ProductPreview;
