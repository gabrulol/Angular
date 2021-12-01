import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public roupasMas = ['Camiseta Xadrez', 'Camiseta Listrada', 'Camiseta Gola Alta', 'Camiseta Polo','Regata',  'Camiseta De Botão' ,'Camiseta De Retalha', 'Camiseta Gamer', 'Camiseta Geek', 'Camiseta Lisa']
  public roupasFem = ['Vestido','Vestido Xadrez', 'Vestido Listrado' , 'Short De Malha', 'Vestido De Cetim', 'Vestido Longo', 'Vestido Curto', 'Top Preto', 'Top Colors', 'Top Geek']
  public roupasInf = ['Jaqueta Bebe Carter c/Capuz', 'Blusa Moletom c/ Capuz', 'Camisa Infatil Manga Longa', 'Camisa Infantil Manga Curta', 'Bermuda Infantil', 'Kit Cuecas Carter', 'Kit Sunga Carter', 'Calça Jeans Carter', 'Calça Moleto Carter', 'Conjunto Pijamas Carter']
  public sapatosAd = ['Alpargata Feminina c/ Borboleta', 'Alpargata Lona Moleca' , 'Tenis Esportivo Feminino', 'Tenis Casual Feminino', 'Tamanco Salto Medio', 'Coturno Masculino em Couro', 'Coturno Masculino Pegada Camelo', 'Tenis Casual Slip', 'Tenis Paulo', 'Sapatenis Casual Germany']
  public sapatosInf = ['Tenis Casual Infantil Homem Aranha', 'Tenis Casual Juvenil Homem de Ferro', 'Sandalia Papete Juvenil Dakar', 'Sandalia Papete Infantil Homem Aranha', 'Chinelo Infantil', 'Chinelo Infantil Estampado', 'Sandalia Rasteira Princesa Pessego', 'Chinelo Tiras Bichinhos Rosas', 'Tenis Texturizados PomPom', 'Sapatilha Laço Gliter Branco']
  public modaInt = ['Kit Calcinhas Microfibra Preta', 'Calcinha Buiquini Renda', 'Calcinha Fio Dental', 'Calcinha String', 'Calcinha Hot Pant', 'Sutia Cobertura Total', 'Sutia Push Strappy', 'Sutia Meia Taça', 'Robe Feminino Chiffon', 'Camisola Curta']
  public acessorio = ['Kit Presilha p/ Cabelo', 'Kit Piranha de Cabelo', 'Cinto Feminino', 'Cinto Casual Masculino', 'Bone Azul Aba Curva', 'Carteira Masculina', 'Colar Masculino', 'Kit Pulseira Masculina', 'Oculos De Sol Unissex Aviador', 'Chapeu Masculino Bucket']
  public relogio = ['Relogio Masculino X-Game', 'Relogio SmartWatch GT2', 'Relogio Smartwath Galaxy', 'Kit Relogio Feminino', 'Relogio Feminino Lince Dourado', 'Relogio Feminino X-Games BEGE', 'Relogio Lince Prateado ', 'Relogio Feminino Modaine Prateado', 'Relogio Feminino Mondaine Dourado', 'Relogio Feminino Mondaine Rose']
  public perfume = ['Kit Perfume Coffret Armani', 'Perfume Kenzo Homme', 'Perfume Yves', 'Perfume Rebel', 'Perfume Atomic', 'Perfume Camper', 'Perfume Iconic', 'Perfume Flor Cereja', 'Perfume Extreme Sport', 'Perfume Joy ']
  public acessorioCasa = ['Jogo De Cama', 'Cocha', 'Cobertor e Mantas', 'Travesseiros', 'Tapetes', 'Toalhas de Bano', 'Toalha de Rosto', 'Mesa', 'Puff', 'Prateleiras', 'Nicho']

  title = 'waap2';
}
