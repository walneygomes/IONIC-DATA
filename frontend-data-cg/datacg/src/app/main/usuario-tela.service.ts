import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioTElaService {

 private data = [
    {
      category: 'Dicas para treinos',
      expanded: true,
      products: [
        { id: 0, name: 'Levantamento', price: '8', image:"https://horadotreino.com.br/wp-content/uploads/2013/08/rotina-academia-treino.jpg" },
        { id: 1, name: 'Tuta ensina', price: '5' ,image:"https://horadotreino.com.br/wp-content/uploads/2013/08/rotina-academia-treino.jpg" },
        { id: 2, name: 'Yoga', price: '9' ,image:"https://horadotreino.com.br/wp-content/uploads/2013/08/rotina-academia-treino.jpg" },
     
      ]
    },
    {
      category: 'Dicas para alimentação',
      products: [
        { id: 4, name: 'Comidas nutritivas', price: '8' ,image:"https://i0.statig.com.br/fw/3g/qm/o7/3gqmo7sywyxe1jnmamlsyo3wy.jpg" },
        { id: 5, name: 'Caboidratos', price: '6'  ,image:"https://horadotreino.com.br/wp-content/uploads/2013/08/rotina-academia-treino.jpg"}
      ]
    },
    {
      category: 'Dicas de postura',
      products: [
        { id: 6, name: 'Ham & Egg', price: '8' ,image:"https://horadotreino.com.br/wp-content/uploads/2013/08/rotina-academia-treino.jpg" },
        { id: 7, name: 'Basic', price: '5'  ,image:"https://horadotreino.com.br/wp-content/uploads/2013/08/rotina-academia-treino.jpg"},
        { id: 8, name: 'Ceaser', price: '9' ,image:"https://i0.statig.com.br/fw/3g/qm/o7/3gqmo7sywyxe1jnmamlsyo3wy.jpg" }
      ]
    }
  ];
 

  constructor() { }


  getExibirInformacaoMotivacao() {
    return this.data;
  }


}
