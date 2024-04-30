import React from 'react'

const Content = () => {
    const HandleChangeEvent = () =>{
        const names = ['Mohammad', 'Isa', 'Ali'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
      }

    return (
        <main>
            <p>
                Hello {HandleChangeEvent()}!
            </p>
        </main>
    )
}

export default Content
