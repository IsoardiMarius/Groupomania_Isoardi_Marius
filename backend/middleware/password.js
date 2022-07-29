const passwordSchema = require("../models/password.model");

// On vérifie si le password envoyé par l'utilisateur respecte le modèle
module.exports = (req, res, next) => {
    if (!passwordSchema.validate(req.body.password)) {
        res.writeHead(
            400,
            "Le mot de passe doit comprendre 8 caractères dont deux chiffre, sans espaces. Ainsi qu'une lettre majuscule et minuscule.",
            {
                "content-type": "application/json",
            }
        );
        res.end("Le format du mot de passe est incorrect.");
    } else {
        next();
    }
};