function pg1(){
    const pg1 = document.getElementById('escalacao')
    const pg2 = document.getElementById('sorteio_times')
    if (pg1.style.display === "block") {
        pg2.style.display = "none"
        pg1.style.display ="block"
    } else {
        pg1.style.display = "block"
        pg2.style.display = "none"
    }
}
function pg2(){
    const pg1 = document.getElementById('escalacao')
    const pg2 = document.getElementById('sorteio_times')
    if (pg1.style.display === "none") {
        pg2.style.display = "block"
        pg1.style.display ="none"
    } else {
        pg1.style.display = "none"
        pg2.style.display = "block"
    }
}
function preview_gk1(){
    //goleiro time 1
    let ft_gk1_prev = document.querySelector('#ft_gk1')
    let file_gk1 = document.querySelector('#gk1').files[0]
    var reader = new FileReader()
    reader.onloadend = function(){
        ft_gk1_prev.src = reader.result
    }
    if (file_gk1) {
        reader.readAsDataURL(file_gk1)
    } else {
        ft_gk1_prev.src = ""
    }
}
function preview_z1(){
 //zagueiro 1 time 1
 let file_z1 = document.querySelector('#z1_file').files[0]
 let ft_z1_prev = document.querySelector('#ft_z1')
 var reader = new FileReader()
    reader.onloadend = function(){
        ft_z1_prev.src = reader.result
    }
    if (file_z1) {
        reader.readAsDataURL(file_z1)
    } else {
        ft_z1_prev.src=""
    }
}
function preview_z2(){
    //zagueiro 2 time 1
    let file_z2 = document.querySelector('#z2_file').files[0]
    let ft_z2_prev = document.querySelector('#ft_z2')
    var reader = new FileReader()
    reader.onloadend = function(){
        ft_z2_prev.src = reader.result
    }
    if (file_z2) {
        reader.readAsDataURL(file_z2)
    } else {
        ft_z2_prev.src=""
    }
}
function preview_a1(){
    //atacante 1 time 1
    let file_a1 = document.querySelector('#a1_file').files[0]
    let ft_a1_prev = document.querySelector('#ft_a1')
    var reader = new FileReader()
    reader.onloadend = function(){
        ft_a1_prev.src = reader.result
    }
    if (file_a1) {
        reader.readAsDataURL(file_a1)
    } else {
        ft_a1_prev.src=""
    }
}
function preview_a2(){
    //atacante 2 time 1
    let file_a2 = document.querySelector('#a2_file').files[0]
    let ft_a2_prev = document.querySelector('#ft_a2')
    var reader = new FileReader()
    reader.onloadend = function(){
        ft_a2_prev.src = reader.result
    }
    if (file_a2) {
        reader.readAsDataURL(file_a2)
    } else {
        ft_a2_prev.src=""
    }
}
function preview_a1_time2(){
    //atacante 1 time 2
    let file_a1_time2 = document.querySelector('#a1_time2_file').files[0]
    let ft_a1_time2_prev = document.querySelector('#fta1_time2')
    var reader = new FileReader()
    reader.onloadend = function(){
        ft_a1_time2_prev.src = reader.result
    }
    if (file_a1_time2) {
        reader.readAsDataURL(file_a1_time2)
    } else {
        ft_a1_time2_prev.src =""
    }
}
function preview_a2_time2(){
    //atacante 2 time 2
    let file_a2_time2 = document.querySelector('#a2_time2_file').files[0]
    let ft_a2_time2_prev = document.querySelector('#fta2_time2')
    var reader = new FileReader()
    reader.onloadend = function(){
        ft_a2_time2_prev.src = reader.result
    }
    if (file_a2_time2) {
        reader.readAsDataURL(file_a2_time2)
    } else {
        ft_a2_time2_prev.src =""
    }
}
function preview_z1_time2(){
    let file_z1_time2 = document.querySelector('#z1_time2_file').files[0]
    let ft_z1_time2_prev = document.querySelector('#ftz1_time2')
    var reader = new FileReader()
    reader.onloadend = function(){
        ft_z1_time2_prev.src = reader.result
    }
    if (file_z1_time2) {
        reader.readAsDataURL(file_z1_time2)
    } else {
        ft_z1_time2_prev.src =""
    }
}
function preview_z2_time2(){
    let file_z2_time2 = document.querySelector('#z2_time2_file').files[0]
    let ft_z2_time2_prev = document.querySelector('#ftz2_time2')
    var reader = new FileReader()
    reader.onloadend = function(){
        ft_z2_time2_prev.src = reader.result
    }
    if (file_z2_time2) {
        reader.readAsDataURL(file_z2_time2)
    } else {
        ft_z2_time2_prev.src =""
    }
}
function preview_gk2(){
    let file_gk2 = document.querySelector('#file_gk2').files[0]
    let ft_gk2_prev = document.querySelector('#ft_gk2')
    var reader = new FileReader()
    reader.onloadend = function(){
        ft_gk2_prev.src = reader.result
    }
    if (file_gk2) {
        reader.readAsDataURL(file_gk2)
    } else {
        ft_gk2_prev.src =""
    }
}
// Página 2 "Jogadores" ↓

