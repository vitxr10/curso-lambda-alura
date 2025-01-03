export function log(message){
    console.log(process.env.MINHA_VAR);
    console.log(JSON.stringify('Adicionado log via função com github actions', message));
}