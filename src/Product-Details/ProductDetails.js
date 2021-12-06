import React from "react";
import './ProductDetail.css';

const ProductDetail = (props) => {
    const ColorOptions = props.data.colorOptions.map((item,pos) => {
        const colorArr = ['ProductImage']
        if (pos === props.currentPreviewImagePos){
            colorArr.push('SelectedProductImage')
        }
    return(
        <img className={colorArr.join(' ')} src={item.imageUrl} alt={item.styleName} key={pos}
        onClick={()=>props.onColorOptionClick(pos)}/>
    );}
    )
    const featureList = props.data.featureList.map ((item,pos) => {
        const featureArr = ['FeatureItem']
        if(pos === props.currentSelectedFeature){
            featureArr.push('SelectedFeatureItem')
        }
        return(
            <button key={pos} className={featureArr.join(' ')} 
            onClick={()=>props.onFeatureOptionClick(pos)} >
                {item}
            </button>
        );
    }
    )
    return(
        <div className="ProductData">
        <h1 className="ProductTitle">
        {props.data.title}

        </h1>
        <p className="ProductDescription">
            {props.data.description}
        </p>
        <h2>uS$ 200.-</h2>
        <h3 className="SectionHeading">
            Select Color:
        </h3>
        <div className="Selector">
            <div>
            {ColorOptions}
            </div>
        </div>
        <h3 className="SectionHeading">
            Features:
        </h3>
        <div>
            {featureList}
        </div>
        <div className="Buy">
        <button className="PrimaryButton">
            Buy Now
        </button>
        <p className="OutOfOrder">Temporarily out of stock</p>
        </div>
        </div>
    )
}

export default ProductDetail;