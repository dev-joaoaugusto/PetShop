import { useState } from 'react';
import './App.css';


function App() {
  const [activeLink, setActiveLink] = useState('Serviços');

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  const handleNextClick = () => {
    if (cardWrapperRef.current) {
      const cardWidth = cardWrapperRef.current.children[0].offsetWidth + 20;
      cardWrapperRef.current.scrollLeft += cardWidth;
    }
  };

  const handlePrevClick = () => {
    if (cardWrapperRef.current) {
      const cardWidth = cardWrapperRef.current.children[0].offsetWidth + 20;
      cardWrapperRef.current.scrollLeft -= cardWidth;
    }
  };



  return (
    <div className="main-content">
      <header>
        <h1 className="logo">CãotinhoDeAmor</h1>

        <div className="menu-wrapper">
          <ul className='navbar'>
            <li>
              <a
                href="#servico"
                className={activeLink === 'Serviços' ? 'ativo' : ''}
                onClick={() => handleLinkClick('Serviços')}>Serviços
              </a>
            </li>
            <li>
              <a
                href="#sobre"
                className={activeLink === 'Sobre' ? 'ativo' : ''}
                onClick={() => handleLinkClick('Sobre')}>Sobre
              </a>
            </li>
            <li>
              <a
                href="#animais"
                className={activeLink === 'Animais' ? 'ativo' : ''}
                onClick={() => handleLinkClick('Animais')}>Animais
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className={activeLink === 'Contato' ? 'ativo' : ''}
                onClick={() => handleLinkClick('Contato')}>Contato
              </a>
            </li>
          </ul>
        </div>

        <button>Agendar</button>
      </header>

      <div className='home'>
        <h1>Onde o <span>Amor</span><br></br>e o <span>Cuidado</span><br></br> se <span>Encontram</span></h1>
        <img src="img/dog.png" />
      </div>

      <div className='ondinha'></div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F5F5DC" fill-opacity="1" d="M0,128L60,138.7C120,149,240,171,360,176C480,181,600,171,720,149.3C840,128,960,96,1080,96C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>

      <div class="cards-container">
        <div class="card">
          <h2>+500<br></br>Consultas</h2>
        </div>


        <div class="card">
          <h2 class="card-title">+350<br></br>PetFriends</h2>
        </div>


        <div class="card">
          <h2 class="card-title">+1000<br></br>Banhos</h2>
        </div>
      </div>

      <div className='titulos' id="servico">
        <h1>
          <i class="fa-solid fa-paw left-paw"></i>
          Serviços
          <i class="fa-solid fa-paw right-paw"></i>
        </h1>
      </div>

      <div class="cardservico">
        <div class="cardserv1">
          <img src="img/cachorro1.png" class="card-img" />
          <div class="overlay">
            <h2>Banho/Tosa</h2>
            <p>Deixe seu pet limpo e estiloso com nossos serviços de banho e tosa.</p>
          </div>
        </div>

        <div class="cardserv2">
          <img src="img/cachorro2.png" class="card-img" />
          <div class="overlay">
            <h2>Produtos</h2>
            <p>Encontre acessórios e produtos de qualidade para seu pet.</p>
          </div>
        </div>

        <div class="cardserv1">
          <img src="img/cachorro3.png" class="card-img" />
          <div class="overlay">
            <h2>Ração</h2>
            <p>Nutrição completa para cães e gatos, das marcas mais confiáveis.</p>
          </div>
        </div>

        <div class="cardserv2">
          <img src="img/cachorro4.png" class="card-img" />
          <div class="overlay">
            <h2>Consulta</h2>
            <p>Atendimento veterinário especializado para cuidar da saúde do seu pet.</p>
          </div>
        </div>

        <div class="cardserv1">
          <img src="img/cachorro5.png" class="card-img" />
          <div class="overlay">
            <h2>Hotel</h2>
            <p>Hospedagem confortável e segura enquanto você estiver ausente.</p>
          </div>
        </div>
      </div>

      <div className='titulos' id="sobre">
        <h1>
          <i class="fa-solid fa-paw left-paw"></i>
          Sobre
          <i class="fa-solid fa-paw right-paw"></i>
        </h1>
      </div>

      <div className='sobre'>
        <div className="sobre-container-conteudo"> <img src='img/sobre1.png' alt='Sobre' />
          <div className='sobre-texto'>
            <h1>
              No CãotinhoDeAmor, acreditamos que cada pet é parte da família. Nossa clínica nasceu com o propósito de oferecer um espaço seguro, acolhedor e cheio de carinho para cães e gatos.
              <br></br> Contamos com profissionais dedicados e apaixonados por animais, oferecendo serviços de consultas, vacinas, banho, tosa e acompanhamento de saúde. Aqui, seu melhor amigo recebe atenção especial em cada detalhe, porque entendemos que amor e cuidado fazem toda a diferença.
            </h1>
          </div>
        </div>
      </div>

      <div className='titulos' id="animais">
        <h1>
          <i class="fa-solid fa-paw left-paw"></i>
          Animais
          <i class="fa-solid fa-paw right-paw"></i>
        </h1>
      </div>

      <div className='atendanimais'>
        <div class="cardanimal">
          <div class="card-foto">
            <img src='img/dog1.jpg' alt="Foto do pet" />
          </div>
          <div class="card-conteudo">
            <h2>Cachorros</h2>
            <p>Oferecemos consultas, vacinas, banho, tosa e muito carinho para seu melhor amigo.</p>
          </div>
        </div>
        <div class="cardanimal">
          <div class="card-foto">
            <img src='img/cat.jpg' alt="Foto do pet" />
          </div>
          <div class="card-conteudo">
            <h2>Gatos</h2>
            <p>Atendimento especial para felinos, com todo cuidado e conforto que eles merecem.</p>
          </div>
        </div>
        <div class="cardanimal">
          <div class="card-foto">
            <img src='img/bird.jpg' alt="Foto do pet" />
          </div>
          <div class="card-conteudo">
            <h2>Pássaros</h2>
            <p>Cuidado dedicado para aves ornamentais, garantindo saúde e bem-estar.</p>
          </div>
        </div>
        <div class="cardanimal">
          <div class="card-foto">
            <img src='img/rato.jpg' alt="Foto do pet" />
          </div>
          <div class="card-conteudo">
            <h2>Roedores</h2>
            <p>Atendimento para hamsters, coelhos, porquinhos-da-índia e outros pequenos roedores.</p>
          </div>
        </div>
      </div>

      <div className='titulos' id="sobre">
        <h1>
          <i class="fa-solid fa-paw left-paw"></i>
          Contato
          <i class="fa-solid fa-paw right-paw"></i>
        </h1>
      </div>

      <div className='contatos'>
  <div className='context'>
    <h1>Informações</h1>

    <div className='info-item'>
      <h2>Localização</h2>
      <p>📍 Rua dos Bichinhos, 123 - Centro, São Paulo - SP</p>
    </div>

    <div className='info-item'>
      <h2>Número</h2>
      <p>📞 (11) 98765-4321</p>
    </div>

    <div className='info-item'>
      <h2>Horário de Funcionamento</h2>
      <p>
        ⏰ Segunda a Sexta: 08h às 19h <br />
        Sábado: 09h às 14h <br />
        Domingo: Fechado
      </p>
    </div>
  </div>

  <img src='img/mapa.png' alt="Mapa da clínica" />
</div>


    </div >



  );
}
export default App;