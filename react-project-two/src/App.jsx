import './App.css'
import './index.css'
import UserCard from "./components/UserCard"
import shivaji from "./assets/shivaji.jpeg"
import maharana_pratap from "./assets/maharana_pratap.jpg"
import prithvi from "./assets/prithvi.jpg"

function App() {
  
  return (
       <div className="container">
             <UserCard name="Shivaji" desc="Shivaji Maharaj was the founder of the Maratha Empire in western India. 
             A brilliant military strategist and a visionary leader, he challenged the Mughal Empire and established
              a strong and independent kingdom based on the values of Swarajya (self-rule)." 
              image ={shivaji} style={{"border-radius":"10px"}}  />

              <UserCard name="Maharana Pratap "desc="Maharana Pratap was a Rajput king of Mewar, known 
              for his valor and unyielding resistance against the Mughal emperor Akbar. 
              He is most famous for the Battle of Haldighati in 1576, where he bravely fought with limited resources
              . His horse, Chetak, is equally legendary for its loyalty. Maharana Pratap symbolizes Rajput pride, honor,
               and the spirit of independence." image = {maharana_pratap} style= {{"border-radius":"10px"}}/>

               <UserCard name="Prithvi raj Chahuahn"desc="Prithviraj Chauhan was a Rajput king from the Chahamana (Chauhan) 
               dynasty who ruled parts of northern India. He is best known for his battles against Muhammad Ghori. 
               Though he initially defeated Ghori in the First Battle of Tarain (1191), he was defeated in the
                second battle in 1192. His story is often romanticized in folklore, especially his love story 
                with Sanyogita and his defiant spirit." image={prithvi} style = {{"border-radius":"10px"}}/>
       </div>
  )
}

export default App
