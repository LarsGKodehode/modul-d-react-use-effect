import {useState, useEffect} from 'react'


function GetPokemons() {
  const [pokemonList, setPokemonList] = useState(null)
  const [error, setError] = useState(false)

  useEffect(
    () => {
      fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => response.json())
        .then(data => {
          setPokemonList(data)
        })
        .catch(
          (error) => {
            setError(error)
          }
        )
    },
    []
  )

  // Quit early if error
  if (error) return <h1>Error</h1>
  
  // Have we gotten the data yet?
  if (!pokemonList) return <h1>Loading...</h1>

  // All checks passed so we must have the data
  return (
    <>
      <h1>Pokemon</h1>
      {
        pokemonList.results.map(
          (pokemon, index) => {
            return (
              <div key={index}>
                <h3>{pokemon.name}</h3>
                <h4>{pokemon.url}</h4>
              </div>
            )
          }
        )
      }
    </>
  )
}

export default GetPokemons



// Control flow repetition

// const ternary = someBool ? "if truthy" : "if false"

// let ternaryB;
// if ( someBool ) {
//   ternaryB = "if truthy"
// } else {
//   ternaryB = "if false"
// }

// // More complex flow statements, check MDN
// switch (key) {
//   case value:
    
//     break;

//   default:
//     break;
// }