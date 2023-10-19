exports.getTask = async (req, res) =>{
    try{
     res.send("all items");
    }catch(err){
      console.log(err);
    }
  }
  exports.PostTask= async(req, res)=>{
      try{
            res.json(req.body);
      }catch(err){
          console.log(err);
      }
  }
  
  exports.getSingleTask= async(req, res)=>{
    try{
       res.send({id:req.params.id});
    }catch(err){
      console.log(err);
    }
  }
  
  exports.updateTask = async (req, res)=>{
      try{ 
       res.send("task is updated");
      }catch(err){
          console.log(err);
      }
  }
  
  
  exports.deleteTask = async (req, res)=>{
      try{
      res.send("task is deleted");
      }catch(err){
          console.log(err);
      }
  }