function sortear_times(){
    

    const equipe1 = document.querySelector("#eq1")
    const equipe2 = document.querySelector("#eq2")

    let jogador1 = document.querySelector('#jogador1').value
    let jogador2 = document.querySelector('#jogador2').value
    let jogador3 = document.querySelector('#jogador3').value
    let jogador4 = document.querySelector('#jogador4').value
    let jogador5 = document.querySelector('#jogador5').value
    let jogador6 = document.querySelector('#jogador6').value
    let jogador7 = document.querySelector('#jogador7').value
    let jogador8 = document.querySelector('#jogador8').value
    let jogador9 = document.querySelector('#jogador9').value
    let jogador10 = document.querySelector('#jogador10').value
    let jogador11 = document.querySelector('#jogador11').value
    let jogador12 = document.querySelector('#jogador12').value

    let jogadores = [jogador1,jogador2,jogador3,jogador4,jogador5,jogador6, jogador7,jogador8,jogador9,jogador10,jogador11,jogador12]


    function shuffleArray(jogadores) {
        // Loop em todos os elementos
        for (let i = jogadores.length - 1; i > 0; i--) {
            // Escolhendo elemento aleatório
            const j = Math.floor(Math.random() * (i + 1));
            // Reposicionando elemento
            [jogadores[i], jogadores[j]] = [jogadores[j], jogadores[i]];
        }
        // Retornando array com aleatoriedade
        return jogadores;
        }
        
        console.log(shuffleArray(jogadores));

        
        novoArray = []
        corte = 5;

        for (var i = 0; i < jogadores.length; i = i + corte) {
        novoArray.push(jogadores.slice(i, i + corte));
        }

        console.log(novoArray);
        
        let time1 = novoArray[0]
        let time2 = novoArray[1]
        let banco = novoArray[2]
        // jogadores do time 1 titulares
        let j1_t1 = time1[0] 
        let j2_t1 = time1[1]
        let j3_t1 = time1[2]
        let j4_t1 = time1[3]
        let j5_t1 = time1[4]
        // reserva do time 1
        let reserva_time1 = banco[0]
        // jogadores do time 2 titulares
        let j1_t2 = time2[0]
        let j2_t2 = time2[1]
        let j3_t2 = time2[2]
        let j4_t2 = time2[3]
        let j5_t2 = time2[4]
        // reserva do time 2
        let reserva_time2 = banco[1]


        equipe1.innerHTML =` Time 1 -  ${j1_t1} 🏃, ${j2_t1} 🏃, ${j3_t1} 🏃, ${j4_t1} 🏃, ${j5_t1} 🏃, reserva: ${reserva_time1}🏃 `

        equipe2.innerHTML = `Time 2 (colete 🦺) - ${j1_t2} 🏃, ${j2_t2} 🏃, ${j3_t2} 🏃, ${j4_t2} 🏃, ${j5_t2} 🏃 reserva: ${reserva_time2} 🏃`
        
        let form_jogadores = document.querySelector("#form_jogadores")
        let equipes_prontas = document.querySelector("#equipes_prontas")
        if (form_jogadores.style.display === "block") {
            equipes_prontas.style.display = "block"
            form_jogadores.style.display = "none"
        } else {
            form_jogadores.style.display = "block"
        }
    
}
function nv_sorteio(){
    let form_jogadores = document.querySelector("#form_jogadores")
    let equipes_prontas = document.querySelector("#equipes_prontas")

    if (equipes_prontas.style.display === "block") {
        equipes_prontas.style.display = "none"
        form_jogadores.style.display ="block"
    } else {
        equipes_prontas.style.display = "block"
    }
}