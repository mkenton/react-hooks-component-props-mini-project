import React from "react"

function cupsCounter(mins) {
    let cupsString=""
    let cups=Math.ceil(mins/5)
    for (let i=0; i<cups; i++){
        cupsString = cupsString + "☕️"
    }
  return cupsString
 }
 

function Article({ title, date = "January 1, 1970", preview, mins }) {

console.log(cupsCounter(mins))

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} ⋅ {cupsCounter(mins)}{mins} min read</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article