///////////////CLASS-1///////////////
//object
// const person = {
//     firstName : "abcd",
//     age     : 50,
//   };


// person["firstName"] = "ali";
// // console.log(person);
// // person.firstName ='rahat';
// // document.write(person.firstName)

// document.write("<br>")

// person["firstName"] = "hamza";
// // console.log(person);
// // document.write(person.firstName)

//destructuring
// var arr = ["ahmed",15,"karachi",["islamabad","karachi"]];
// var[userName="khan",age,address,[city1,city2]]=arr;
// console.log(userName,age,address,city1,city2)

// var arr = ["ahmed",15,"karachi",["islamabad","karachi"]];
// var[userName="khan",age,address,countries]=arr;
// console.log(userName,age,address,countries)

// var arr = ["ahmed",15,"karachi",["islamabad","karachi"]];
// function getArr(valArr){
//     console.log(valArr)
// }
// getArr(arr)

// var arr = ["ahmed",15,"karachi",["islamabad","karachi"]];
// function getArr([userName="khan",age,address,[city1,city2]]){
//     console.log(userName)
// }
// getArr(arr)

// var arr = ["ahmed",15,"karachi",["islamabad","karachi"]];
// var arr2 = ["ahmed2",15,"karachi",["islamabad","karachi"]];

// function getArr(valArr){
//     var [userName="khan",age,address,[city1,city2]] = valArr
//     console.log(userName)
// }
// getArr(arr)
// getArr(arr2)


// function getArr(){
//     var arr2 = ["umair","12",88]
//     return arr2;
// }
// var [val1,val2,val3] =getArr();
// console.log(val1,val2,val3);


// function getArr(){
//     var arr2 = ["umair","12",88]
//     return arr2;
// }
// var [val1,val2,val3] =getArr();
// console.log(val1,val2,val3);


// const person = {
//         firstName : "abcd",
//         secondname :"ali"
        
//       };
// const { firstName, secondname, age = 18 } = person;
// console.log(firstName,secondname,age);







///////////////CLASS-2///////////////
//rest operator
// var sum=0;
// function getData(...args){
//     console.log(args);

//     // for in 
//     for(var val in args){
//         console.log(args[val])
//         sum+=args[val]
//     }
// }
// // getData(1,2,3,4,5)
// var arr =[1,2,3,4]
// getData(...arr); //spread
// console.log(sum)



// var arr1 =[1,2,3,4];
// var arr2 = [...arr1,5,6,7];
// console.log(arr2)

// var ar1 =[1,2,3,4];
// var ar2 =[5,6,7,8];
// console.log(ar1+","+ar2)

// //because array is reference
// var arr1= [1,2,3,4];
// var arr2=arr1;
// arr1.push(5);
// console.log(arr2);


//use spread 
// var arr1= [1,2,3,4];
// var arr2=[...arr1];
// arr1.push(5);
// console.log(arr2);


// var obj1={
//     name:'khan',
//     age:'12'
// }
// var obj2 ={
//     address:'dha'
// }
// // var obj={...obj1,count:900,...obj2}
// var obj={names:obj1.name,count:900,...obj2}

// console.log(obj)


// //rest operator
// var numbers = [1, 2, 3, 4, 5, 6];
// var [one, two, ...rest] = numbers;
// console.log(one);
// console.log(two);
// console.log(rest);
// console.log(numbers)

// //spread
// var arr1 =[1,2,3,4];
// var arr2 = [...arr1,5,6,7];
// console.log(arr2)


// //rest and spread together
// var numbers = [1, 2, 3, 4, 5, 6];
// var [one, two, ...rest] = numbers;
// var nums = [...rest , 7,8,9,10]
// console.log(nums)

// var sum=0;
// function getData(v1,v2,...args){
//     console.log(v1,v2,args);

//     // for in 
//     // for(var val in args){
//     //     console.log(args[val])
//     //     sum+=args[val]
//     // }
//    //for in
//     // for(var val in args){
//     //     console.log(args[val])
//     //     sum+=args[val]
//     // }
//     args.forEach(function(args) {
//         console.log(args);
//         sum+=args;
//     });
// }

