import React, { useState } from 'react'
import "./App.css"
const App = () => {

    const isEmail = (emailval) => {
        var atsymbol = emailval.indexOf("@");
        if (atsymbol < 1) return false;
        var dot = emailval.indexOf(".");
        if (dot === emailval.length - 1) return false;
        return true;
    }

  
    const Validat = () => {

        setIsFormsub(true);
        let s1 = document.getElementById("selection");
        if (s1.value == "choose") {
            setselecterr("Select any city");

        } else {
            setselecterr("");
        }

        if (name1 === "") {
            setName1Err("Name can not be empty");
        } else if (name1.length <= 3) {
            setName1Err("Name must be grater than 3 characters");
        } else {
            setName1Err("");
        }

        if (address1 === "") {
            setAddessErr("Address can not be empty");

        } else if (address1.length <= 5) {
            setAddessErr("Address must be grater than 5 characters");

        }
        else {
            setAddessErr("");
        }
        if (email1 === "") {
            setemailerr("Email can not be empty");

        } else if (email1.length <= 5) {
            setemailerr("Email must be grater than 5 characters");

        } else if (!isEmail(email1)) {
            setemailerr("Enter Valid Email Adreess");
        } else {
            setemailerr("");

        }
        if (mobile1 === "") {
            setmobileErr("Mobile Number can not be empty");

        } else if (mobile1.length !== 10) {
            setmobileErr("Mobile Number must have 10 characters");
        }
        else {
            setmobileErr("");
        }

        if (radio === "") {
            setradioerr("Select your gender")
          
        } else {
            setradioerr("");
        }
     
    
      if(!(name1 && address1 && email1 && mobile1 && radio && selectre)){
            alert("please enter data");
      }else if((name1 && address1 && email1 && mobile1 && radio && selectre) && !togglebtn){
                setData(data.map((curnt)=>{
                if(curnt.id == isEdited){
                    return {...curnt, name: name1,
                        address: address1,
                        email: email1,
                        mobile: mobile1,
                        gender: radio,
                        city: selectre,}
                }
                return curnt;
                }))
      
      }
      else{
    const val = {
            id:new Date().getTime().toString(),
            name: name1,
            address: address1,
            email: email1,
            mobile: mobile1,
            gender: radio,
            city: selectre,

        }
        setData([...data, val]);
        setName1("");
        setAddess("");
        setemail1("");
        setmobile1("");
        setSeletre("");
        setRadio("");
        setSeletre("choose")
        console.log(data);
    }  

     setName1("");
        setAddess("");
        setemail1("");
        setmobile1("");
        setSeletre("");
        setRadio("");
        setSeletre("choose");
        settogglebtn(true); 
               
    }
    const reseted = () => {
        setName1("");
        setAddess("");
        setemail1("");
        setmobile1("");
        setSeletre("");
        setRadio("");
        setSeletre("choose")


    }
    const handleChange = (event) => {
        setSeletre(event.target.value);
        console.log(selectre);
    };
    const itemdeleted = (index) =>{
        let updatedData = data.filter((curnt)=>{
            return index !== curnt.id;
        })
        setData(updatedData);
    }
    const itemedited = (index) =>{
        let edititem = data.find((curnt)=>{
            return index == curnt.id
        })
        setName1(edititem.name);
        setAddess(edititem.address);
        setemail1(edititem.email);
        setmobile1(edititem.mobile);
        setRadio(edititem.gender);
        setSeletre(edititem.city);
        settogglebtn(false);
        setisEdited(index);
    }

    const [data, setData] = useState([]);
    const [name1, setName1] = useState("")
    const [name1Err, setName1Err] = useState("");
    const [address1, setAddess] = useState("")
    const [addressrerr, setAddessErr] = useState("");
    const [email1, setemail1] = useState("");
    const [emailerr, setemailerr] = useState("");
    const [isFormsub, setIsFormsub] = useState(false);
    const [mobile1, setmobile1] = useState("");
    const [mobileErr, setmobileErr] = useState("");
    const [radioerr, setradioerr] = useState("");
    const [radio, setRadio] = useState("");
    const [selecterr, setselecterr] = useState("");
    const [selectre, setSeletre] = useState("choose");
    const [togglebtn, settogglebtn] = useState(true);
    const [isEdited, setisEdited] = useState(null);
//    if((name1Err.length>0 && addressrerr.length>0 && emailerr.length>0 && mobileErr.length>0 && radioerr.length>0 && selecterr.length>0 )){
//            settogglebtn(false);
//    }

    return (
        <>
            <div className="container  mt-3">
                <div className="row mt-3">
                    <div className="col-12 text-center ">
                        <h1 className="display-6 text-primary">Registration</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto mt-3  ">
                        {/* <form id="form"> */}
                        <div className={isFormsub ? name1Err ? "form_control error" : "form_control success" : "form_control"}>
                            <label>Name</label>
                            <input value={name1} onChange={(e) => { setName1(e.target.value) }} type="text" id="name" placeholder="Enter full name.." />
                            <i className="bi bi-check2-circle"></i>
                            <i className="bi bi-exclamation-circle"></i>
                            <p style={{ color: "red" }} >{name1Err}</p>
                        </div>
                        <div className={isFormsub ? addressrerr ? "form_control error" : "form_control success" : "form_control"}>
                            <label>Address</label>
                            <input type="address" id="address" value={address1} onChange={(e) => setAddess(e.target.value)} placeholder="Enter full address" />
                            <i className="bi bi-check2-circle"></i>
                            <i className="bi bi-exclamation-circle"></i>
                            <p style={{ color: "red" }} >{addressrerr}</p>
                        </div>
                        <div className={isFormsub ? emailerr ? "form_control error" : "form_control success" : "form_control"}>
                            <label>Email</label>
                            <input type="email" id="email" value={email1} onChange={(e) => setemail1(e.target.value)} placeholder="Enter Email Address.." />
                            <i className="bi bi-check2-circle"></i>
                            <i className="bi bi-exclamation-circle"></i>
                            <p style={{ color: "red" }}>{emailerr}</p>
                        </div>
                        <div className={isFormsub ? mobileErr ? "form_control error" : "form_control success" : "form_control"} >
                            <label>Mobile</label>
                            <input type="number" id="mobile" value={mobile1} onChange={(e) => setmobile1(e.target.value)} placeholder="Mobile.." />
                            <i className="bi bi-check2-circle"></i>
                            <i className="bi bi-exclamation-circle"></i>
                            <p style={{ color: "red" }}>{mobileErr}</p>
                        </div>
                        <div className={isFormsub ? radioerr ? "form_controlradio error" : "form_controlradio success" : "form_controlradio"}>
                            <label className="genlabel">Gender</label>
                            <div className='genderch' >
                                <label className='me-2'>Male</label>
                                <input className='me-2' type="radio" value="Male" checked={radio === "Male"} onChange={(e) => { setRadio(e.target.value); }} name="male" id="grnder" />
                                <label className='me-2'>Female</label>
                                <input type="radio" name="male" value="Female" checked={radio === "Female"} onChange={(e) => { setRadio(e.target.value); }} id="gender" />
                                <i className="bi bi-check2-circle"></i>
                                <i className="bi bi-exclamation-circle"></i>
                                <p style={{ color: "red" }}>{radioerr}</p>
                            </div>

                        </div>
                        <div className={isFormsub ? selecterr ? "form_control error" : "form_control success" : "form_control"} style={{ height: "70px", }}>
                            <label className="me-2">City</label>
                            <select name="selection" id="selection" value={selectre} onChange={handleChange}>
                                <option value="choose">Choose</option>
                                <option value="Ahmedabad" >Ahmedabad</option>
                                <option value="Surat">Surat</option>
                                <option value="Rajkot">Rajkot</option>
                            </select>
                            <i id="checkbtn" className="bi bi-check2-circle"></i>
                            <i id="errorbtn" className="bi bi-exclamation-circle"></i>
                            <p style={{ color: "red" }}>{selecterr}</p>

                        </div>
                        <div className="text-center">
                            {togglebtn ? <button id='subbtn' onClick={Validat}>Submit</button>:
                                         <button id='subbtn' onClick={Validat}>Add item</button>}
                            <button id="resetbtn" onClick={reseted} >Reset</button>
                        </div>
                        {/* </form> */}
                    </div>
                </div>
            </div>
            <div className='secondiv'>
                <div className='childiv'>
                        <table className={isFormsub ? "childdiv success" : "childdiv" }>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Gender</th>
                                    <th>City</th>
                                    <th>Operation</th>
                                </tr>
                            </thead>
                            {data.map((curnt) => {
                                return (
                                    <>
                                        <tbody>
                                            <tr>
                                                <td>{curnt.name}</td>
                                                <td>{curnt.address}</td>
                                                <td>{curnt.email}</td>
                                                <td>{curnt.mobile}</td>
                                                <td>{curnt.gender}</td>
                                                <td>{curnt.city}</td>
                                                <td><diV className="opbtn"><i class="bi bi-pencil-square me-3 text-success" onClick={()=>{itemedited(curnt.id)}}></i>
                                                    <i class="bi bi-trash-fill text-danger" onClick={()=>{itemdeleted(curnt.id)}}></i></diV></td>
                                            </tr>
                                           
                                        </tbody>
                                    </>);
                            })

                            }
                        </table>

                    
                </div>
            </div>




        </>
    )
}

export default App;
