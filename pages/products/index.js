
export default function Home() {
   return (
      <main>Products List
         {[{ id: 1, name: 'banana' }, { id: 2, name: 'laranja' }].map(item => (
            <div>
               <div>{item.id}</div>
               <div>{item.name}</div>
               <button>Delete</button>
            </div>
         ))}
      </main>
   )
}
