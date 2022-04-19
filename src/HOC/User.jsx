import React , {useEffect , useState, useSyncExternalStore } from 'react'

function User() {


   const [uselist , setUserList ] = useState([]); // api fetching 

    //    searching functionalities 
    const [terms, setTeams ] = useState("");


   useEffect(()=>{ // this thing for fetching data 
       const fetchuser = async () => {
           const res = await fetch("https://jsonplaceholder.typicode.com/users"); // take information form the link
           const json = await res.json;  // convert to json
           setUserList(json);    /// add to setuse information 
           
       } 

       fetchuser();
   },[])

  return (
    <div>

        {/* input  */}
        <input type="text" onChange={(event) => {
            setTeams(event.target.value);
        }} />

        {/* show user information */}
        {/* {uselist.map((element)=>{
            return (<p key={element.id}>{element.name}</p>)
        })} */}

        {/* search informati9on */}

        {
            uselist.filter(name => name.include(terms)).map((filtername) => {
                return (<p key={filtername.id}>{filtername.name}</p>)
            })
        }

       
    </div>
  )
}

export default User