// var arr =['a','b',1,2,3,4]
// getData(...arr);
// console.log(sum)



// var myObj = {
//     a : 'A',
//     b : 'B',
//     c : 'C'
// };

// for (x in myObj) {
//     console.log(x);        // "a", "b", "c"
//     console.log(myObj[x]); // "A", "B", "C"
// }

// var arr = ['a','b','c','d','e'];
// //for in
// // for(var val in arr){
// //     console.log(val)
// // }
// // for(var val1 of arr){
// //     console.log(val1)
// // }
//for each
// var v=0;
// arr.forEach(function(i){
//     console.log(v,i)
// })

//calling api
// fetch('https://api.github.com/users/dkrmentor')
    
// .then(function(response){
//     return response.json()
// })
// .then(function(data){
//     console.log(data.following)
// })
// .catch(function(error){
//     console.log(error)
// })




///////////////CLASS-3///////////////
// fetch('https://api.github.com/users/dkrmentor')
    
// .then(function(response){
//     return response.json()
// })
// .then(function(data){
   
//     console.log(data)
// })
// .catch(function(error){
//     console.log(error)
// })


// function searchusername(){
//     var uname = document.getElementById('username');
//     fetch(`https://api.github.com/users/${uname}`)    
// .then(function(response){
//     return response.json()
// })
// .then(function(data){
//       console.log(data.obj)
// })
// .catch(function(error){
//     console.log(error)
// })
// }


// function searchusername(){
//     var uname = document.getElementById('username');
//     fetch(`https://api.github.com/users/${uname}`)    
// .then(function(response){
//     return response.json()
// })
// .then(function(data){
//     let obj={
//         "userid":1,
//         "followers":13,
//         "following":25
    
//     }
//       console.log(data)
// })
// .catch(function(error){
//     console.log(error)
// })
// }


// let obj1={
//     "userid":1,
//     "followers":13,
//     "following":25

// }
// let obj2={
//     "userid":1,
//     "followers":43,
//     "following":55

// }
// var m1 = obj1.followers+obj1.following;
// var m2=obj2.followers+obj2.following;

// console.log(m1)
// console.log(m2)

// if(m1>m2){
//     console.log("m1 is greater")
// }else{
//     console.log("m2 is greater")
// }

// var sumobj1,sumobj2;
//     var uname1 = "user1";
//     var uname2 = "user2";
//     function getuname(){
//     fetch(`https://api.github.com/users/${uname1}`)    
// .then(function(response){
//     return response.json()
// })
// .then(function(data){
//     let obj1={
      
//         "followers":215,
//         "following":16
    
//     }
//     sumobj1=obj1.followers+obj1.following;
//       console.log(data)
//       console.log(sumobj1)
// })
// .catch(function(error){
//     console.log(error)
// })
// fetch(`https://api.github.com/users/${uname2}`)    
// .then(function(response){
//     return response.json()
// })
// .then(function(data){
//     let obj2={
        
//         "followers":110,
//         "following":11
    
//     }
//     sumobj2=obj2.followers+obj2.following;
//     console.log(data)
//     console.log(sumobj2)
//     compareuser();
   
// })
// .catch(function(error){
//     console.log(error)
// })
//     }
// getuname();
// function  compareuser(){
// console.log(sumobj1,sumobj2)
// if(sumobj1>sumobj2){
//     console.log(uname1 + " win")
// }else{
//     console.log(uname2 + " win")
// }}


//promise
// var cond = false;
// var prom = new Promise(function(resolve,reject){
// if(cond){
//     resolve('sucess')
// }
// else{
//     reject("unsucess")
// }
// })
// //first method
// prom
// .then(function (res){
//     console.log(res)
// })
// .catch(function (err){
//     console.log(err)
// })

// //other method

