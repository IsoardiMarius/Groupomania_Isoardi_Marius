// Permet de crypter le mot de passe
const bcrypt = require('bcrypt');
// Permet de créer un token
const jwt = require('jsonwebtoken');
const userController = require('../models/user.model');
const validator = require("email-validator")

// Créer un userController
exports.signup = (req, res, next) => {

    const ValidateEmail = validator.validate(req.body.email);
    if (!ValidateEmail) {
        res.status(400)
        res.end("Le format de l'email est incorrect.");
    } else {


        // On crypte le mot de passe
        bcrypt.hash(req.body.password, 10)
            .then(hash => {
                const newUser = new userController({
                    nom: req.body.nom,
                    prenom: req.body.prenom,
                    pseudo: req.body.pseudo,
                    email: req.body.email,
                    password: hash
                });
                // On sauvegarde userController dans la base de donnée
                newUser.save()
                    .then(res.status(201).json({message: 'Utilisateur crée !'}))
                    .catch(error => res.status(400).json({error}));


            })
            .catch(error => res.status(500).json({error}));
    }}
// Connection
    exports.login = (req, res, next) => {
        //On récupère l'utilisateur dans la base de donnée
        userController.findOne({email: req.body.email})
            .then(user => {
                if (user === null) {
                    console.log(user)
                    res.status(401).json({message: 'Paire identifiant/mot de passe incorrecte'});
                } else {
                    // On compare le password dans la requête à celui de la base donnée
                    bcrypt.compare(req.body.password, user.password)
                        .then(valid => {
                            if (!valid) {
                                res.status(401).json({message: 'Paire identifiant/mot de passe incorrecte'});
                            } else {

                                // On crée un token qu'on renvoie à l'utilisateur
                                res.status(200).json({
                                    userId: user._id,
                                    token: jwt.sign(
                                        {userId: user._id},
                                        'RANDOM_TOKEN_SECRET',
                                        {expiresIn: '24h'}
                                    )
                                });
                            }
                        })
                        .catch(error => res.status(500).json({error}));
                }
            })
            .catch(error => res.status(500).json({error}));
    };