import { useEffect, useState } from "react"
import supabase from "../supabase"
import { userTable } from "@/constants/database";
export default function Home() {
const [users, setUsers]=useState([])

  useEffect(()=>{
    const fetchUsers=async()=>{
      const {data,error}=await supabase.from(userTable).select();
      setUsers(data)
      console.log(data)
    }
    fetchUsers();
  },[])
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2"><h1>Hello world</h1>
    
    {users.map(({id,name,age})=>( //destructuring
      <div key={id}><p>{name} is {age} years old</p></div>
    ))}
    </div>
  )
}
