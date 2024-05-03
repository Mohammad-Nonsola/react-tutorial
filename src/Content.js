import React from 'react'

const Content = () => {
    const HandleChangeEvent = () =>{
        const names = ['Mohammad', 'Isa', 'Ali'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
      }

    const handleClick = ()=>{
        console.log('You clicked it')
    }

    const handleClick2 = (name)=>{
        console.log(`${name} was clicked`)
    }
    
    const handleClick3 = (e)=>{
        console.log(e.target.innerText)
    }

    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {HandleChangeEvent()}!
            </p>
            <button onClick={handleClick}>Click It</button>
            <button onClick={() => handleClick2('mohammad')}>Click It</button>
            <button onClick={(e) => handleClick3(e)}>Click It</button>
        </main>
    )
}

export default Content
