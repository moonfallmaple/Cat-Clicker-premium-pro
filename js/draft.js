// Case1:Show One Cat
// let cat=document.getElementById('Cat1');
// let CatCount=document.getElementById('count');
// let count=0;

// cat.addEventListener("click", function(){
//       count++;
//       CatCount.innerHTML=count;
// })

// Case2:Show Two Cat
// let cat1=document.getElementById('Cat1');
// let cat2=document.getElementById('Cat2');
// let Cat1Count=document.getElementById('cat1Count');
// let Cat2Count=document.getElementById('cat2Count');
// let count1=0;
// let count2=0;

// cat1.addEventListener("click", function(){
//       count1++;
//       Cat1Count.innerHTML=count1;
// })
// cat2.addEventListener("click", function(){
//   count2++;
//   Cat2Count.innerHTML=count2;
// })


// Case3:Show Five Cat

//情况一：使用闭包

// let img=["images/Cat1.jpg","images/Cat2.jpg","images/Cat3.jpg","images/Cat4.jpg","images/Cat5.jpg"]
// let catName = [1,2,3,4,5];

//在dom中加入ul和img元素

// let elem = document.createElement('ul');
// document.body.appendChild(elem);
// let imgElem = document.createElement('img');
// document.body.appendChild(imgElem);

// let Cat0=document.getElementById('Cat0Count');
// let Cat1=document.getElementById('Cat1Count');
// let Cat2=document.getElementById('Cat2Count');
// let Cat3=document.getElementById('Cat3Count');
// let Cat4=document.getElementById('Cat4Count');


// for (var i = 0; i < catName.length; i++) {
//   //当前猫名
//     var currentcatName = catName[i];
//   //当前照片
//     let currentImg=img[i]
//   //新增一个li元素
//     let li = document.createElement('li'); 
//   //新增一个span元素
//     let span = document.createElement("SPAN"); 
//     span.id= `cat${i}Count`
//     //添加猫的名字 
//     li.textContent = currentcatName; 
//     span.innerHTML="  :  Count  " + countNum;
//     li.addEventListener('click', (function(imgCopy) {  //对于当前li元素，添加一个监听，使得被点击时展示相对应的照片，如果此处不用闭包，则alert一直显示5
//       return function(){
//         imgElem.src=imgCopy;
//           // alert(Name);
//           countNum++;
//           `cat${i}Count`.innerHTML="  :  Count  " + countNum;
//       };
//     })(currentImg));
//     elem.appendChild(li);//添加到ul元素中
//     li.appendChild(span);
// }


// // 情况二：不使用闭包
// for (var i = 0; i < catName.length; i++) {
//     // This is the number we're on...
//     var currentcatName = catName[i];
//     let currentImg=img[i]
//     var li = document.createElement('li'); //新增一个li元素
//     li.textContent = currentcatName; //添加猫的名字 
//     elem.appendChild(li);//添加到ul元素中
//     li.addEventListener('click', function() {  //对于当前li元素，添加一个监听，使得被点击时展示相对应的照片，此处不用闭包，所以alert一直显示5
//         imgElem.src=currentImg;
//         alert(currentcatName);
//   })

// }