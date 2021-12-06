import React, {Component} from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import ProductData from './Product-Data/ProductData';
import ProductDetail from './Product-Details/ProductDetails';
import ProductPreview from './Product-Preview/ProductPreview';

class App extends Component {
  state = {
    productData : ProductData,
    currentPreviewImagePos: 0,
    currentSelectedFeature: 0
  }

  onColorOptionClick = (pos) => {
    this.setState({currentPreviewImagePos: pos});
  }
  onFeatureOptionClick = (pos) =>{
  this.setState({currentSelectedFeature: pos});
  }
  render(){
    return (
      <div className="App">
        <NavBar />
        <div className="MainContainer">
      <ProductPreview 
      currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl} 
      currentSelectedFeature ={this.state.currentSelectedFeature}
      />
      <ProductDetail data={this.state.productData} onColorOptionClick={this.onColorOptionClick}
      onFeatureOptionClick={this.onFeatureOptionClick}
      currentPreviewImagePos ={this.state.currentPreviewImagePos}
      currentSelectedFeature ={this.state.currentSelectedFeature}/>
      </div>
      </div>
    )
}
}

export default App;
