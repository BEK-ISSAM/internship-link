
import React , {useState} from "react";
import axios from 'axios';
 
export default function AddJobs(){

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [datePosted, setDatePosted] = useState();
    const [type, setType] = useState();
    const [contrat, setContrat] = useState();
    const [salary, setSalary] = useState();
    const [location, setLocation] = useState();
    const [requirements, setRequirements] = useState();
    const [responsibilities, setResponsibilities] = useState();
    const [postExpiryDate, setPostExpiryDate] = useState();
    const [compagnies, setcompagnies] = useState();
  
  
    const Submit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:3000/CreatJob' ,{title , description , compagnies , datePosted , type , contrat , salary , location , requirements , responsibilities , postExpiryDate})
        .then(result =>console.log(result))
        .catch(err=>console.log(err))
       
    }
  

    const today = new Date().toISOString().split('T')[0];

    return( <>
         <form onSubmit={Submit} >
      <div className="form-group">
        <label htmlFor="">Titre</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Entrer le titre"
          onChange={(e)=>setTitle(e.target.value)}
        />
        <small id="emailHelp" className="form-text text-muted">
         *
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Description</label>
        <input
          type="Text"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Description"
          onChange={(e)=>setDescription(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Compagnies</label>
        <input
          type="Text"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Description"
          onChange={(e)=>setcompagnies(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Date</label>
        <input
          type="Date"
          className="form-control"
          id="exampleDate"
          value={today}
          onMouseMove={(e)=>setDatePosted(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Type</label>
        <input
          type="Text"
          className="form-control"
          id="exampleType"
          placeholder="Type"
          onChange={(e)=>setType(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Contrat</label>
        <input
          type="Text"
          className="form-control"
          id="exampleContart"
          placeholder="Contrat"
          onChange={(e)=>setContrat(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Salaire</label>
        <input
          type="number"
          
          className="form-control"
          id="exampleSalaire"
          placeholder="Salaire"
          onChange={(e)=>setSalary(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Localisation</label>
        <input
          type="Text"
          className="form-control"
          id="exampleLocalisation"
          placeholder="Localisation"
          onChange={(e)=>setLocation(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Exigence</label>
        <input
          type="Text"
          className="form-control"
          id="exampleExigence"
          placeholder="Exigence"
          onChange={(e)=>setRequirements(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Responsabilite</label>
        <input
          type="Text"
          className="form-control"
          id="exampleResponsabilite"
          placeholder="Responsabilite"
          onChange={(e)=>setResponsibilities(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Date d'expiration</label>
        <input
          type="date"
          className="form-control"
          id="exampleDateDexpiration"
          placeholder="Date d'expiration"
          onChange={(e)=>setPostExpiryDate(e.target.value)}
        />
      </div>


      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </>
    );
}