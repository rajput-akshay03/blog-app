import { createContext, useState } from "react";
export const appcontext = createContext();
export function Contexting({children}){
    const [loading,setloading] = useState(false);
    const [posts,setposts] = useState([]);  
    const [page,setpage] = useState(1);
    const [totalpages,settotalpages] = useState(null);
    // fetching the data from api
    async function fetchblogs(page=1)
    {
        setloading(true);
        let Url = `https://codehelp-apis.vercel.app/api/get-blogs?page=${page}`
        try{
                const result = await fetch(Url);
                const data = await result.json();
                setpage(data.page);
                setposts(data.posts);
                settotalpages(data.totalPages);
        }
        catch(err)
        {
              console.log("error while fetching the data")
              setpage(1);
              setposts([]);
              settotalpages(null);
        }
        setloading(false);
    }
    // handling page change
    function pagechange(page)
    {
         setpage(page);
         fetchblogs(page);
    }
    //  children are all the childs inside Context
    //  value object is snapshotted here
    const value = {
        loading,
        setloading,
        posts,
        setposts,
        page,
        setpage,
        totalpages,
        settotalpages,
        fetchblogs,
        pagechange
    }
    return <appcontext.Provider value={value}>{children}</appcontext.Provider>
}