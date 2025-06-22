function runAllTasks(){
  const area = document.getElementById('task-area')
  area.innerHIML = ''//clear text area

  const log =  (text) =>{
    const p =  document.createElement('p')
    p.innerHTML = "👩‍🦱" + text;
    p.className = "p-6 bg-white rounded-lg shadow-md mb-4" ;
    area.appendChild(p);
  }

  const div = document.createElement("div");
  

};