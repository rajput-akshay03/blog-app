
import { useContext, useEffect } from 'react';
import './App.css';
import { appcontext } from './context/appContext';
function App() {
  const {posts,loading,totalpages} = useContext(appcontext);
  console.log(`posts data is ${posts}`);
  const {fetchblogs,pagechange,page} = useContext(appcontext);
  console.log(`totalpages ${page} and ${totalpages}`)
  useEffect(()=>{fetchblogs()},[]);
  return (
    <div className="App">
         <header className='header'>Tech Blogs</header>
         <div className='main'>
          {
            loading?(<div className="custom-loader"></div>):(posts.length===0?(<div>no posts</div>):
            (posts.map((post)=>
            (
              <div key={post.id}>
                    <p className='title'>{post.title}</p>
                    <p className='author'>by <span >{`post.author`} </span> on <span>{post.category}</span></p>
                    <p className='author'>posted on <span>{post.date}</span></p>
                    <p className='content'>{post.content}</p>
                    <div className='tags'>
                       {post.tags.map((tag,index)=>{
                          return <span key={index }>{`#${tag}`}</span>
                       })}
                    </div>
              </div>

            
              
            ))))
          }
         </div>
         <div className='footer'>
      
          {
            page>1 && (<button className='buttons' onClick={()=>pagechange(page-1)}>Previous</button>)
          }
          {
            page<totalpages&&(  <button className='buttons' onClick={()=>pagechange(page+1)}>Next</button>)
          }
       
         
          <div>{`page${page} of ${totalpages}`}</div>
         </div>
         
    </div>
  );
}

export default App;
