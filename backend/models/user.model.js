// On créer notre modèle user
const mongoose = require('mongoose');
// Permet de s'assurer qu'on ne puisse pas créer 2 user avec le même email
const uniqueValidator = require('mongoose-unique-validator');
// Permet de vérifier le format l'email


const userSchema = new mongoose.Schema(
    {
        nom: {type:String, required: true},
        prenom: {type:String, required:true},
        pseudo: {type: String, required: true, unique: true, minLength: 3, maxLength: 55},
        email: {type: String, required: true, unique: true, lowercase: true},
        password: {type: String, required: true},
    },
    {
        timestamps: true
    }
);

userSchema.plugin(uniqueValidator);
// On exporte le modèle pour les controllers
module.exports = mongoose.model('utilisateur', userSchema);