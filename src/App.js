import React,{Component} from 'react';
import api from './utils/api';
import Result from './Results';

class App extends Component {
 constructor(props){
   super(props);
   this.state={
     searchinput:null,
     gifs:null
   }
   this.changeInput=this.changeInput.bind(this);
   this.showResult=this.showResult.bind(this);
 }

 showResult(){
   api.getGifs(this.state.searchinput).then(function(r){
     this.setState({gifs:r})  
   }.bind(this))
 }
 
 changeInput(event){
   this.setState({searchinput:event.target.value})
 }
  render() {
    return(
      <div>
        <div className= "title">Ivi's Gif Library</div>
          <input onChange = {this.changeInput} type = "text" placeholder= "search.." name="searchinput" id= "searchinput"/>
          <button onClick= {this.showResult}>Search</button>
      
           {this.state.gifs!==null && <Result gifs= {this.state.gifs}/>}
      </div>
    )
  }
}
 export default App;
