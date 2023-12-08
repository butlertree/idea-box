import './Ideas.css'
import Card from './Card'


//This  is a prop from App - ideas which is an array of ideas deleteIdea is a function
function Ideas({ideas, deleteIdea}){
   
const ideaCards = ideas.map(idea => {
//This takes the Card that was made and maps on to it specific information and the delete button
return(
<Card
    title={idea.title}
    description={idea.description}
    id={idea.id}
    key={idea.id}
    deleteIdea={deleteIdea}
    />
)
})
return(
    <div className='ideas-container'>
        {ideaCards} 
    </div>
)

}

export default Ideas;