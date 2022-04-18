

app.get("/books",(req,res) => {
  let{name}=req.query;
  console.log(name)
  console.log(req,query)
   if(name){
     const book = books.find((book)=>books.name === name)
     res.json(book)
   }else{
     res.json({
       request_from : req.url,
       data:books
     })
   }
})