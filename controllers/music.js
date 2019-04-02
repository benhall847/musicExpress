
function retreiveAll(req,res){
    res.json({message:"LOTS OF MUSIC!"})
}
function create(req,res){
    res.json({message:"Youre an ARTIST!"})
}
function update(req,res){
    res.json({message:"UPDATE THE SONG!"})
}
function deleteOne(req,res){
    res.json({message:"DELETE THE DATABASE!"})
}

module.exports = {
    retreiveAll,
    create,
    update,
    deleteOne
}