import logo from './logo.svg';
import './App.css';
import Ideas from './Ideas'
import Form from './Form'
import { useState, useEffect } from 'react'


function App() {
  const dummyIdeas = [
    { id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
    { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
    { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' },
]

  const [ideas, setIdeas] = useState([])
  const [error, setError] = useState('')  
  
  function addIdea(newIdea) {
	console.log('newIdea:', newIdea)
    fetch('http://localhost:3001/api/v1/ideas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newIdea), 
    })
    .then(response => response.json())
    .then(data => setIdeas([...ideas, data]))
    .catch(error => setError(error.message)) 
  }

function deleteIdea(id) {
  console.log(id);
  const filteredIdeas = ideas.filter(idea => idea.id !==id)
  setIdeas(filteredIdeas)
}


function getIdeas() {
	fetch('http://localhost:3001/api/v1/ideas')
	.then(response => response.json())
	.then(data => setIdeas(data))
	.catch(error => console.log(error.message))
  }
  
  useEffect(() => {
	getIdeas();
  }, [])  // empty dependency so the useEffect is only invoked once


   return (
      <main className='App'>
        <h1 className="bigHeading">IdeaBox</h1>
		{!ideas.length && <h2>There are no ideas yet -- add some!</h2>}
        <Form addIdea={addIdea}/>  
        {error && <h2>Try Avgain Later !</h2>}
        <Ideas ideas={ideas} deleteIdea={deleteIdea}/>  
      </main>  
   )
}


export default App;
