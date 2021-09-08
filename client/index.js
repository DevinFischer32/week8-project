let list = document.querySelector("span")

document.getElementById("form").addEventListener("submit", addEvent)
const message = document.querySelector('#message')



function addEvent (e) {
    e.preventDefault()
    let schedule = document.getElementById('event').value
    let date = document.getElementById('eventDate').value
    let item = document.createElement('p')
    item.textContent = schedule + " " +  'On:  ' + date + ' '
    list.appendChild(item)

    const editBtn = document.createElement('button')
    editBtn.textContent = '✎'
    editBtn.addEventListener('click', editSchedule)
    item.appendChild(editBtn)

    //This block is for the deleteBtn 
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = '🗑'
    deleteBtn.addEventListener('click', removeEvent)
    item.appendChild(deleteBtn)

    document.getElementById('event').value = ''
    document.getElementById('eventDate').value = ''
}

let position

function editSchedule (e){
    e.preventDefault()
    message.textContent = `${e.target.parentNode.textContent} has been changed`
    revealMessage()

    let editform = document.createElement('form')
    let newInput = document.createElement('input')
    let saveBtn = document.createElement('button')

    saveBtn.textContent = 'save'
    saveBtn.setAttribute("type",'submit')

    let children = e.target.parentNode.parentNode.children
    position = Array.prototype.indexOf.call(children, e.target.parentNode)



    editform.appendChild(newInput)
    editform.appendChild(saveBtn)
    
    list.appendChild(editform)
    saveBtn.addEventListener('click', update)
}

function update (e){
    e.preventDefault()
    list.childNodes[position].textContent = e.target.parentNode.childNodes[0].value 
    e.target.parentNode.remove()
   
    const editBtn = document.createElement('button')
    editBtn.textContent = '✎'
    editBtn.addEventListener('click', editSchedule)
    item.appendChild(editBtn)
}

//This function removes the parentNode when the deleteBtn is clicked
function removeEvent (e) {
    message.textContent = `${e.target.parentNode.textContent} removed from schedule`
    revealMessage()

    e.target.parentNode.remove()
}

function revealMessage () {
    message.classList.remove('hide')  //This line removes the hide class that hides the visiblity in css

    setTimeout(()=>{
        message.classList.add('hide') // this adds it back making it visible for a moment 
    }, 1000)
}


//editable