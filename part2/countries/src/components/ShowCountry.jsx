const ShowCountry = ({country, handleShow})=>{
    return(
        <p>{country.name.common}<button onClick={()=>handleShow(country)}> show</button></p>
    )
} 

export default ShowCountry