// // function sucess(res){
// //     console.log(res)
// // }
// // function error(err){
// //     console.log(error)
// // }
// // prom
// // .then(sucess)
// // .catch(error)


///////////////CLASS-4///////////////
//normal
// //es5 function
// let greet = function(){
//     return "gn";
// }
// console.log(greet())

// //es6 function (arrow)
// let greet2 =() =>{
//     return "goodnight";

// }
// console.log(greet2());

// //es 6 2nd method
// let greet3 =() => "goodnight"
// console.log(greet3());


// //es 6 3rd method
// let greet4 =() =>{
//     let a=2;
//     let b=9;
//     return a+b;

// }
// console.log(greet4());

// //es 6 2nd method
// let greet5 =(a,b) => a+b
// console.log(greet5(2,4));


// //es 6 3nd method
// let a=9;
// let greet6 =b => a+b
// console.log(greet6(2));


//extra

// //es5 function
// let greet = function(){
//     return this
// }
// console.log(greet(),'regular function')


// //es 6 
// let greet5 =() => this
// console.log(greet5() , "arrow");



// let obj = {
//     name :'dhara',
//     ins : 'bmj',
//     address : function(){
//             return this
//  }

// }
// console.log(obj.address())


// let obj2 = {
//     name :'dhara',
//     ins : 'bmj',
//     address : () => this


// }
// console.log(obj2.address())



// let myfunc = async()=>{
    
//     console.log('first')
//     const myvar = await fetch('https://api.github.com/users/dkrmentor');
//     console.log(myvar,'await')
    

// }
// console.log("second")
// console.log(myfunc())





// const newFunc = () =>{
//     fetch('https://api.github.com/users/dkrmentor')
//     .then ( res => res.json())
//     .then((response)=>{
//         console.log(response)
//     })
//     .catch(err => console.log(err.message,'error message'))
// }
// console.log(newFunc())




// const newFunc = async() =>{
//     try{
//         let fetchData = await  fetch('https://api.github.com/users/dkrmentor')
//         console.log(fetchData)
//         let convertToJson = await fetchData.json();
//         console.log(convertToJson);
//         getData = await fetch('https://api.github.com/users/dkrmentor')
//         console.log(getData)
//            let convertToJson2 = await getData.json();
//         console.log(convertToJson2);
//     }
//     catch(error){
//         console.log(error.message)
//     }


// }
// console.log(newFunc())



// const request = async (url) => {
//     const response = await fetch(url);
//     const json = await JSON.stringify(response.json());
//     return json;
// }
// let tree = request('humans.json');

// console.log(tree);


// function sum(a,b){
//     sum = a+b;
//     console.log(sum)
// }
// sum(2,3)



// "use strict"

// function sum2(c,d){
//     sum = a+b;
//     console.log(sum)
// }
// sum2(2,3)

// function cR(){
//     return this
// }
// console.log(cR())




///////////////CLASS-5///////////////

// var obj = {
//     userName :"dhara",
//      userContact : "00424278601"
// }
// function setitem(){
//     localStorage.setItem("userName",obj.userName);
//     localStorage.setItem("userContact",obj.userContact);
//     localStorage.setItem("userobj",JSON.stringify(obj));
// }
// function getItem(){
//     var usName =  localStorage.getItem("userName")
//     console.log(usName,typeof usName)
//     var usContact =  localStorage.getItem("userContact")
//     console.log(usContact,typeof usContact)
//     var usobj =  localStorage.getItem("userobj")
//     console.log(JSON.parse(usobj),typeof JSON.parse(usobj))
// }
// function remove(){
//     localStorage.removeItem("userName");
// }
// function removeAll(){
//     localStorage.clear();
// }




// var userData =
//  [{userName:"dhara",address:"karachi1"},
//  {userName:"dhara",address:"karachi2"},
//  {userName:"dhara",address:"karachi3"}]
// console.log(userData[2].address)




