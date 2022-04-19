import React , {Component} from "react";


const HOC = (wrappedComponent , entity ) => {
    return class extends Component{
        constructor(){
            super();
            this.state = {
                data : [],
                term : ""
            };
        }

        componentDidMount(){
            const fetchData = async () => {            
                const res = await fetch(`https://jsonplaceholder.typicode.com/${entity}`); // take information form the link
                const json = await res.json;  // convert to json
                this.setState({...this.state,data:json})    /// add
            } 
            fetchData();
        }

        render(){
           let {term , data}  = this.state;

           let filterdata = data.filter(d=> {
               if(entity === "user"){
                   const {name} = d;
                   return name.includes(terms);
               }
               if(entity === "todo"){
                   const {title} = d;
                   return title.includes(terms);
               }
           })


           return (
               <>
               
               <h1>{entity}</h1>
               <input type="text" value={term} onChange={(event) => {
                this.setState( {...this.state , term : event.target.value} );
            }} />

            <wrappedComponent data={ filterdata }></wrappedComponent>
            </>
           );
        }
    }
}

export default HOC;