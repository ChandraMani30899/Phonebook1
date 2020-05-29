const User = require('../models/User')

exports.dashboard = (req, res) => {
  res.redirect("/contact");
};
    


exports.addcontactForm = (req,res)=>{
    res.render('AddContact/add')
}

exports.addcontact = (req,res) =>{
  const name = req.body.NAME
  const dob = req.body.DOB
  const mobile = req.body.phone
  const email = req.body.Email
  
  let data =new User();
  
  data.name=name
  data.dob=dob
  data.email=email
  data.mobile=mobile

  data.save().then(()=>{
    res.redirect('/contact')
  }).catch(()=>{
   res.send(req.body)
     
  })
}

exports.viewList = (req, res) => {
  User.find().then((contacts)=>{
      res.render('AddContact/list',{contacts})
  })
 
}

exports.deletecontact = (req, res)=>{
  var id = req.params.id;
  User.findByIdAndRemove(id).then(function () {
    res.redirect('/contact');
  });
};



exports.editcontact = (req,res)=>{
    res.redirect('/contact')
  }
    
