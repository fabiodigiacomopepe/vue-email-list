/* RICHIESTA
Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

Bonus:
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

const {createApp} = Vue;

createApp({
    data(){
        return {
            emailDaGenerare: 10,
            emailGenerate: []
        }
    },
    mounted() {
        for (let i = 0; i < this.emailDaGenerare; i++) {
            axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(
                risultato => {
                    nuovaEmail = risultato.data.response;
                    console.log(nuovaEmail);
                    this.emailGenerate.push(nuovaEmail);
                }
            )
        }
        console.log(this.emailGenerate);
    }
}).mount("#myApp")