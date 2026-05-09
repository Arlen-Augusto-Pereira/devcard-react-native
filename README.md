DevCard

Esse projeto foi desenvolvido para a IA de Aplicações móveis.

O aplicativo funciona como um cartão de visita digital para desenvolvedores mobile. O usuário consegue preencher seus dados, escolher uma cor para o cartão e visualizar o resultado final
(modestia parte, ficou toP).


Objetivo do Projeto

O objetivo da atividade foi praticar conceitos básicos de React Native utilizando Expo Router, navegação entre telas, validação de formulário, uso de estados e estilização com Flexbox.


Funcionalidades

Tela inicial de apresentação
Cadastro dos dados do desenvolvedor
Escolha da cor do cartão
Preview do cartão digital
Tela de confirmação
Navegação entre telas
Validação dos campos obrigatórios


Estrutura das Pastas

index.ts

Arquivo responsável por iniciar o Expo Router.

src/app/_layout.tsx

Arquivo responsável pela navegação entre as telas do aplicativo.

src/app/index.tsx

Tela inicial do projeto.

Nessa tela o usuário visualiza:
nome do aplicativo
descrição
botão para iniciar o cadastro


src/app/cadastro.tsx

Tela de cadastro dos dados do desenvolvedor.

Campos utilizados:
nome
cargo
empresa
anos de experiência
tecnologia favorita
cor do cartão

Também possui validações para impedir campos vazios.

src/app/preview.tsx

Tela responsável por mostrar o cartão digital.

Nessa tela:
a cor do cartão muda conforme a escolha do usuário
aparece a primeira letra do nome como avatar
aparece o nível do desenvolvedor baseado nos anos de experiência

Níveis:
Júnior
Pleno
Sênior

src/app/sucesso.tsx

Tela final de confirmação.

Mostra uma mensagem informando que o cartão foi criado com sucesso.

Tecnologias Utilizadas

React Native
Expo
Expo Router
TypeScript

Desenvolvedor

Arlen Augusto Pereira  
Engenharia de Software - 5º Semestre

Comentário: De fato foi interessante esse projeto, sair um pouco do HTML e CSS padrão tem seu valor. de div para View, p para Text, input para TextInput.
Usar CamelCase... Mas o que mais gostei foi não ter que usar @media para setar responsividade isso não tem preço kkkkkkkk.
Sendo sincero, achei puxado o prazo professor, quase não foi possível terminar o projeto a tempo. Fora isso, foi bem construtiv, deu pra ter uma noção melhor da proporção 
que é esse framework.


Segue imagem das telinhas: 

<img width="642" height="1476" alt="T1" src="https://github.com/user-attachments/assets/450e988c-951b-436d-ac90-3cd4b7f38aec" />



<img width="678" height="1492" alt="T2" src="https://github.com/user-attachments/assets/cfd8af1e-d312-44bc-8b89-49fa2c1acb2f" />



<img width="706" height="1514" alt="T3" src="https://github.com/user-attachments/assets/7b029399-689b-428b-8994-8eca1fd214e2" />



<img width="704" height="1503" alt="T4" src="https://github.com/user-attachments/assets/a11aa64e-3465-4265-a969-909058881d40" />


