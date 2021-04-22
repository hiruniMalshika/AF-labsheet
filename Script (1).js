use sliit

db.faculties.insert({name:'Computer Science'})



db.faculties.insert({name:'Computer Science',established:'2001'})
db.faculties.insertOne({name:'Business Management', established:'2002'})
db.faculties.updateOne({name:'Computer Science'}, {$set:{established:'2001'}})

db.faculties.find({established:'2001'});

db.student.insert({name:'John', dateOfBirth:'1990-01-01T00:00:00Z', subject:['Computer Architeure', 'Application Frameworks']});
db.student.find({name:'John'})
db.student.find({_id:'606307c0422d68d38c528259'})
db.student.updateOne({name:'John'}, {$set:{subject:['Distributed systems', 'Computer Architeure', 'Application Frameworks']}} )


db.student.insert({name:'Smith', dateOfBirth:'1990-01-15T00:00:00Z', subject:[ 'Application Frameworks', 'Computer Architeure'], isActive:true})
db.student.insert({name:'Jane', dateOfBirth:'1990-01-15T00:00:00Z', subject:[ 'Application Frameworks', 'Computer Architeure'], isActive:false})
db.student.find()
db.student.updateOne({name:'John'},{$set:{isActive:false}} )
db.student.remove({name:'John'})

