import Person from "./Person"

const Persons = ({personToShow,handleDelete})=> (
    <div>
        {personToShow.map(person => <Person key = {person.id} 
                                            name = {person.name} 
                                            number = {person.number} 
                                            id = {person.id} 
                                            handleDelete={handleDelete}
                                    />
        )}
    </div>
) 
    
export default Persons