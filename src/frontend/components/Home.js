import { useState, useEffect } from 'react'
import { ethers } from "ethers"
import { Row, Col, Card, Button } from 'react-bootstrap'
import "./App.css"
const Home = ({ marketplace, nft }) => {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])
  const loadMarketplaceItems = async () => {
    // Load all unsold items
    const itemCount = await marketplace.itemCount()
    let items = []
    for (let i = 1; i <= itemCount; i++) {
      const item = await marketplace.items(i)
      if (!item.sold) {
        // get uri url from nft contract
        const uri = await nft.tokenURI(item.tokenId)
        // use uri to fetch the nft metadata stored on ipfs 
        const response = await fetch(uri)
        const metadata = await response.json()
        // get total price of item (item price + fee)
        const totalPrice = await marketplace.getTotalPrice(item.itemId)
        // get Address of NFT 
        const address = await nft.address;
        // Add item to items array
        items.push({
          totalPrice,
          itemId: item.itemId,
          seller: item.seller,
          name: metadata.name,
          description: metadata.description,
          image: metadata.image,
          address,
        })
      }
    }
    setLoading(false)
    setItems(items)
    // console.log(items);
  }

  function trimStringWithDots(inputString) {
    const maxLength = 17;
  
    if (inputString.length <= maxLength) {
      return inputString;
    }
  
    const start = Math.ceil((maxLength - 1) / 2); // To make room for the dots
    const end = inputString.length - Math.floor((maxLength - 1) / 2);
  
    return inputString.slice(0, start) + '...' + inputString.slice(end);
  }


  const buyMarketItem = async (item) => {
    await (await marketplace.purchaseItem(item.itemId, { value: item.totalPrice })).wait()
    loadMarketplaceItems()
  }

  useEffect(() => {
    loadMarketplaceItems()
  }, [])
  if (loading) return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Loading...</h2>
    </main>
  )
  return (
    <div className="flex justify-center">
      {items.length > 0 ? (
        <div className="px-5 container">
          <Row xs={1} md={2} lg={4} className="g-4 py-5">
            {items.map((item, idx) => (
              <div class="swiper-slide" key={idx}>


                <div class="Banner_threeSliderItem">

                  <div class="Banner_threeSliderImg">
                    <img src={item.image} alt="" />
                  </div>

                  <div class="text">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  <p class="">{trimStringWithDots(item.address)}</p>
                  </div>

                  <div class="profile_part">


                    <div class="left">

                      <button onClick={buyMarketItem(item)}>
                        buy NFT
                      </button>

                    </div>

                    <div class="left right">


                    
                    </div>
                    <div class="left">



                      <div class="text">


                        <h4> {ethers.utils.formatEther(item.totalPrice)} ETH</h4>
                      </div>

                    </div>

                  </div>

                </div>

              </div>
            ))}
          </Row>
        </div>
      ) : (
        <main style={{ padding: "1rem 0" }}>
          <h2>No listed assets</h2>
        </main>
      )}
    </div>

  );
}
export default Home