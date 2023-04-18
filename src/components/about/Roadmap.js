import React from 'react'
import "./Roadmap.css"
export const Roadmap = () => {
  return (
    <div className='roadmappage'>
        <div className='heading'>BITMEMOIR ROADMAP 2023</div>
        <div className='qbox'> 
            <div className='card'>
                <div className='container'>
                    <div className='headingq'>2023 Quarter 2</div>
                    <ul className='listq'>
                        <li>Community Building</li>
                        <li>White Paper Release</li>
                        <li>BitMemoir Mainnet on Polygon</li>
                        <li>BitWallet Mainnet on Polygon</li>
                        <li>Partnerships Line Up</li>
                    </ul>
                </div>
            </div>
            <div className='card'>
                <div className='container'>
                <div className='headingq'>2023 Quarter 3</div>
                <ul className='listq'>
                    <li>BitMemoir Token IDO Launch on Arbitrum</li>
                    <li>BitMemoir Token Dex Listing</li>
                    <li>BitMemoir Token Cex Listing</li>
                    <li>BitMemoir Mainnet on Arbitrum</li>
                    <li>BitWallet Multichain support</li>
                    <li>Partnerships Announcements - 10 plus</li>
                </ul>
                </div>
            </div>
            <div className='card'>
                <div className='container'>
                <div className='headingq'>2023 Quarter 4</div>
                <ul className='listq' >
                    <li>Marketing</li>
                    <li>More Adoption of Bitmemoir and Bitwallet</li>
                    <li>BitWallet integration with other Dapps</li>
                    <li>BitWallet will support more chains</li>
                    <li>New NFT Utility Features on Bitmemoir</li>
                    <li>Listing in Major CEX</li>
                </ul>
                </div>
            </div>
        </div>
    </div>
  )
};
