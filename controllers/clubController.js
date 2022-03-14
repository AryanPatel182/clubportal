
const Club = require('../models/clubModels');

// exports.get_clubs = (req, res) => {
//     res.render("club.ejs");
// }

const createClub = (req,res) => {
    const club = new Club(req.body);
    res.json(club);
    club.save()
        .then(reault => {
            res.redirect('/club');
        })
        .catch(err => {
            res.send(err);
        });
}

// const getAllClubs = (req, res) => 
// {
//     // res.json(Club.find());
//     Club.find()
//         .then(result => {
//             res.render( club,  {clubs : result, title: "SendingClub" });
//         })
//         .catch(err => {
//             console.log(err);
//         });
               
//     // res.render('home', { titles: 'Home' });
// }

// exports.createClub = async(req,res,next)=>{

//     const club = await Club.create(req.body);
//     res.status(201).json({
//         success:true,
//         club
//     })
//     // res.render( club,  {clubs : result, title: "SendingClub" });

// }

//Get all products
exports.getAllClubs=  (req,res)=>
{
    console.log("IN")

    const clubs = Club.find();
    console.log(clubs)

    res.status(201).json({
        success:true,
        clubs
    })
}

module.exports = {
    // get_clubs,
    createClub,
//     getAllClubs
}