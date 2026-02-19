import Tabela from '../components/gerais/tabela';
import React, { useState } from 'react'

export default function TipoEquipamento() {
    const [TipoEquipamentos, setTipoEquipamentos] = useState([
        {id: 0, nome: "Notebook", descricao: ""},
        {id: 1, nome: "Celular", descricao: ""}
    ]);
    
    const colunas = [
        { key: 'nome', label: 'Nome' },
        { key: 'descricao', label: 'Descrição' }
    ];

  return (
    <div>
        <p className='text-center fs-3'>
            TIPO DE EQUIPAMENTO
        </p>

        <Tabela 
            dadosBase={TipoEquipamentos}
            setDadosBase={setTipoEquipamentos}
            colunas={colunas}
            titulo_cadastro={"Cadastro de Tipo de Equipamento"}
        />
    </div>
  )
}
