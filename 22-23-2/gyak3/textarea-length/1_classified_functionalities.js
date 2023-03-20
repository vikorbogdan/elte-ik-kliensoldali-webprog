class LengthyTextArea{
    constructor(container){
        this.textarea = container.querySelector("textarea");
        this.characterCountSpan = container.querySelector("span")

        this.initialization();
        this.textarea.addEventListener("input", this.setCharacterCount);
    }

    setCharacterCount = () => {
        this.characterCountSpan.innerHTML = this.textarea.value.length;
    }
    
    initialization = () =>{
        this.setCharacterCount();
    }
}

const lengthyFirst = new LengthyTextArea(document.querySelector("div#first"));
const lengthyEleventh = new LengthyTextArea(document.querySelector("div#eleventh"));
