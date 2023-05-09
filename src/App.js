import { useEffect, useState } from 'react';
import './App.css';
import io from "socket.io-client";

function App() {
  let socket = io.connect("http://localhost:3001");
  let [msg,setmsg] = useState("");
  let [name,setname] = useState("");
  let room = 123;
  let [user , setuser] = useState([]);
  let [man,setman] = useState([]); 
  let SendMsg = () => {
    let data = {
      msg : msg,
      room : room
    };
    socket.emit("message" , data);
  }

  socket.on("userjoinned" , data => {
    // setuser((i) => [...i,data])
    console.log(data);
    // setman((list) => [...list , data])
  });

  let Room = () => {
    let data = {
      username : name,
      room : room
    }
    socket.emit("join" , data)
  }

  useEffect(() => {
    socket.on('add' , data => {
      setuser((list) => [...list , data]);
    })

    socket.on("userjoinned" , data => {
      // setuser((i) => [...i,data])
      console.log(data);
      // setman((list) => [...list , data])
    });
    socket.on("received" , data => {
      console.log(data);
    },[socket]);
    socket.on("privatemsg" , data => {
      console.log(data);
    });
  })

  let Private = (i) => {
    let data = {
      id : i,
      msg : "hello"
    }
    socket.emit("private" , data);
    // console.log(i);
  }

  let Show = () => {
    console.log(man);
  }

  // console.log(user);

  return (
    <div className="App">

      <input type="text" value = {name} onChange={e => setname(e.target.value)}/>

      <button onClick={Room}>Join room</button><br></br>
      
     <input type="text" value={msg} onChange={e => setmsg(e.target.value)}/>
     <button onClick={SendMsg}>Send</button>

    <button onClick={Show}>show</button>

     
    </div>
  );
}

export default App;
