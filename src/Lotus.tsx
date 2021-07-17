import React from "react"
import {gsap} from "gsap"

class Lotus extends React.Component {
 	constructor(props:any){
 		super(props)
 	}
    componentDidMount(){
        let tl = gsap.timeline({paused:true});
        tl.fromTo('g', {scale: 0}, {scale: 1, duration:2}, 0);
        tl.to("g", {duration:2, opacity:0.7, fill:"rgb(253, 123, 144)", stroke:"rgb(253, 123, 144)"}, 0)
        tl.to("#innerleft", {duration:2, rotation:-30, ease: "power2.inOut"}, 0);
        tl.to("#left", {duration:2, rotation:-60, ease: "power2.inOut"}, 0);
        tl.to("#farleft", {duration:2, rotation:-80, ease: "power2.inOut"}, 0.15);
        tl.to("#innerright", {duration:2, rotation:30, ease: "power2.inOut"}, 0);
        tl.to("#right", {duration:2, rotation:60, ease: "power2.inOut"}, 0);
        tl.to("#farright", {duration:2, rotation:80, ease: "power2.inOut"}, 0.15);
        tl.to("text", {duration:.5, opacity:1, ease: "power2.inOut"}, 2);
        tl.play()
    }
    render (){
        return <svg version="1.1" id="Layer_1" x="0px" y="0px" width="200" viewBox="0 0 512 512">
                    <g>
                        <g id="middle">
                            <path d="M256,94.349c0,0-67.301,57.307-67.301,128s67.301,128,67.301,128s67.301-57.307,67.301-128S256,94.349,256,94.349z"/>
                        </g>
                        <g id="innerleft">
                            <path d="M256,94.349c0,0-67.301,57.307-67.301,128s67.301,128,67.301,128s67.301-57.307,67.301-128S256,94.349,256,94.349z"/>
                        </g>
                        <g id="innerright">
                            <path d="M256,94.349c0,0-67.301,57.307-67.301,128s67.301,128,67.301,128s67.301-57.307,67.301-128S256,94.349,256,94.349z"/>
                        </g>
                        <g id="right">
                            <path d="M256,94.349c0,0-67.301,57.307-67.301,128s67.301,128,67.301,128s67.301-57.307,67.301-128S256,94.349,256,94.349z"/>
                        </g>
                        <g id="left">
                            <path d="M256,94.349c0,0-67.301,57.307-67.301,128s67.301,128,67.301,128s67.301-57.307,67.301-128S256,94.349,256,94.349z"/>
                        </g>
                        <g id="farleft">
                            <path d="M256,94.349c0,0-67.301,57.307-67.301,128s67.301,128,67.301,128s67.301-57.307,67.301-128S256,94.349,256,94.349z"/>
                        </g>
                        <g id="farright">
                            <path d="M256,94.349c0,0-67.301,57.307-67.301,128s67.301,128,67.301,128s67.301-57.307,67.301-128S256,94.349,256,94.349z"/>
                        </g>
                    </g>
                    <text id="titletext">Mana Ohana</text>
                </svg>
    }
}
export default Lotus
