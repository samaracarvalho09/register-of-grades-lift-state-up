import { useState } from "react";
import { Modal } from "../Modal";
import styles from "./styles.module.css";

export function CadastroListaAluno() {
  const [nomeAluno, setNomeAluno] = useState("");
  const [nota1, setNota1] = useState(null);
  const [nota2, setNota2] = useState(null);
  const [notaRecuperacao, setNotaRecuperacao] = useState(null);

  const [listaAluno, setListaAluno] = useState([]);

  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleAdd() {
    // Calcula a média
    const calculaMedia = (parseFloat(nota1) + parseFloat(nota2)) / 2;

    // Define a situação do aluno
    const situacaoAluno = calculaMedia > 6 ? "Aprovado" : "Recuperação";

    // Define o resultado final com base na situação do aluno e na nota de recuperação
    let resultadoFinal;
    if (situacaoAluno === "Aprovado") {
      resultadoFinal = "Aprovado";
    } else if (parseFloat(notaRecuperacao) > 6) {
      resultadoFinal = "Aprovado";
    } else {
      resultadoFinal = "Reprovado";
    }

  
    // Cria o objeto com os dados do aluno
    const dateAluno = {
      nome: nomeAluno,
      primeiraAvaliacao: parseFloat(nota1).toFixed(1),
      segundaAvaliacao: parseFloat(nota2).toFixed(1),
      media: calculaMedia.toFixed(1),
      situacaoAluno: situacaoAluno,
      notaRecuperacao:
        situacaoAluno === "Aprovado" ? "Não se aplica" : "Pendente",
      resultadoFinal: resultadoFinal,
    };

    if (!isNaN(nota1) && nomeAluno !== "") {
      setListaAluno([...listaAluno, dateAluno]);

      console.log(listaAluno);
      setNomeAluno(""); // Limpa o campo de nome
      setNota1(""); // Limpa o campo de nota1
      setNota2(""); // Limpa o campo de nota2
      setNotaRecuperacao(""); // Limpa o campo de notaRecuperacao
    }
  }

  // A função `modalOpen` é chamada quando o botão "Acessar lista" é clicado, o que define a variável de estado `isOpenModal` como `true` para mostrar o modal.
  
  function modalOpen() {
    setIsOpenModal(true);
  }

  // A função `modalClose` é chamada quando o modal é fechado, o que define a variável de estado `isOpenModal` como `false` para ocultar o modal.

  function modalClose() {
    setIsOpenModal(false);
  }

  

  return (
    <>
      <div className={styles.containerCadastroAluno}>
        <div className={styles.containerInputAluno}>
          <label>Aluno:</label>
          <input
            type="text"
            placeholder="Nome do aluno"
            className={styles.inputAluno}
            onChange={(e) => setNomeAluno(e.target.value)}
            value={nomeAluno}
          />
        </div>
        <div className={styles.containerNotas}>
          <div className={styles.containerInputNota}>
            <label>Avaliação 1</label>
            <input
              type="text"
              className={styles.notas}
              onChange={(e) => setNota1(e.target.value)}
              value={nota1}
            />
          </div>
          <div className={styles.containerInputNota}>
            <label>Avaliação 2</label>
            <input
              type="text"
              className={styles.notas}
              onChange={(e) => setNota2(e.target.value)}
              value={nota2}
            />
          </div>
          <div className={styles.containerInputNota}>
            <label>Recuperação</label>
            <input
              type="text"
              className={styles.notas}
              onChange={(e) => setNotaRecuperacao(e.target.value)}
              value={notaRecuperacao}
            />
          </div>
        </div>
        <div className={styles.containerButtons}>
          <button className={styles.buttonCadastrar} onClick={handleAdd}>
            Cadastrar
          </button>
          <button className={styles.buttonAcessarLista} onClick={modalOpen}>
            Acessar lista
          </button>
        </div>
      </div>
      
        {isOpenModal && (
          <Modal modalClose={modalClose} listaAluno={listaAluno} />
        )}
    
    </>
  );
}
