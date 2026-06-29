const button = document.querySelector("#trigger-btn");
const container = document.querySelector("#message-container");

const messages = [
    { text: "Login Successful",       icon: "✅", type: "notif-login",   time: "Just now"   },
    { text: "3 new emails arrived",   icon: "📧", type: "notif-email",   time: "1 min ago"  },
    { text: "Meeting in 10 minutes",  icon: "📅", type: "notif-meeting", time: "2 mins ago" },
    { text: "New message from Manager", icon: "💬", type: "notif-message", time: "5 mins ago" },
];

button.addEventListener("click", () => {
    container.innerHTML = "";

    messages.forEach((msg, index) => {
        setTimeout(() => {
            const item = document.createElement("div");
            item.className = `notif-item ${msg.type}`;
            item.innerHTML = `
                <span class="notif-icon">${msg.icon}</span>
                <span class="notif-text">${msg.text}</span>
                <span class="notif-time">${msg.time}</span>
            `;
            container.appendChild(item);
        }, index * 700);
    });
});

// let box = document.querySelector('.box');
// let button = document.querySelector('.button');
// button.addEventListener("click", ()=>{
//     box.style.backgroundColor = 'red';
// })

// button.addEventListener("mouseenter", ()=>{
//     box.style.backgroundColor = 'green';
// })
// button.addEventListener("mouseleave", ()=>{
//     box.style.backgroundColor = 'orange';
// })

// let btn = document.querySelector('.btn');
// let overlay = document.querySelector('.overlay');
// btn.addEventListener("click", ()=>{
//     overlay.style.display = 'none';
//     btn.style.opacity = '0';
// })
// btn.addEventListener("mouseleave", ()=>{
//     overlay.style.display = 'block';
//     btn.style.opacity = '1';
// })


// menu.addEventListener('click', function(){

//     if(!flag){
//         lineup.style.transform = 'rotate(45deg) translate(10px)';
//         linemiddle.style.opacity = '0';
//         linedown.style.transform = 'rotate(-45deg) translate(10px)';
//         menuoptions.style.height = '150px';

//         flag = 1;
//     }

//     else{
//         lineup.style.transform = 'rotate(0deg) translateY(0px)';
//         linemiddle.style.opacity = '1';
//         linedown.style.transform = 'rotate(0deg) translate(0px, 0px)';
//         menuoptions.style.height = '0';
//         flag = 0;
//     }
// });

// menuoptions.addEventListener('click', function(){

//     if(!flag){
//         menuoptions.style.display = 'block';
//         flag = 1;
//     }
//     else{
//         menuoptions.style.display = 'none';
//         flag = 0;
//     }
// })

// let menubox = document.querySelector(".menu")
// let lineup = document.querySelector(".lineup")
// let linemiddle = document.querySelector(".linemiddle")
// let linedown = document.querySelector(".linedown")
// let menuoption = document.querySelector(".menu-option")
// let headings = document.querySelectorAll(".menu-option h1")
// let flag = 0 
// menubox.addEventListener("click", () => {
// if(!flag){
//         lineup.style.transform = "rotate(45deg) translateY(13px)"
//         linedown.style.transform = "rotate(-45deg) translateY(-13px)"
//          menuoption.style.left = "0%"
//         linemiddle.style.opacity = "0"
//         flag = 1
// }
// else{
//         lineup.style.transform = "rotate(0deg) translateY(0px)"
//         linedown.style.transform = "rotate(0deg) translateY(0px)"
//         linemiddle.style.opacity = "1"
//         menuoption.style.left = "-50%"
//         flag = 0
// }

// })
// let popup=document.querySelector(".popup");
// let btn1=document.querySelector(".btn1");
// let t=document.querySelectorAll(".t");
// let stp=0;
// stp=setInterval(()=>{
//     t.forEach((element)=>{
//         console.log(element);
//     })},1000);

// Array.prototype.forEach.call(t, element => {
//   setInterval(()=>
//   {console.log(element);},1000)
  
// });
// let count=0;
// let stop;
// setTimeout(()=>{
// popup.style.visibility = "visible";
// },500);//execute only one time single output

// btn1.addEventListener("click",()=>{
//     popup.style.visibility = "hidden";
// })
// stop=setInterval(()=>{
//   count++;
//   console.log(count);
//   if(count==10
//   ){
//     clearInterval(stop);
//   }
// },1000);//execute after every 1 second multiple output
// let interval;
// let index=0;
// let text=document.querySelector(".text");
// let maincontent=document.querySelector('.main-content');
// let image=document.querySelectorAll('.image');
// let images=document.querySelector('.images');
// text.addEventListener("mouseenter",()=>{
//   images.style.visibility="visible";
//   interval=setInterval(()=>{
//     image.forEach((element)=>{
//       element.style.opacity=0;
//     });
//       image[index].style.opacity=1;
//       index++;
//       if(index>=image.length){
//         index=0;
//       }
// },300);
// });
// text.addEventListener("mouseleave",()=>{
//     clearInterval(interval);  
//     image.forEach((element)=>{
//       element.style.opacity=1;    
//     });
//   index=0;
//   });

// setTimeout(()=>{
//   console.log('hello')
// },500)

// setInterval(()=>{
//     console.log('Asmita')
// },500)


