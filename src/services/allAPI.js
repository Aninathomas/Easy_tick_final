import commonAPI from "./commonAPI"
import { serverURL } from "./serverURL"



//api to upload task details
export const uploadAllTask = async (reqBody)=>{
   return await commonAPI('POST',`${serverURL}/tasks`,reqBody)
}

//api to get task details
export const getAllTask = async()=>{
   return await commonAPI('GET',`${serverURL}/tasks`,'')
}

//api to delete a task
export const deleteTask = async(id)=>{
   return await commonAPI('DELETE',`${serverURL}/tasks/${id}`,{})
}

//api to get a todo
export const getATask = async(id)=>{
   return await commonAPI('GET',`${serverURL}/tasks/${id}`,'')
}

//todo
export const uploadTodo = async (reqBody)=>{
   return await commonAPI('POST',`${serverURL}/todo`,reqBody)
}

export const getTodo = async()=>{
   return await commonAPI('GET',`${serverURL}/todo`,'')
}

export const deleteTodo = async(id)=>{
   return await commonAPI('DELETE',`${serverURL}/todo/${id}`,{})
}

//progress
export const uploadProgress = async (reqBody)=>{
   return await commonAPI('POST',`${serverURL}/onprogress`,reqBody)
}

export const getprogress = async()=>{
   return await commonAPI('GET',`${serverURL}/onprogress`,'')
}

export const deleteProgress = async(id)=>{
   return await commonAPI('DELETE',`${serverURL}/onprogress/${id}`,{})
}

//done
export const uploadDone = async (reqBody)=>{
   return await commonAPI('POST',`${serverURL}/done`,reqBody)
}

export const getDone = async()=>{
   return await commonAPI('GET',`${serverURL}/done`,'')
}

export const deleteDone = async(id)=>{
   return await commonAPI('DELETE',`${serverURL}/done/${id}`,{})
}