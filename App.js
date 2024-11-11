import "./App.css"
import React, { useEffect, useState } from 'react';



function App() {
 
  const emptyStagiaire = {
                            id:null,
                            matricule:"",
                            nom:"",
                            prenom:"",
                            ville:"",
                            codePostal:null,
                            moyenne:null

  }
  const [stagiaire, setStagiaire] = useState(emptyStagiaire);
  const [stagiaires, setStagiaires] = useState([]);
  

  function onInputChange(e){
    let name = e.target.name
    let val= e.target.value
    let _stagiaire = {...stagiaire}
    _stagiaire[name] = val
    setStagiaire(_stagiaire)

  }
useEffect(
  ()=>{
    stagiaires.length > 0 ?
    setStagiaire({...stagiaire, id :stagiaires[stagiaires.length - 1].id + 1}) :
    setStagiaire({...stagiaire,id:1})
  }
  ,[stagiaires.length])

  const listSt =[{
    id:1,
    matricule:"M010605",
    nom:"bakarrouch",
    prenom:"fatima",
    ville:"casa",
    codePostal:12,
    moyenne:19

  } ]

  useEffect(()=>{
    setStagiaires(listSt)
  },[])

  function ajouter(){
    
    //conditions
  let stFound = stagiaires.find(function(stagiaire){
    return stagiaires.matricule === stagiaire.matricule
  })

 
    if (!stagiaire.matricule || !stagiaire.nom || !stagiaire.ville || !stagiaire.codePostal || stagiaire.moyenne === '') {
      alert('Tous les champs sont obligatoires.');
      return;
    }

      if (isNaN(stagiaire.moyenne) || stagiaire.moyenne < 0 || stagiaire.moyenne > 20) {
        alert('La moyenne doit être un nombre entre 0 et 20.');
        return;
      }
       
   
   if(stFound){
    alert('matricule doit etre unique');
  }
  setStagiaires([...stagiaires, stagiaire]);


  }


  

  

 function modifier(){
  let newStg = stagiaires.find(function(item){
   return item.id ===stagiaire.id

  })
  setStagiaires(newStg)
 }
  

  return (
    
    <> 
    <div>

    <label>ID:</label>
    <input
      type="text"
      name="id"
      onChange={onInputChange}
      value ={stagiaire.id}
      readOnly
    
    />
 
    <label>Matricule:</label>
    <input
      type="text"
      name="matricule"
      value ={stagiaire.matricule}
      onChange={onInputChange}
    
    />
  </div>
  <div>
    <label>Nom:</label>
    <input
      type="text"
      name="nom"
      value ={stagiaire.nom}
      onChange={onInputChange}
     
    />
  </div>

  <div>
    <label>Prenom:</label>
    <input
      type="text"
      name="prenom"
      value ={stagiaire.prenom}
      onChange={onInputChange}
     
    />
  </div>

  <div>
    <label>Ville:</label>
    <input
      type="text"
      name="ville"
      value ={stagiaire.ville}
      onChange={onInputChange}

      
    
    />
  </div>
  <div>
    <label>Code Postal:</label>
    <input
      type="text"
      name = "codePostal"
      value ={stagiaire.codePostal}
      onChange={onInputChange}
      
     
    />
  </div>
  <div>
    <label>Moyenne:</label>
    <input
      type="number"
      name = "moyenne"
      value ={stagiaire.moyenne}
      onChange={onInputChange}
    
    />
  </div>
  <button type="button"  onClick={ajouter}>Ajouter</button>
  <button type="button" >Filtrer ville et nom</button>
  <button type="button" >Vider</button>
  <button type="button" >Initialiser recherche</button><br></br>

  <div>
        <h3>Liste des Stagiaires</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Matricule</th>
              <th>Nom</th>
              <th>Prenom</th>
              <th>Ville</th>
              <th>Code Postal</th>
              <th>Moyenne</th>
              <th>sup/mod</th>
            </tr>
          </thead>
          <tbody>
           {stagiaires.map(function(stagiaire){
               return(
                <tr  key = {stagiaire.id}>
                <td>{stagiaire.id}</td>
                <td>{stagiaire.matricule}</td>
                <td>{stagiaire.nom}</td>
                <td>{stagiaire.prenom}</td>
                <td>{stagiaire.ville}</td>
                <td>{stagiaire.codePostal}</td>
                <td>{stagiaire.moyenne}</td>
                <td>
          <button onClick={() => {
               console.log("Current stagiaires:", stagiaires); // Pour voir les stagiaires actuels
               console.log("ID du stagiaire à supprimer:", stagiaire.id); // Pour voir l'id à supprimer
           
               const newStg = stagiaires.filter((item) => item.id !== stagiaire.id);
                 setStagiaires(newStg);
            }}>
            Supprimer</button>

            <button onClick={modifier}>Modifier</button>
                </td>
              </tr>


               )
              
              
           })}
              {stagiaires.length === 0 && <h1 style={{color:"red"}}>le tableau est vide</h1>}
           
          </tbody>
        </table>
      </div>
      <ul>
        <li>la moyenne générale la plus Elevée :</li>
        <li>la moyenne générale la moins Elevée :</li>
        <li>la moyenne de la classe:</li>
      </ul>
  </>
  );
}

export default App;