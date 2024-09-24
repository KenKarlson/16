const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
const loader = document.querySelector('#loader');
const dataContainer = document.querySelector('#data-container');
let isUsersList = false;

const toogleLoader = ()=>{
  const isHidden = loader.hasAttribute('hidden');
  if(isHidden){
    loader.removeAttribute('hidden');
  }else{
    loader.setAttribute('hidden', '');
  }
}
const createUserElement = (text)=>{
  const userElement = document.createElement('li');
  const userElementAnchor = document.createElement('a');
  userElementAnchor.href = '#';
  userElementAnchor.textContent = text;
  userElement.appendChild(userElementAnchor);
  return userElement;
}
const getAllUsers = ()=>{
  toogleLoader();
    
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
  .finally(()=>{
    toogleLoader();
  }    
  )
}
 
document.addEventListener('click', ()=>{

  if(!isUsersList){
    
    setTimeout(getAllUsers(),10000);    
    isUsersList = true;    
  }else{
    console.log('!');
    
  }    
});

