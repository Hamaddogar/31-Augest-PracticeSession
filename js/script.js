 function myfucntion(event){

  event.preventDefault()
   let name = document.getElementById("uname").value
   let lname= document.getElementById("lname").value
    let upass = document.getElementById("upass").value
     let city = document.getElementById("city").value
     let whatsppnumber = document.getElementById("wnum").value

   const  myobject={
       name,
       lname,
       upass,
       city,
       whatsppnumber
   }

     const myarray=[]
       myarray.push(myobject)
     localStorage.setItem("MuhammaadHamad'sData",JSON.stringify(myarray))
 }