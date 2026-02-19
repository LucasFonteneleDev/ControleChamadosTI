import { useState, useEffect } from 'react'
import InputVariavel from './inputVariavel';

export default function ModalCadastro({ 
    show,
    onClose,
    titulo,
    classesConteudo,
    dadosIniciais,
    onSave}) {

  const [form, setForm] = useState(dadosIniciais);

  useEffect(() => {
    setForm(dadosIniciais);
  }, [dadosIniciais]);

  const handleChange = (chave, valor) => {
    setForm(prev => ({
      ...prev,
      [chave]: valor
    }));
  };

  const handleSubmit = () => {
    onSave(form);
  };

  if (!show) return null;

  return (
    <div>
      <div className="modal-backdrop-custom" onClick={onClose}>
        <div className="modal show d-block" >
          <div className="modal-dialog modal-dialog-scrollable modal-lg modal-dialog-centered" role="document">
            <div className="modal-content shadow-lg" onClick={(e) => e.stopPropagation()}>

              <div className="modal-header">
                <h5 className="modal-title">{titulo}</h5>
                <button type="button" className="btn-close" onClick={onClose}></button>
              </div>

              <div className="modal-body" >
                <div className={classesConteudo}>
                  {
                    Object.entries(form).map(([chave, valor]) => 
                      chave != "id" && 
                      <InputVariavel
                        key={chave}
                        chave={chave}
                        valor={valor}
                        handleChange={handleChange}
                      />)
                  }

                </div>
              </div>

              <div className="modal-footer">
                <button className="btn btn-primary" onClick={handleSubmit}>Salvar</button>
                <button className="btn btn-secondary" onClick={onClose}>Cancelar</button>
              </div>

            </div>
          </div>
        </div>
      </div>

      <br />

    </div>
    
  );
}
