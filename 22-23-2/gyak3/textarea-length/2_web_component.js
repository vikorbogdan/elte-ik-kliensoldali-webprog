// customElement web kompoonens 
// 1. extends HTMLElement
class LengthyTextArea extends HTMLElement{
    constructor(){
        // 2. Meghívjuk a HTMLElement konstruktorát (super)
        super();
        console.log(this) // Hasznos kiírni a konzolra, hogy épp mire vonatkozik a 'this'
        this.textarea = this.querySelector("textarea");
        this.characterCountSpan = this.querySelector("span")

        this.initialization();
        // 3. Az eseménykezelőt konstruktorban rendeljük hozzá
        this.textarea.addEventListener("input", this.setCharacterCount);
    }

    setCharacterCount = () => {
        this.characterCountSpan.innerHTML = this.textarea.value.length;
    }
    
    initialization = () =>{
        this.setCharacterCount();
    }
}
// 4. definiáljuk a custom elementet, első paraméter ahogyan hivatkozunk rá a HTML-ben, második paraméter a class neve
customElements.define("lengthy-textarea",LengthyTextArea);
