//DEFINICIÓN DEL ESQUEMA DE LA BASE DE DATOS USANDO MONGOOSE
var mongoose = require('mongoose');

//A la hora de definir el esquema podemos exigir que cumplan un requisito de tipo
//o que sean requeridos o dar valores por defecto
//Este esquema será usado cuando se interactue con la base de datos (en el tirectorio helpers)
var todoSchema = new mongoose.Schema({
    empresa_txt: {
        type: String,
        required: 'Nom de empresa requerida'
    },
    agencia_txt: {
        type: String,
    },
    mail_txt: {
        type: String,
        required: 'Email de empresa requerida'
    },
    telefono: {
        type: String,
        required: 'Email de empresa requerida'
    },
    mkdigital_txt: {
        type: String,
    },
    url_txt: {
        type: String,
        required: 'Email de empresa requerida'
    },
    administrador_txt: {
        type: String,
    },
    urladmin_txt: {
        type: String,
    },
    usuarioadmin_txt: {
        type: String,
    },
    passadmin_txt: {
        type: String,
    },
    ftp_txt: {
        type: String,
    },
    urlftp_txt: {
        type: String,
    },
    userftp_txt: {
        type: String,
    },
    passftp_txt: {
        type: String,
    },
    cpanel_txt: {
        type: String,
    },
    urlcpanel_txt: {
        type: String,
    },
    usercpanel_txt: {
        type: String,
    },
    passcpanel_txt: {
        type: String,
    },
    hostingweb_txt: {
        type: String,
    },
    urlhosting_txt: {
        type: String,
    },
    userhosting_txt: {
        type: String,
    },
    passhosting_txt: {
        type: String,
    },
    mailchimp_txt: {
        type: String,
    }
});

//Creo un modelo mongoose especificando el nombre del modelo, el modelo en si y el nombre
//de la colección que tendrá en Mongo (el nombre de la base la 'tabla')
var Todo = mongoose.model('clientesdc', todoSchema, 'clientes');

module.exports = Todo;