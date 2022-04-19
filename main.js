//유저가 값을 입력한다.
// + 버튼을 클릭하면, 할일이 추가된다.
// delete 버튼을 누르면 할일이 삭제된다.
// check 버튼을 누르면 할일이 끝나면서 밑줄이 간다.
// 1. check 버튼을 클릭하는 순간 true false
// 2. true이면 끝난걸로 간주하고 밑줄 보여주기
// 3. false이면 안끝난걸로 간주하고 그대로
// 진행중 끝남 탭을 누르면, 언더바가 이동한다.
// 끝남탭은, 끝난 아이탬이지만, 진행중인 탭은 진행중인 아이탬만 
// 전체탭을 누르면 다시 전체 아이템으로 돌아옴

let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let taskList = [];
addButton.addEventListener("click",addTask)

function addTask(){
  
  let task= {
    id:randomIDGenerate(),
    taskContent :taskInput.value,
    isComplete:false
  }
  taskList.push(task);
  console.log(taskList);
  render();
}

function render(){
  let resultHtml = '';
  for (let i=0; i<taskList.length; i++){
    if(taskList[i].isComplete == true){
      resultHtml += `<div class="task">
      <div  class="task-done">${taskList[i].taskContent}</div>
      <div>
          <button onclick="toggleComplete('${taskList[i].id}')">check</button>
          <button onclick="deleteTask()">Delete</button>
      </div>
  </div>`
    } else{
   
    resultHtml += `<div class="task">
      <div>${taskList[i].taskContent}</div>
      <div>
          <button onclick="toggleComplete('${taskList[i].id}')">check</button>
          <button onclick="deleteTask()">Delete</button>
      </div>
  </div>`
    }  

  }

  document.getElementById("task-board").innerHTML = resultHtml;

}

function toggleComplete(id){
  console.log("id:",id);
  for(let i=0; i<taskList.length;i++){
    if(taskList[i].id == id){
      taskList[i].isComplete= !taskList[i].isComplete; // 글자에 밑줄이 클릭시 있다가 없다가....(스위치 방법!)

      break;
    }
  }
  render()
  console.log(taskList)
}

  function randomIDGenerate(){
    function chr4(){
      return Math.random().toString(16).slice(-4);
    }
    return chr4() + chr4() +
      '-' + chr4() +
      '-' + chr4() +
      '-' + chr4() +
      '-' + chr4() + chr4() + chr4();
  } 

 function deleteTask(){
   console.log("삭제하자")
 } 
