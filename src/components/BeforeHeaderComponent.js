import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class BeforeHeader extends Component {

    componentDidMount(){
        this.animation()
    }

    animation(){
        var element = document.getElementById("move");
        var pos = 0;
        setInterval(frame, 8);

        function frame(){
            if(pos === document.body.clientWidth){
                pos = -10;
            } else {
                pos++
                element.style.left = pos + 'px'
            }
        }
    }


    render(){
            return (
                <div className=" topNavBar col-12 d-none d-lg-block text-center">
                    <p id="move"> La reference  de produits et services informatiques</p>
                </div>
            )
        }
}

export default BeforeHeader;