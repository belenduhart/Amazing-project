
const ProductData = {
        title: 'Banana Watch 2.0',
        description: 'Meet Banana Sense, our most advanced health smartwatch. Make smarter choices for your well-being with innovative sensors that track Health Metrics, sleep & activity and help manage stress.',
        colorOptions: [
            {
                styleName: 'Black Strap',
                imageUrl: 'https://imgur.com/iOeUBV7.png'
            },
            {
                styleName: 'Red Strap',
                imageUrl: 'https://imgur.com/PTgQlim.png'
            },
            {
                styleName: 'Blue Strap',
                imageUrl: 'https://imgur.com/Mplj1YR.png'
            },
            {
                styleName: 'Purple Strap',
                imageUrl: 'https://imgur.com/xSIK4M8.png'
            },
        ],
        featureList: [
            "Time", "Heart Rate"
        ]
    }
    
    Object.freeze(ProductData); //This line of code just makes your object as a constant. No values can be updated.
    
export default ProductData;