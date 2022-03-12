import React,{Component} from "react";
import axios from "axios";

export default class Register extends Component{

    handleSubmit = e =>{

        e.preventDefault();
       

        const dataa = {
            fullname:this.firstname,
           
            email:this.email,
            password:this.password,
            
        }
        let headers = {    
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
              
          }//https://fakeapi.jsonparseronline.com/posts
        //localStorage.setItem('token',res.token);زمانی که توکن داشته باشیم که الان نداریم

        axios
            .post(
                "https://toplearnapi.ghorbany.dev/api/register",
                JSON.stringify(dataa),
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            ).catch(
           err=>{
               console.log(err);
           }
       )

    };

render(){
    return(
       <form onSubmit={this.handleSubmit}>
           <h3>Sign up</h3>

           <div className="from-group">
               <label>
                   First Name
               </label>
               <input type="text" className="form-control" placeholder="First Name"
               onChange={e=>this.fistname=e.target.value} />
           </div>

           <div className="from-group">
               <label>
                   Last Name
               </label>
               <input type="text" className="form-control" placeholder="Last Name"
               onChange={e=>this.lastname=e.target.value} />
           </div>
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
           <div className="from-group">
               <label>
                  Password
               </label>
               <input type="password" className="form-control" placeholder="Confirm Password"
             onChange={e=>this.confirmPassword=e.target.value} />
           </div>
      <button className="btn btn-primary btn-block">Sign Up</button>
       </form>

    )
}
}