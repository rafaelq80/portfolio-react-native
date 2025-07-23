<h1>Desafio de projeto - Portfólio - React Native</h1>

<br />

<div align="center">
    <img src="https://i.imgur.com/EGUUELt.png" title="source: imgur.com" width="60%"/> 
    <p>+</p>
    <img src="https://ik.imagekit.io/vzr6ryejm/react_native/logo-wordmark-light_v2.png?updatedAt=1719817353728" title="source: imgur.com" width="25%"/> 
</div>


<br />

<div align="center">
  <img src="https://img.shields.io/github/languages/top/rafaelq80/portfolio-react-native?style=flat-square" />
  <img src="https://img.shields.io/github/repo-size/rafaelq80/portfolio-react-native?style=flat-square" />
  <img src="https://img.shields.io/github/languages/count/rafaelq80/portfolio-react-native?style=flat-square" />
  <img src="https://img.shields.io/github/last-commit/rafaelq80/portfolio-react-native?style=flat-square" />
  <img src="https://img.shields.io/github/issues/rafaelq80/portfolio-react-native?style=flat-square" />
  <img src="https://img.shields.io/github/issues-pr/rafaelq80/portfolio-react-native?style=flat-square" />
  <img src="https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen" alt="Status: Concluído">
</div>

<br />

Aplicativo mobile desenvolvido com **React Native** e **Expo**, projetado para exibir de forma elegante um **perfil profissional completo** e suas **principais habilidades técnicas**. Conta com uma **interface moderna**, responsiva e intuitiva, além de uma **navegação fluida por abas**, garantindo uma excelente experiência ao usuário.

<br />

## 📱 Visão Geral

O app possui duas telas principais:

- ✅ **Perfil:** mostra foto, nome, título, localização, breve descrição, links para redes sociais e estatísticas profissionais.
- ✅ **Habilidades:** (componente não incluso nos anexos, mas estilizado no projeto) exibe categorias de competências e níveis de proficiência.

A navegação é feita por meio de uma **Bottom Tab Navigator**, estilizada com ícones dinâmicos do pacote `@expo/vector-icons`.

<br />

## 🔐 Funcionalidades

- Visualização de perfil com imagem e dados profissionais
- Acesso a redes sociais via `Linking`
- Abertura do cliente de email com `mailto:`
- Estilização customizada com `StyleSheet` e tema modular
- Interface responsiva com uso de `SafeAreaProvider`

<br />

## 🗂️ Estrutura do Projeto

```
.
├── src/
│   ├── screens/
│   │   ├── Home.tsx             # Navegação por abas
│   │   ├── profile/
│   │   │   ├── Profile.tsx      # Tela de perfil
│   │   │   └── ProfileStyles.ts # Estilos do perfil
│   │   └── skills/
│   │       └── SkillsStyles.ts  # Estilos da tela de habilidades
│   ├── data/
│   │   └── ProfileData.ts       # Dados estáticos do perfil (referenciado)
│   └── styles/
│       └── Colors.ts            # Paleta de cores personalizada
```

<br />

## 📦 Tecnologias Utilizadas

| Tecnologia                                                   | Descrição                                                    |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [React Native](https://reactnative.dev/)                     | Framework para desenvolvimento mobile multiplataforma        |
| [Expo](https://expo.dev/)                                    | Plataforma que facilita o desenvolvimento e execução de apps React Native |
| [React Navigation](https://reactnavigation.org/)             | Biblioteca de navegação para apps React Native               |
| [@expo/vector-icons](https://docs.expo.dev/guides/icons/)    | Conjunto de ícones integrado ao Expo                         |
| [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context) | Gerencia margens seguras em dispositivos com notch ou bordas arredondadas |

<br />

## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/) (v16 ou superior)
- npm

<br />

## 🛠️ Instalação e Configuração

### Instalação do Expo

```bash
npm install expo-cli@latest
```

### Clonando o repositório

```bash
git clone https://github.com/rafaelq80/portfolio-react-native
cd portfolio-react-native
```

### Instalando as dependências

Utilize o comando abaixo para instalar todas as bibliotecas através do npx:

```bash
npx expo install
```

<br />

## ▶️ Executando o Projeto

| Comando           | Descrição                         |
| ----------------- | --------------------------------- |
| `npm start`       | Inicia o projeto com o Expo       |
| `npm run android` | Executa o app no emulador Android |
| `npm run ios`     | Executa o app no emulador iOS     |
| `npm run web`     | Executa o app no navegador (web)  |

📱 Abra o app no Emulador de sua preferência ou no seu celular (Android ou IOS), apontando para o QR-Code que será exibido no Terminal

> [!TIP]
>
> Para executar o app no seu celular, visite a loja de aplicativos do seu aparelho e instale o **Expo Go**.

> [!WARNING]
>
> No Ambiente Windows, só é possível gerar o app na versão Android. Para gerar o app na versão IOS é necessário utilizar uma máquina virtual ou um computador da Apple executando o MAC OS.

<br />

## 📸 Capturas de Tela 

| <img src="https://i.imgur.com/G7GyFPE.png" width="100%"/> | <img src="https://i.imgur.com/ClHQbPv.png" width="100%"/> | <img src="https://i.imgur.com/hkMwjw3.png" width="100%"/> |
| :-------------------------------------------------------: | :-------------------------------------------------------: | :-------------------------------------------------------: |
|                     **Profile - 01**                      |                      **Profile 02**                       |                        **Skills**                         |

<br />

## 📌 Notas

- Os dados do perfil estão sendo importados de `ProfileData.ts`. Certifique-se de que este arquivo contenha as chaves `name`, `title`, `location`, `about`, `photo`, `email`, `social` e `stats`.

<br />

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch (`git checkout -b feature/NovaFeature`)
3. Commit suas alterações (`git commit -m 'feat: adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

<br />

## 📄 Licença

Este projeto é apenas para fins educacionais e demonstrativos.

<br />

⭐Se este projeto foi útil para você, não esqueça de deixar uma estrela!