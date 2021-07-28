import React, {Component} from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Clarifai from 'clarifai';
import Navbar from './component/navbar/navbar';
import Logo from './component/logo/logo'
import Imageform from './component/imagelinkform/Imageform'
import Rank from './component/rank/rank'
import Frameimg from './component/frameimg/frameimg'

const app=new Clarifai.App({
  apiKey:'8ceb033c08e7479e9f37b92e06254394'
});
const params={
  
    particles: {
      
      number:{
        values:30,
        density:true,
        value_area:800
      }
    }
  

}

class App extends Component {
  constructor()
  {
    super();
    this.state={ input:'' ,
                imageurl:''
              }
  }

  onchanges=(event)=>{
     this.setState({input:event.target.value})
     console.log(event.target.value);
  }

  onSubmit = () => {
    this.setState({imageurl: this.state.input})
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL, 
      this.state.input)
        .then(response => console.log(response))   
        .catch(err => console.log(err))
    console.log(this.state.input)
  }
 render()
 {
   return(
     <>
     <Particles  className='particle'
              params={params}
      />
     <Navbar/>
     <Logo/>
     <Rank/>
     <Imageform onchanges={this.onchanges} onsubmit={this.onSubmit}/>
     <Frameimg input={this.state.input}/>
           
   


     </>
   )
 }
}

export default App
