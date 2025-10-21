function Hello(){
     let myName = 'Mayank';
     let number = 456;
     let fullName =()=>{
         return 'Mayank Saini'
     }
     return(
         <h3>Message No :{number} I am your master {fullName()}</h3>
     );
}
export default Hello;