// teste texto para voz


var elementos = document.querySelectorAll('h1, h2, h3, p, li, span, button');
var voiceList = document.querySelector("#voicelist");
var btnSpeak = document.querySelector('#btnSpeak');
var synth = window.speechSynthesis;
var voices = [];






function NewVoices(){
    voices = synth.getVoices()
    var selectedIndex = voiceList.selectedIndex < 0 ? 0 : voiceList.selectedIndex;
    voiceList.innerHTML = ''
    voices.forEach((voice) => {
        var listItem = document.createElement('option');
        listItem.textContent = voice.name
        listItem.setAttribute('data-lang', voice.lang); 
        listItem.setAttribute('data-name' , voice.name);
        voiceList.appendChild(listItem);
    })
    voiceList.selectedIndex = selectedIndex;

}

if(speechSynthesis !== undefined){
    speechSynthesis.onvoiceschanged = NewVoices;
    NewVoices();
}

btnSpeak.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(elementos);
    toSpeak.text = Array.from(elementos).map(el => el.innerText).join(' ');

    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name')
    voices.forEach((voice) => {
        if(voice.name == selectedVoiceName) {
            toSpeak.voice = voice;
        }
    })
    synth.speak(toSpeak);
})