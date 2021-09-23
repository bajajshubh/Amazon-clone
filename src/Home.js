import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img src="https://m.media-amazon.com/images/I/41F4syCw54L._SX1500_.jpg" className="homeImage" alt="" />
                <div className="home_row">
                <Product id="123456" title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses" price ={29.99} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAghpr-fedxLyE0f5bh41MoSISQzscp3mQMw&usqp=CAU" rating={5}/>
                <Product id="123457" title="Samsung 27 inch M5 Smart Monitor with Netflix, YouTube, Prime Video and Apple TV Streaming (LS27AM500NWXXL, Black)" price ={460.99} image="https://m.media-amazon.com/images/I/81P2heRBdYL._SL1500_.jpg" rating={4}/>
                
                </div>

                <div className="home_row">
                <Product id="123458" title="OnePlus Nord 2 5G (Blue Haze, 8GB RAM, 128GB Storage)" price ={60.99} image="https://m.media-amazon.com/images/I/61TnX0PmqES._SL1500_.jpg" rating={5}/>
                <Product id="123459" title="iQOO Z3 5G (Ace Black, 6GB RAM, 128GB Storage) | India's First SD 768G 5G Processor " price ={30.00} image="https://m.media-amazon.com/images/I/61uIgwiP90S._SL1200_.jpg" rating={4}/>
                <Product id="123460" title="Mi 10i 5G (Midnight Black, 6GB RAM, 128GB Storage) - 108MP Quad Camera | Snapdragon 750G Processor" price ={26.98} image="https://m.media-amazon.com/images/I/71+KJpeI2rL._SL1500_.jpg" rating={3}/>
                                    
                </div>

                <div className="home_row">
                <Product id="123461" title="ASUS VivoBook 14 (2020) Intel Core i3-1005G1 10th Gen 14-inch (35.56 cms) FHD Thin and Light Laptop (4GB/256GB NVMe SSD/Integrated Graphics/Windows 10/MS Office 2019/Silver/1.6 kg), X415JA-EK312TS" price ={490.99} image="https://m.media-amazon.com/images/I/71WuDXpTAlL._SL1500_.jpg" rating={2}/>
                
                </div>
            </div>
        </div>
    )
}

export default Home
