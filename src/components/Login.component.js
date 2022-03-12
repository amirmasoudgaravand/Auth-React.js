import React,{Component} from "react";
import axios from "axios";

export default class Login extends Component{
    handleSubmit = e=>{
        e.preventDefault();
        const data ={
            email:this.email,
            password:this.password
        }
        axios.post('http://localhost:8000/login',data).then(res=>{
            console.log(res);
        }).catch(
            err=>{
                console.log(err)
            }
        )
    }
render(){
    return(
        <form onSubmit={this.handleSubmit}>
           <h3>Login</h3>

           <div className="from-group">
               <label>
                  Email
               </label>
               <input type="text" className="form-control" placeholder="Email"
               onChange={e=>this.email=e.target.value} />
           </div>
           <div className="from-group">
               <label>
                  Password
               </label>
               <input type="password" className="form-control" placeholder="password"
               onChange={e=>this.password=e.target.value} />
           </div>
         
      <button className="btn btn-primary btn-block">Sign Up</button>
       </form>
    )
}
}