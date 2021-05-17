import React from 'react' ;

class Register extends React.Component {
  constructor(props){
    super(props) ;
    this.state = {
      password : '' ,
      email : '' ,
      name : ''
    }
  } 
  onEmailChange = (event)=>{
    this.setState({email : event.target.value})
  } 
  onNameChange = (event)=>{
    this.setState({name : event.target.value})
  } 
  onPasswordChange = (event)=>{
    this.setState({password : event.target.value})
  }
  onSignup = ()=>{
    console.log(this.state) ;
    fetch('https://smartbrain-api47.herokuapp.com/register' , {
      method : 'post' ,
      headers : {'content-type' : 'application/json'} ,
      body : JSON.stringify({
        email : this.state.email ,
        password : this.state.password ,
        name : this.state.name
      })
    }).then(response => response.json())
      .then(data =>{
        if(data.id)
        {
          this.props.loaduser(data) ;
          this.props.onRouteChange('Home') ;
        }
        else{
          alert(data) ;
        }
  })
}
  render() {
   const { onRouteChange } = this.props ;
    return(
      <div>
        <article className="br5 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw7 shadow-5 center">
        <main className="pa4 black-80">
  <div className="measure ">
    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
      <legend className="f2 fw6 ph0 mh0">Register</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
        <input onChange={this.onNameChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="name" name="Name"  id="email-address" />
      </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
      </div>

    </fieldset>
    <div className="">
      <input onClick={this.onSignup} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" type="submit" value="Sign Up" />
    </div>
  </div>
</main>
</article>
<button className='ta center' onClick={()=>onRouteChange('Signin')}> Signin </button>
</div>
    ); }
}
export default Register ;