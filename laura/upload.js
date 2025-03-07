const fetch = require('node-fetch');
const axios = require('axios')
const FormData = require('form-data');
const { fromBuffer } = require('file-type');

///UPLOADS
//UPLOAD USANDO O SUPA
const supa = async (buffer) => {
let { ext } = await fromBuffer(buffer);
    let bodyForm = new FormData();
    bodyForm.append("file", buffer, "file." + ext);
    let res = await fetch("https://i.supa.codes/api/upload", {
        method: "post",
        body: bodyForm,
    });
    let data = await res.json();
    let resultUrl = data
    return resultUrl.link
}

//UPLOAD USANDO O 8030
const api8030 = async (buffer) => {
    let { ext } = await fromBuffer(buffer);
    let bodyForm = new FormData();
    bodyForm.append("file", buffer, "file." + ext);
    let res = await fetch("https://8030.us.kg/api/upload.php", {
        method: "post",
        body: bodyForm,
    });
    let data = await res.json();
    let resultUrl = data.result ? data.result.url : '';
    return resultUrl;
}

//UPLOAD USANDO O CATBOT
 const catbox = async (buffer) => {
  let { ext } = await fromBuffer(buffer);
  let bodyForm = new FormData();
  bodyForm.append("fileToUpload", buffer, "file." + ext);
  bodyForm.append("reqtype", "fileupload");

  let res = await fetch("https://catbox.moe/user/api.php", {
    method: "POST",
    body: bodyForm,
  });

  let data = await res.text();
  return data;
  }

//UPLOAD USANDO A API DA BOTCAHX
const api2 = async (buffer) => {
  let { ext } = await fromBuffer(buffer);
  let bodyForm = new FormData();
  bodyForm.append("file", buffer, "file." + ext);
  let res = await fetch("https://file.btch.rf.gd/api/upload.php", {
    method: "post",
    body: bodyForm,
  });
  let data = await res.json();
  let resultUrl = data.result ? data.result.url : '';
  return resultUrl;
}

//EXPORTANDO AS FUNÇÕES DE UPLOADS
module.exports = { supa, api8030, catbox, api2 };
//ME AGRADEÇA DEPOIS KKK
