import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
    padding:0;
    margin: 0;
    box-sizing:border-box;  
    font-family: 'Roboto', sans-serif;
}
::-webkit-scrollbar{
    width: 1rem;
 }
 ::-webkit-scrollbar-track{
    background-color: black;
 }
 ::-webkit-scrollbar-thumb{
    background-color: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
 }

 li{
    list-style: none;
    margin-right: 5px;
 }


h1{
    font-size:3.5rem;
    font-weight:1000; 
}
 p{
   opacity:.7;
    font-size:1.2rem;
    line-height:1.5;
    font-weight:400;
 }
 h2{
   font-size: 2.8rem;
   font-weight:800; 
    color: black;
 }
 a{
   text-decoration: none;
}
 .btn{
 font-size: medium;
  height: 2rem;
   border-radius: 10%;
  transition: all .5s ease;
  box-shadow:5px 10px 20px lightgrey;
}
.btn:hover {
   transform: translateY(3px);
   background-color: #7b68ee;
   color: white;
}

.card{
transition: all .5s ease;
}
.card:hover{
  transform:translateY(-15px) ;
}
.row{
  justify-content: space-evenly;
}
/* .logo{
   background-color: #7b68ee;
   color: #7b68ee;
}  */



`;