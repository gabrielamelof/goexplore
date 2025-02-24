// teste texto para voz


const elementos = document.querySelectorAll('h1, h2, h3, p, li, span, button');
const voiceList = document.querySelector("#voicelist");
const btnSpeak = document.querySelector('#btnSpeak');
const synth = window.speechSynthesis;
const voices = [];


NewVoices()
if(speechSynthesis !== undefined){
    speechSynthesis.onvoiceschanged = NewVoices
}
btnSpeak.addEventListener('click', () => {
    const toSpeak = new SpeechSynthesisUtterance(elementos);
    const selectedVoiceName = voiceList.selectedOptions[0].getAttibute('data-name')
    voices.forEach((voice)=> {
        if(voice.name == selectedVoiceName) {
            toSpeak.voice = voice;
        }
    })
    synth.speak(toSpeak);
})

function NewVoices(){
    voices = synth.getVoices()
    const selectedIndex = voiceList.selectedIndex < 0 ? 0 : voiceList.selectedIndex;
    voiceList.innerHTML = '';
    voices.forEach((voice) =>{
        const listItem = document.createElement('option');
        listItem.textContent = voice.name
        listItem.setAttribute('data-lang', voice.lang); 
        listItem.setAttribute('data-name', voice.name);
        voiceList.appendChild(listItem);
    })
    voiceList.selectedIndex = selectedIndex;

}