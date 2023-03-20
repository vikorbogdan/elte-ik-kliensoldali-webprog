// Ennél eltér a funkcionalitás az előző verziókhoz képest, jelez amikor a felhasználó eléri a 20 karakter hosszt.
class LengthyTextArea extends HTMLTextAreaElement{
    constructor(){
        super();
        console.log(this)
        this.initialization();
        this.addEventListener("input", this.checkCharacterCount);
    }

    checkCharacterCount = (e) => {
        if(this.value.length > 20){
            alert("Elérted a maximális hosszt!");
        };
    }
    
    initialization = () =>{
        this.checkCharacterCount();
    }
}

customElements.define("lengthy-textarea",LengthyTextArea, {extends:"textarea"});
