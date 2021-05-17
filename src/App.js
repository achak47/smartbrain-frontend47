import React,{Component} from 'react';
import './App.css';
import Signin from './Signin/signin' ;
import Register from './Register/register' ;
import Particles from 'react-particles-js';
import Navigation from './Navigation/navigation';
import Logo from './LOGO/logo';
import Imag from './Image/image';
import Rank from './rank/rank' ;
import Facedetect from './Face/facedetection.js';
const particlesop = {
  particles: {
    number: {
      value : 75,
      density :{
        enable: true,
        value_area: 800
      }

    } 
  }
}
const initialstate = {
  input: '' ,
  imageurl: '' ,
  box: {} ,
  route: 'Signin' ,
  isSignin : false ,
  user : {
    id : '' ,
    name : '' ,
    email : '' ,
    entries : 0 , 
    joined : '' 
  }
}


class App extends Component{
  constructor(){
    super() ;
    this.state = initialstate ;
  }
  loaduser = (data) => {
    this.setState({user : {
      id : data.id ,
      name : data.name ,
      email : data.email ,
      entries : data.entries ,
      joined : ''
    }}) 
  }
  componentDidMount(){
     fetch('https://smartbrain-api47.herokuapp.com').then(response => response.json())
     .then(console.log) ;
  }
  Calculatefacebox = (data) =>{
    const box = data.outputs[0].data.regions[0].region_info.bounding_box ;
    const image = document.getElementById('inputimage') ;
    const width = Number(image.width) ;
    const height = Number(image.height) ;
    console.log(width,height) ;
    return {
      leftCol: box.left_col * width ,
      topRow: box.top_row * height ,
      rightCol: width - (box.right_col * width) ,
      bottomRow: height - (box.bottom_row * height) 
    }
  }
  displayFaceBox = (box) => {
    this.setState({box: box}) ;
    console.log(box) ;
  }
  onInputchange =(event)=>{
    this.setState({input : event.target.value}) ;
  }
  onButtonSubmit = ()=>{
    this.setState({imageurl : this.state.input}) ;
    fetch('https://smartbrain-api47.herokuapp.com/imageUrl' , {
          method : 'post' ,
          headers : {'content-type' : 'application/json'} ,
          body : JSON.stringify({
                input : this.state.input
          })
        }).then(response => response.json())
    .then(response =>{ 
      if(response){
        fetch('https://smartbrain-api47.herokuapp.com/image' , {
          method : 'put' ,
          headers : {'content-type' : 'application/json'} ,
          body : JSON.stringify({
                id : this.state.user.id ,
                entries : this.state.user.entries
          })
        }).then(response => response.json())
        .then(count => Object.assign(this.state.user , { entries : count }))
      }
      return(this.displayFaceBox(this.Calculatefacebox(response))) 
    }) 
     .catch(err => console.log(err)) 
   }
  onRouteChange = (route)=>{
    this.setState({route:route}) ;
    if(route === 'Signin')
    { this.setState(initialstate) ; }
  }
  render(){
      return (
    <div className="App">
      <Particles className="part" 
                params={particlesop} />
    {this.state.route === 'Signin'
     ? <Signin onRouteChange={this.onRouteChange} loaduser={this.loaduser} />
    : (
      this.state.route === 'Register' ? <Register onRouteChange={this.onRouteChange} loaduser={this.loaduser} />
    : <div>
     <Navigation onRouteChange={this.onRouteChange} />
     <Logo />
     <Rank name={this.state.user.name} entries={this.state.user.entries} />
     <Imag onInputchange={this.onInputchange} onButtonSubmit={this.onButtonSubmit} />
    <Facedetect imageUrl={this.state.imageurl} box={this.state.box}   /> 
    </div>)
    }
    </div>
  ); }
}
export default App ;
// NOTE :- If we want to destructure and intead of say this.state.imageurl we want to use just
//imageurl ignoring the this. part , so we basically have to do at the beginning of the render ,
// {input , imageurl , box , route} = this.state ;

