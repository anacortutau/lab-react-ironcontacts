
import './App.css';
import {useState} from "react"
import contacts from "./contacts.json"


function App() {
  const [contactList, setContactList] = useState(contacts.slice(0,6))
 
  

  const handleAdd = () =>{

    const randomNumber = Math.floor(Math.random()* contacts.length)
    const randomContact = contacts[randomNumber]


    setContactList([randomContact, ...contactList])
  }

  const handlePopularity = () =>{

    const contactListCopy = [...contactList]
    contactListCopy.sort((elem1, elem2)=> elem1.popularity > elem2.popularity ? -1: 1)

    setContactList(contactListCopy)
  }

  const handleName = () =>{

    const contactListCopy = [...contactList]
    contactListCopy.sort((elem1, elem2)=> elem1.name > elem2.name ? 1: -1)

    setContactList(contactListCopy)
  }

  const handleDelete = (idBorrar) =>{
    console.log("borrando", idBorrar)
    //id podemos buscar el elemento y sacarlo y para sacarlo (filter)
    // posicion y usamos splice para borrarlo

    const filterArr = contactList.filter((eachContact)=> eachContact.id !== idBorrar)


    setContactList(filterArr)
}
  
  return(
    
    <>
    <div className="App">
     
      <h1>IronContacts</h1>
      <button onClick={handleAdd}>Add Random Contact</button>
      <button onClick={handlePopularity}>Sort by popularity</button>
      <button onClick={handleName}>Sort by name</button>
     
      <table className="table">
      <tr>
      <th>Picture</th><br/>
      <th>Name</th><br/>
      <th>Popularity</th><br/>
      <th>Won Oscar</th><br/>
      <th>Won Emmy</th><br/>
      <th>Actions</th>
      </tr> 
     
    
    
  {
   contactList.map((elem) =>{
    return (
      
      <div key={elem.id}>
      <tr>

      <td><img src={elem.pictureUrl} alt="foto" style={{width: "100px" }}/></td><br/>
      
      <td>{elem.name}</td><br/>
      
      <td>{elem.popularity}</td><br />
      <td>{elem.wonOscar === true ? "🏆" : ""} </td><br />
      <td>{elem.wonEmmy=== true ? "🏆" : ""} </td><br />
      
      
      
     
      
      <th><button onClick={()=>handleDelete(elem.id)}>Delete</button></th>
      </tr>
      
      </div>
      
    )
  })
  
  }</table>
     
  
     </div>
    
     </>
    

  ) 
  
}

export default App;
