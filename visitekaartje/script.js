const title = document.querySelector('#title')

getAndRenderData()

function getAndRenderData () {
  const getURL = 'https://tribe.api.fdnd.nl/v1/list'
  fetch(getURL).then(response => response.json())
    .then(response => {
      const myName = response.data.filter(function(member) {
        return member.memberId === 55
      })
      document.querySelector('#title').insertAdjacentHTML('beforebegin', `<h1>${myName[0].memberName} ${myName[0].memberPrefix} ${myName[0].memberSurname}</h1>`)
    }).catch(error => document.body.insertAdjacentHTML('beforebegin', error))
}