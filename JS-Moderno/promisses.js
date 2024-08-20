function teste(){
    return new Promise(function(resolve, reject){
        const erro = false;

        if(erro){
            reject('erro');
        }else{
            resolve('deu bom');
        }
    })
}
/*
teste().then(function(res){
    alert(res);
}).catch(function(err){
    alert(err);
});
*/

async function teste2() {
    await teste().then(function(res){
        alert(res);
    });
    alert('oi');
}

teste2();