// function signUp(){
//     var data = localStorage.getItem('userData');
//     var userEmail = document.getElementById("email").value
//     var userPassword = document.getElementById("password").value
//     var flagUser =false;
//     console.log(data)
//     var obj = {
//         userEmail,
//         userPassword
//     }  
//     if(!data){
//         console.log("chal gya")
         
//         localStorage.setItem("userData",JSON.stringify([obj]))
//     }
//     else{
//         var usersData = JSON.parse(data);
//         for(var i =0 ; i<usersData.length;i++){
//             if(userEmail == usersData[i].userEmail)
//             {
//                 alert("exist")
//                 flagUser = true
//             }
//         }
//         if(!flagUser){
//             usersData.push(obj);
//             localStorage.setItem("userData",JSON.stringify(usersData))
//         }
    
//     }

// }


//pass by value
// let a = 5;
// let b = a;
// a=10;
// console.log(a)
// console.log(b)


//pass by reference

// let obj1 ={
//     name:"ahmed"
// } 
// // let obj2 = {
// //     name:"hello"
// // }
// let obj2 = obj1

// obj1.name = "rajput"
// console.log(obj1)
// console.log(obj2)



//Classes



// class Student{
//     constructor(name,age,location){
//         this.myname = name;
//         this.myage =age;
//         this.mylocation =location;

//     }
//     //instance method

//     bioData(){
//         return `my name is ${this.myname}.`
//     }


//     //static method


//     static sum(a,b){
//         return a+b
//         }
// }

// let obj = new Student("ali",12,"karachi")
// let obj2 = new Student("ali2",122,"karachi2")


// console.log(obj)
// console.log(obj.myage)
// console.log(obj.myname)
// console.log(obj.mylocation)

// console.log(obj2)
// console.log(obj2.myage)
// console.log(obj2.myname)
// console.log(obj2.mylocation)

// console.log(obj.bioData())
// console.log(obj2.bioData())


// var sums = Student.sum(1,2)
// console.log(sums)




// class TopStudents extends Student{
//     constructor(name,age,location,TopStudents){
//         super(name,age,location)
//         this.TopStudents = TopStudents
//     }
//     newbioData(){
//         return `${super.bioData()}......our class top stu name is ${this.TopStudents} `
//     }

// }

// let obj = new TopStudents("asas",23,"dasd","dharas")
// console.log(obj.newbioData())

///////////////CLASS-6///////////////


//array method (map return array)
// const arr = [1,2,3,4,5,6]
// const data = arr.map((currentValue,index,arr)=>{
//     console.log(currentValue,index,arr)
//     return currentValue *2
// })
// console.log(arr,'arr')
// console.log(data,'data')


//filter returns array
// const arr = [1,2,3,4,5,6]
// const data = arr.filter((item,index,arr)=>{
//     return item > 3
// })
// console.log(data)


// let arr = [
//     {
//         name:'ali',
//         address:"karachi",
//         key:1
//     },
//     {
//         name:'ahmed',
//         address:"lahore",
//         key:2
//     },
//     {
//         name:'arsalan',
//         address:"karachi",
//         key:3
//     }
// ]

// const data = arr.filter((item,index,arr)=>{
//     return item.address === 'karachi' && item.name === 'arsalan'
// })
// console.log(data)



//find (returns value)

// let arr = [
//     {
//         name:'ali',
//         address:"karachi",
//         key:1
//     },
//     {
//         name:'ahmed',
//         address:"lahore",
//         key:2
//     },
//     {
//         name:'arsalan',
//         address:"karachi",
//         key:3
//     }
// ]


// const data2 = arr.find((item,index)=>{

//     return item.address == "karachi"
// })
// console.log(data2)


//find index

// let arr = [
//     {
//         name:'ali',
//         address:"karachi",
//         key:1
//     },
//     {
//         name:'ahmed',
//         address:"lahore",
//         key:2
//     },
//     {
//         name:'arsalan',
//         address:"karachi",
//         key:3
//     }
// ]

// const data3 = arr.findIndex((item,index)=>{
//     return item.address === 'lahore'

// })


// console.log(data3, 'data')