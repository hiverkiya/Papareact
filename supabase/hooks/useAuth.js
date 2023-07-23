import supabase from '../supabase'
import React, { createContext, memo, useContext, useEffect, useMemo, useState } from 'react'
const AuthContext=createContext({})
export function AuthProvider({children}) {
 const [user,setUser]=useState(null)
const [error,setError]=useState(null)
const [initialLoading, setInitialLoading]=useState(true)
const [loading, setLoading]=useState(false)

useEffect(()=>{
const user=supabase.auth.getUser();
setUser(user)
setInitialLoading(false)
},[supabase])

useEffect(()=>{
 const {data,error}=supabase.auth.onAuthStateChange((event,session)=>{
  console.log(event,session)
  if(session){
    setUser(session.user)
  }
  else
  {
    setUser(null)
  }
 }
 )
 if(error)setError(error)
 return()=>{
  data.subscription.unsubscribe()
 }
},[supabase])

const signUp=async(email,password)=>{
setLoading(true)
  await supabase.auth.signUp({
    email,password,
  }).catch((error)=>setError(error)).finally(()=>setLoading(false))
  }

const signOut=async()=>{
  setLoading(true)
 await supabase.auth.signOut().catch(error=>setError(error)).finally(()=>setLoading(false));
}

  const signIn=async(email,password)=>{
    setLoading(true)
    await supabase.auth.signInWithPassword({
      email,password
    }).catch((error)=>setError(error)).finally(()=>setLoading(false))
  }
const memoedValue=useMemo(
  ()=>({
    user,
    signIn,
    signUp,
    signOut,
    error,loading,
  })
,[user,loading,error])

return(
  <AuthContext.Provider value={memoedValue}>
    {!initialLoading && children}
  </AuthContext.Provider>
)
}
export default function useAuth()
{
  return useContext(AuthContext)
}