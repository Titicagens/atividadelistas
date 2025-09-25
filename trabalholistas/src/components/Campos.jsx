import { useState } from "react";

import "../styles/campos.css";

export default function Campos() {

  const [itens, setItens] = useState([]);

  const [descricao, setDescricao] = useState("");

  const [qtd, setQtd] = useState(1);

  const [valorUN, setValorUN] = useState(0);

  
  function adicionarItem(e) {
    e.preventDefault(); 

        const newItem = {
      descricao,
      quantidade: qtd,
      valorUnitario: valorUN,
    };

    setItens([...itens, newItem]);
  
}

    function removerItem(index) {
    
    setItens(itens.filter((_, i) => i !== index)); // ? ok
  }

  return (
    <main className="orcamento">
      <header className="orcamento0-header">
        <h1>Orçamentos</h1>
      </header>

      <section className="orcamento-form">
        <h2>Adicionar item</h2>

        <form onSubmit={adicionarItem} action="">
          <label className="form-campo" htmlFor="">
            Descrição:
            <input
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              type="text"
              name="descricao"
              placeholder="Descrição"
            />
          </label>

          <label className="form-campo" htmlFor="">
            Quantidade:
            <input
              value={qtd}
              onChange={(e) => setQtd(Number(e.target.value))}
              type="number"
              name="quantidade"
              placeholder="Quantidade"
            />
          </label>

          <label className="form-campo" htmlFor="">
            Valor Unitário:
            <input
              value={valorUN}
              onChange={(e) => setValorUN(Number(e.target.value))}
              type="number"
              step="0.01"
              name="valorUnitario"
            />
          </label>

          <button className="form-botao" type="submit">
            Adicionar
          </button>
        </form>
      </section>

      <section className="orcamento-tabela">
        <h2>Itens do orçamento</h2>
        <table className="tabela-itens">
          <thead className="tabela-cabecalho">
            <tr>
              <th>Descrição</th>
              <th>Quantidade</th>
              <th>Valor Unitário</th>
              <th>Total</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            
            {itens.map((item, index) => (
              <tr key={index} className="tabela-linha">
                <td>{item.descricao}</td>
                <td>{item.quantidade}</td>
                <td>{item.valorUnitario.toFixed(2)}</td>
                <td>{(item.quantidade * item.valorUnitario).toFixed(2)}</td>
                <td className="tabela-acao">
                  
                  <button onClick={() => removerItem(index)}>Remover</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      
      <footer className="orcamento-footer">
        <h3 className="total-geral">
          
          Total Geral: R${" "}
          {itens
            .reduce(
              (acc, itens) => acc + itens.quantidade * itens.valorUnitario,
              0
            )
            .toFixed(2)}
        </h3>
      </footer>
    </main>
  );
}
