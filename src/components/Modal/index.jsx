import { useState } from "react";
import { EyeSlash, X } from "@phosphor-icons/react";
import styles from "./styles.module.css";

export function Modal({
  modalOpen,
  modalClose,
  listaAluno,
  nomeAluno,
  dateAluno,
}) {
  return (
    <div className={styles.containerTable}>
      <span className={styles.closeButton} onClick={modalClose}>
        <X size={22} />
      </span>

   
        <table className={styles.table}>
          <thead>
            <tr className={styles.headerTable}>
              <th>
                <EyeSlash size={22} />
              </th>
              <th>Matrícula:</th>
              <th className={styles.nomeCol}>Nome</th>
              <th>Avaliação 1</th>
              <th>Avaliação 2</th>
              <th>Média</th>
              <th>Situação</th>
              <th>Nota Recup.</th>
              <th>Resul Final</th>
            </tr>
          </thead>

          <tbody>
            {listaAluno.map((item, index) => {
              return (
                <tr key={index} className={styles.bodyTable}>
                  <td>
                    <EyeSlash size={22} />
                  </td>
                  <td>2023{index}</td>
                  <td>{item.nome}</td>
                  <td>{item.primeiraAvaliacao}</td>
                  <td>{item.segundaAvaliacao}</td>
                  <td>{item.media}</td>
                  {/* <td>{item.media > 6 ? 'Aprovado' : 'Reprovado'}</td> */}
                  <td>{item.situacaoAluno}</td>
                  <td>{item.notaRecuperacao}</td>
                  <td>{item.resultadoFinal}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      
    </div>
  );
}
