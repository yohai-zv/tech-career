
function runWithObject(){
  const student = {
    name: "Jo",
    phone: "0545463440",
    // id: 206085222,
    city: "Tel Aviv",
    5:"five"
  }

  alert(`Student 5 is ${student["5"]}`)

  // check if has id
  if(student.id !== undefined && student.id !== null && student.id !== "")
    alert("student has ID")
  else
    alert("student doesn't has ID")


  // print student numbers of properties
  const studentKeysNumber = Object.keys(student).length;
  alert(`Student keys number is ${studentKeysNumber}`)


  alert(`Student name is ${student.name}`)
}


function runWithObjectWithMap(){
  const someKey = {name: "moses"};

  const student = new Map();
  student.set(someKey,"Jo");
  student.set("phone","0545463440");
  //student.set("id",206085222);
  student.set("city","Tel Aviv");


  // check if has id
  if(student.has("id"))
    alert("student has ID")
  else
    alert("student doesn't has ID")


  // print student numbers of properties
  alert(`Student keys number is ${student.size}`)


  alert(`Student name is ${student.get(someKey)}`)
}



runWithObjectWithMap()