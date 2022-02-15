const title = document.querySelector('#title')

getAndRenderData()

function getAndRenderData () {
  const getURL = 'https://tribe.api.fdnd.nl/v1/list'
  fetch(getURL).then(response => response.json())
    .then(response => {
      const myName = response.data.filter(function(member) {
        return member.memberId === 55
      })
      document.querySelector('#title').insertAdjacentHTML('beforebegin', `<h1>${myName[0].memberName || 'Tom'} ${myName[0].memberPrefix || 'van den'} ${myName[0].memberSurname || 'Berg'}</h1>`)
    }).catch(error => document.querySelector('#title').insertAdjacentHTML('beforebegin', 'Tom van den Berg' ))
}



// const removeController = () => {
//   const controller = document.querySelector(".controller")
//   const button = document.querySelector(".crossButton")
//   const text = document.querySelector('.title')
//
//   controller.classList.add('removeController')
//   button.classList.add('removeController')
//   text.classList.add('removeTitle')
// }
//
// const goBack = () => {
//   const controller = document.querySelector(".controller")
//   const button = document.querySelector(".crossButton")
//   const text = document.querySelector('.title')
//
//   controller.classList.remove('removeController')
//   button.classList.remove('removeController')
//   text.classList.remove('removeTitle')
// }