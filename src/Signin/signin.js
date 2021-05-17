import React from 'react' ;
import '../app.css' ;
class Signin extends React.Component {
  constructor(props){
    super(props) ;
    this.state = {
      signinPassword : '' ,
      signinEmail : ''
    }
  } 
  onEmailChange = (event)=>{
    this.setState({signinEmail : event.target.value})
  } 
  onPasswordChange = (event)=>{
    this.setState({signinPassword : event.target.value})
  }
  onSignin = ()=>{
    console.log(this.state) ;
    fetch('https://smartbrain-api47.herokuapp.com/signin' , {
      method : 'post' ,
      headers : {'content-type' : 'application/json'} ,
      body : JSON.stringify({
        email : this.state.signinEmail ,
        password : this.state.signinPassword
      })
    }).then(response=>response.json())
    .then(user =>{
      if(user.id)
      {
        this.props.loaduser(user) ;
        this.props.onRouteChange('Home') ;
      }
      else{
        alert(user) ;
      }
    })
  }
  render(){
    const { onRouteChange } = this.props ;
    return(
      <div>
        <img src="https://images.cooltext.com/5529377.png" width="700" height="110" alt="Smart Brain"  />
    <article className="br5 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw7 shadow-5 center">
        <main className="pa4 black-80">
  <div className="measure ">
    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
      <legend className="f2 fw6 ph0 mh0">Sign In</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"
        onChange={this.onPasswordChange} />
      </div>
    </fieldset>
    <div className="">
      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" type="submit" value="Sign in"
      onClick={this.onSignin} />
    </div>
    <div className="lh-copy mt3">
      <a href="#0" className="f6 link dim black db pointer" onClick={()=> onRouteChange('Register')}>Register</a>
    </div>
  </div>
</main>
</article>
</div>
    ); }
}
export default Signin ;
