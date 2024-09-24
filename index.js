const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
const loader = document.querySelector('#loader');
const dataContainer = document.querySelector('#data-container');
let isUsersList = false;

const createUserElement = (text)=>{
  const userElement = document.createElement('li');
  const userElementAnchor = document.createElement('a');
  userElementAnchor.href = '#';
  userElementAnchor.textContent = text;
  userElement.appendChild(userElementAnchor);
  return userElement;
}
const getAllUsers = ()=>{
  const result = fetch(USERS_URL, {
    method: 'GET',
  });
  result  
  .then((response)=>{
    if(!response.ok){
      throw new Error('Error');         
    }
    return response.json()
  })
  .then((users)=>{ 
    users.forEach(element => {
      console.log(element);
      const userHTML = createUserElement(`"${element.username}" ${element.name}`);
      dataContainer.appendChild(userHTML);
    });
  })
  .catch((error)=>{ 
    console.log(error);
  })
}
 
document.addEventListener('click', ()=>{

  if(!isUsersList){
    console.log('click');
    
    if (loader.hasAttribute('hidden')) {
      loader.removeAttribute('hidden');
    }
    setTimeout(getAllUsers(),10000);    
    isUsersList = true;
    //setTimeout( loader.setAttribute('hidden'), 3000);
    
  }else{
    console.log('!');
    
  }    
});

