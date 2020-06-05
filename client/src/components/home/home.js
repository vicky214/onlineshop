import React,{useState} from 'react'
import Recomended from './Recomended'
import Homecarousel from './Homecarousel'
import Homecollection from './Homecollection'
import Latestphone from './Latestphone'
import Footer from '../Footer'
export default function home() {
    return (
       <div style={{backgroundColor:" #e6fff8"}}>
            <Homecarousel />
            <Recomended />
            <Latestphone />
            <Homecollection />
            <Footer />
        </div>
    )
}
