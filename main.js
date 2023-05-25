// example 1
const btn = document.getElementById('mybtn')
 btn.addEventListener('click',(e)=>{
 box.style.display = 'none'


 })


 //example2
 const divEl = document.createElement('div')
const h2El = document.createElement ('h2') 
const textEl= document.createTextNode('Grandalf')
const link = document.createElement('a')
const textToLink = document.createTextNode('Go to profile');
divEl.setAttribute('id','card')

h2El.append(textEl)
divEl.append(h2El)
link.append(textToLink)
link.href = 'https://www.google.com/'
divEl.append(link)

document.body.append(divEl)