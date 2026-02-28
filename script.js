function showSection(id){
  document.querySelectorAll('section').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// TODO
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function save(){
  localStorage.setItem('tasks',JSON.stringify(tasks));
}

function renderTasks(){
  const list=document.getElementById('todoList');
  list.innerHTML='';

  tasks.forEach((t,i)=>{
    const div=document.createElement('div');
    div.className='todo-item';
    div.innerHTML=`${t} <button class="delete" onclick="removeTask(${i})">X</button>`;
    list.appendChild(div);
  });
}

function addTask(){
  const input=document.getElementById('todoInput');
  if(!input.value.trim()) return;

  tasks.push(input.value);
  input.value='';
  save();
  renderTasks();
}

function removeTask(i){
  tasks.splice(i,1);
  save();
  renderTasks();
}

renderTasks();

// PRODUCTS
const products=[
  {name:'Gaming Laptop',price:80000,category:'tech'},
  {name:'Smartphone',price:20000,category:'tech'},
  {name:'Racing Helmet',price:5000,category:'bike'},
  {name:'Bike Gloves',price:1200,category:'bike'}
];

function renderProducts(){
  let list=[...products];

  const cat=document.getElementById('categoryFilter').value;
  const sort=document.getElementById('sortPrice').value;

  if(cat!=='all') list=list.filter(p=>p.category===cat);
  if(sort==='low') list.sort((a,b)=>a.price-b.price);
  if(sort==='high') list.sort((a,b)=>b.price-a.price);

  const box=document.getElementById('productContainer');
  box.innerHTML='';

  list.forEach(p=>{
    const div=document.createElement('div');
    div.className='card';
    div.innerHTML=`<h3>${p.name}</h3><p>₹${p.price}</p><small>${p.category}</small>`;
    box.appendChild(div);
  });
}

renderProducts();