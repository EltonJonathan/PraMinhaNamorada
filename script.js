document.addEventListener("DOMContentLoaded", function(){
    const envelope = document.getElementById("evnelope");
    const btnOpen = document.getElementById("open");
    const btnReset = document.getElementById("close");

    function openEnvelope(){
        envelope.classList.add("open");
        envelope.classList.remove("closeEv");
    }

    function closeEnvelope(){   
        envelope.classList.add("closeEv");
        envelope.classList.remove("open");
    }

    envelope.addEventListener("click", openEnvelope);
    btnOpen.addEventListener("click", openEnvelope);
    btnReset.addEventListener("click", closeEnvelope);
})