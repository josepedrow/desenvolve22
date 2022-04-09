import { carregaTarefa } from './carregaTarefa.js'
import BotaoConclui from './concluiTarefa.js'
import BotaoDeleta from './deletaTarefa.js'

// let tarefas = []

export const handLeNovoItem = (evento) => {
    evento.preventDefault()

    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []

    // const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const calendario = document.querySelector('[data-form-date]')
    const data = moment(calendario.value) //formatando data usando lib moment
    const horario = data.format("HH:mm")

    const dataFormatada = data.format('DD/MM/YYYY')

    const concluida = false

    const dados = {
        valor,
        dataFormatada,
        horario,
        concluida
    }

    const tarefasAtualizadas = [...tarefas, dados] //tarefas + o q o user add

    // const criaTarefa = Tarefa(dados)
    //     // tarefas.push(dados) //para salvar no array tarefas
    // lista.appendChild(criaTarefa)

    // sessionStorage.setItem("tarefas", JSON.stringify(dados))
    localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas))


    input.value = " "

    carregaTarefa()


}

export const Tarefa = ({ valor, horario, concluida }, id) => {


    const tarefa = document.createElement('li')

    const conteudo = `<p class="content">${horario} * ${valor}</p>`

    if (concluida) {
        tarefa.classList.add('done')
    }
    tarefa.classList.add('task')
    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui(carregaTarefa, id))
    tarefa.appendChild(BotaoDeleta(carregaTarefa, id))

    return tarefa

}