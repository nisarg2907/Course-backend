import express from 'express';
import cors from 'cors';
const server = express();
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  };
  
  server.use(cors(corsOptions));
const courses = [
    {
      id: 1,
      author: "John Doe",
      name: "Web Development Fundamentals",
      price: 49.99
    },
    {
      id: 2,
      author: "Jane Smith",
      name: "Python Programming Basics",
      price: 29.99
    },
    {
      id: 3,
      author: "Chris Johnson",
      name: "Data Science Essentials",
      price: 59.99
    },
    {
      id: 4,
      author: "Emily Davis",
      name: "Mobile App Development with React Native",
      price: 39.99
    },
    {
      id: 5,
      author: "Alex Brown",
      name: "Machine Learning for Beginners",
      price: 54.99
    },
    {
      id: 6,
      author: "Grace Lee",
      name: "JavaScript Masterclass",
      price: 44.99
    },
    {
      id: 7,
      author: "Sam Wilson",
      name: "Introduction to UX/UI Design",
      price: 34.99
    },
    {
      id: 8,
      author: "Eva Martinez",
      name: "Cybersecurity Fundamentals",
      price: 49.99
    },
    {
      id: 9,
      author: "Ryan Adams",
      name: "Artificial Intelligence Concepts",
      price: 64.99
    },
    {
      id: 10,
      author: "Sophie White",
      name: "Digital Marketing Strategies",
      price: 39.99
    }
  ];


  
const PORT = 3001;
server.use(express.json());
server.get("/courses",(req,res)=>{
    console.log('koi a courses maagya')
    res.json(courses); 
})
server.listen(PORT,()=>{
    console.log("server is running on port 3001");
});


