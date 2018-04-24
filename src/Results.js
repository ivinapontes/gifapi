import React, { Component } from 'react';

class Result extends Component {
    render() {
        return (
            <div>
                {this.props.gifs.map((gif)=>{
                    return (
                        <div className = 'pics'>
                        <img key={gif.key} src= {gif.images.original.url} alt= ""/>
                        </div>
                    )
                })
            }
            </div>
        );
    }
}

export default Result;
