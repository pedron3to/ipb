import Image from "next/image";
import backgroundImage from "../../public/ipb1.png";

export default function Sobre() {
  return (
    <>
      <div className="bg-[#4A634B] h-40 md:h-[300px] flex justify-center items-end md:items-center ">
        <h1 className="text-2xl md:text-6xl font-semibold mb-2 text-white text-left mt-20 mb-4">
          Sobre a IPB
        </h1>
      </div>
      <div className=" mx-auto max-w-7xl ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className=" p-4 md:p-20 mb-8">
            <h2 className="text-lg md:text-3xl font-semibold my-2 md:my-8 text-[#4DA186]">
              INTRODUÇÃO
            </h2>
            <p className="text-p text-sm md:text-lg font-thin">
              A leitura do Portal IPB História será de grande valia para aqueles
              que desejam conhecer mais de perto a Igreja Presbiteriana, sua
              doutrina e princípios, hierarquia e principalmente sua história,
              iniciada com a vinda de Ashbel Green Simonton (1833-1867), o
              fundador da Igreja Presbiteriana do Brasil, que juntamente com o
              Rev. José Manoel da Conceição (1822-1873), o primeiro pastor
              evangélico brasileiro, foram as personagens mais notáveis dos
              primórdios do presbiterianismo no Brasil.
            </p>
            <p className="text-p text-sm md:text-lg mt-2 font-thin">
              Em narrativa clara e objetiva, o Portal IPB História traça uma
              narrativa histórica da igreja, descrevendo as origens mais remotas
              do presbiterianismo que remontam aos primórdios da Reforma
              Protestante, do século XVI.
            </p>

            <p className="text-p text-sm md:text-lg mt-2 font-thin">
              Ao disponibilizarmos este farto material, esperamos atender, com
              muita prioridade, as necessidades de conhecimento de todos aqueles
              que tiverem o desejo de conhecer a história e funcionamento da
              Igreja Presbiteriana.
            </p>
            <p className="text-p text-sm md:text-lg mt-2 font-thin">
              Este trabalho foi desenvolvido pelo Rev. Alderi Souza de Matos,
              historiador oficial da Igreja Presbiteriana.
            </p>

            <p className="text-p text-sm md:text-lg mt-2 font-thin">
              Este trabalho foi desenvolvido pelo Rev. Alderi Souza de Matos,
              historiador oficial da Igreja Presbiteriana.
            </p>
          </div>

          <div className="flex  p-4 items-center justify-center">
            <div className="md:hidden mb-4">
              <Image
                src="/ipb1.png"
                alt="Placeholder"
                width={250}
                height={200}
              />
            </div>
            <div className="hidden md:block">
              <Image
                src="/ipb1.png"
                alt="Placeholder"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative bg-cover bg-center flex justify-center items-center text-white p-10 md:p-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/historyBackground.jpg')`, // Replace '/historyBackground.jpg' with the actual image path
        }}
      >
        <div className="z-10 text-center max-w-3xl">
          <h1 className="text-xl md:text-4xl font-semibold mb-8 ">
            HISTÓRIA DO PRESBITERIANISMO
          </h1>
          <p className="text-white text-sm md:text-lg mt-2 font-thin">
            As origens históricas mais remotas do presbiterianismo remontam aos
            primórdios da Reforma Protestante do século XVI. Como é bem sabido,
            a Reforma teve início com o questionamento do catolicismo medieval
            feito pelo monge alemão Martinho Lutero (1483-1546) a partir de
            1517. Em pouco tempo, os seguidores desse movimento passaram a ser
            conhecidos como “luteranos” e a igreja que resultou do mesmo foi
            denominada Igreja Luterana.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-16 max-w-7xl mx-auto">
        <div className="flex  p-4 items-center justify-center">
          <div className="md:hidden mb-4">
            <Image
              src="/ipbDuvida.png"
              alt="Placeholder"
              width={200}
              height={200}
            />
          </div>
          <div className="hidden md:block">
            <Image
              src="/ipbDuvida.png"
              alt="Placeholder"
              width={300}
              height={200}
            />
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-md md:text-xl font-semibold mb-4 md:mb-8 text-[#4DA186]">
            O QUE É IPB
          </h2>
          <p className="text-p text-sm md:text-lg mt-2 font-thin">
            A Igreja Presbiteriana do Brasil é uma federação de igrejas que têm
            em comum uma história, uma forma de governo, uma teologia, bem como
            um padrão de culto e de vida comunitária. Historicamente, a IPB
            pertence à família das igrejas reformadas ao redor do mundo, tendo
            surgido no Brasil em 1859, como fruto do trabalho missionário da
            Igreja Presbiteriana dos Estados Unidos.
          </p>
        </div>
      </div>
      <hr className="border-t border-gray-300 my-1 md:my-4 max-w-7xl mx-auto" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-16 max-w-7xl mx-auto">
        <div className="flex  p-4 items-center justify-center">
          <div className="md:hidden mb-4">
            <Image
              src="/ipbbrasil.png"
              alt="Placeholder"
              width={200}
              height={200}
            />
          </div>
          <div className="hidden md:block">
            <Image
              src="/ipbbrasil.png"
              alt="Placeholder"
              width={300}
              height={200}
            />
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-md md:text-xl font-semibold mb-4 md:mb-8 text-[#4DA186]">
            DENOMINAÇÕES PRESBITERIANAS NO BRASIL
          </h2>
          <p className="text-p text-sm md:text-lg mt-2 font-thin">
            A Igreja Presbiteriana do Brasil é a mais antiga denominação
            reformada do país, tendo sido fundada pelo missionário Ashbel Green
            Simonton (1833-1867), que aqui chegou em 1859. Mais tarde, ao longo
            do século 20, surgiram outras igrejas congêneres que também se
            consideram herdeiras da tradição calvinista. São as seguintes, por
            ordem cronológica de organização: Igreja Presbiteriana Independente
            do Brasil (1903), com sede em São Paulo; Igreja Presbiteriana
            Conservadora (1940), com sede em São Paulo; Igreja Presbiteriana
            Fundamentalista (1956), com sede em Recife; Igreja Presbiteriana
            Renovada do Brasil (1975), com sede em Arapongas, Paraná, e Igreja
            Presbiteriana Unida do Brasil (1978), com sede no Rio de Janeiro.
          </p>
        </div>
      </div>

      <div
        className="relative bg-cover bg-center flex justify-center items-center text-white p-10 md:p-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/ashbel.jpg')`,
        }}
      >
        <div className="z-10 text-center max-w-3xl ">
          <h1 className="text-xl md:text-4xl font-semibold mb-4 md:mb-8">
            REV. ASHBEL GREEN SIMONTON
          </h1>
          <p className="text-white text-sm md:text-lg mt-2 font-thin">
            Ashbel Green Simonton (1833-1867), o fundador da Igreja
            Presbiteriana do Brasil, nasceu em West Hanover, no sul da
            Pensilvânia, e passou a infância na fazenda da família, denominada
            Antigua. Eram seus pais o médico e político William Simonton e D.
            Martha Davis Snodgrass (1791-1862), filha de um pastor
            presbiteriano. Ashbel era o mais novo de nove irmãos. Os irmãos
            homens (William, John, James, Thomas e Ashbel) costumavam
            denominar-se os &quot;quinque fratres&quot; (cinco irmãos). Um
            deles, James Snodgrass Simonton, quatro anos mais velho que Ashbel,
            viveu por três anos no Brasil e foi professor na cidade de
            Vassouras, no Rio de Janeiro. Uma das quatro irmãs, Elizabeth
            Wiggins Simonton (1822-1879), conhecida como Lille, veio a casar-se
            com o Rev. Alexander Latimer Blackford, vindo com ele para o Brasil.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12  max-w-7xl mx-auto">
        <div className="p-4 flex flex-col items-center">
          <div className="bg-green-500 inline-flex items-center justify-center w-12 h-12 text-white leading-12 rounded-full relative">
            <svg
              className="svg-inline--fa fa-book fa-w-14 w-6 h-6"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="book"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              data-fa-i2svg=""
            >
              <path
                fill="white"
                d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"
              ></path>
            </svg>
          </div>
          <h2 className="text-md md:text-xl font-bold my-4 md:my-6 text-[#4DA186]">
            ESBOÇO HISTÓRICO
          </h2>
          <p className="text-p text-sm md:text-lg md:mt-2 font-thin text-center">
            Atualmente existem no Brasil várias denominações de origem reformada
            ou calvinista. Entre elas incluem-se a Igreja Presbiteriana
            Independente, a Igreja Presbiteriana Conservadora e algumas igrejas
            criadas por imigrantes vindos da Europa continental, tais como
            suíços, holandeses e húngaros. No entanto, a maior e mais antiga
            denominação reformada do país é a Igreja Presbiteriana do Brasil. Ao
            mesmo tempo, convém lembrar que, já nos primeiros séculos da
            história do Brasil, houve a presença de calvinistas em nosso país.
          </p>
          <hr className="border-t border-gray-300 my-4" />
        </div>
        <div className="p-4 flex flex-col items-center">
          <div className="bg-green-500 inline-flex items-center justify-center w-12 h-12 text-white leading-12 rounded-full relative">
            <svg
              className="h-6 w-6"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="times"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              fill="currentColor"
            >
              <path d="M352 128h-96V32c0-17.67-14.33-32-32-32h-64c-17.67 0-32 14.33-32 32v96H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h96v224c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V256h96c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32z"></path>
            </svg>
          </div>

          <h2 className="text-md md:text-xl font-bold my-4 md:my-6 text-[#4DA186]">
            IMPLANTAÇÃO DA IPB (1859-1869)
          </h2>
          <p className="text-p text-sm md:text-lg md:mt-2 font-thin text-center">
            O surgimento do presbiterianismo no Brasil resultou do pioneirismo e
            desprendimento do Rev. Ashbel Green Simonton (1833-1867). Nascido em
            West Hanover, na Pensilvânia, Simonton estudou no Colégio de Nova
            Jersey e inicialmente pensou em ser professor ou advogado.
            Influenciado por um reavivamento em 1855, fez a sua profissão de fé
            e, pouco depois, ingressou no Seminário de Princeton. Um sermão
            pregado por seu professor, o famoso teólogo Charles Hodge, levou-o a
            considerar o trabalho missionário no estrangeiro. Três anos depois,
            candidatou-se perante a Junta de Missões da Igreja Presbiteriana dos
            Estados Unidos, citando o Brasil como campo de sua preferência. Dois
            meses após a sua ordenação, embarcou para o Brasil, chegando ao Rio
            de Janeiro em 12 de agosto de 1859, aos 26 anos de idade.
          </p>
          <hr className="border-t border-gray-300 my-4" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12  max-w-7xl mx-auto">
        <div className="p-4 flex flex-col items-center">
          <div className="bg-green-500 inline-flex items-center justify-center w-12 h-12 text-white leading-12 rounded-full relative">
            <svg
              className="svg-inline--fa fa-church fa-w-20 w-6 h-6"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="church"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M464.46 246.68L352 179.2V128h48c8.84 0 16-7.16 16-16V80c0-8.84-7.16-16-16-16h-48V16c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v48h-48c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h48v51.2l-112.46 67.48A31.997 31.997 0 0 0 160 274.12V512h96v-96c0-35.35 28.65-64 64-64s64 28.65 64 64v96h96V274.12c0-11.24-5.9-21.66-15.54-27.44zM0 395.96V496c0 8.84 7.16 16 16 16h112V320L19.39 366.54A32.024 32.024 0 0 0 0 395.96zm620.61-29.42L512 320v192h112c8.84 0 16-7.16 16-16V395.96c0-12.8-7.63-24.37-19.39-29.42z"
              ></path>
            </svg>
          </div>
          <h2 className="text-md md:text-xl font-bold my-4 md:my-6 text-[#4DA186]">
            IGREJA REFORMADA
          </h2>
          <p className="text-p text-sm md:text-lg md:mt-2 font-thin text-center">
            Basicamente, quando falamos de Fé Reformada, referimo-nos à
            verdadeira religião cristã, como foi recuperada durante a Reforma
            Protestante dos séculos 16 e 17. Esse texto tratará de alguns
            assuntos referentes à fé Reformada, que a Igreja Presbiteriana do
            Brasil crê, mas você não encontrará a abordagem daqueles pontos
            cardeais da religião cristã que as Igrejas Reformadas compartilham
            com as demais, a saber, a Trindade, a expiação, a justificação pela
            fé, o nascimento virginal e a ressurreição corpórea de Jesus, seus
            milagres e a inspiração das Escrituras Sagradas.
          </p>

          <p className="text-p text-sm md:text-lg md:mt-2 font-thin text-center">
            A Fé Reformada adota todas as doutrinas apostólicas estabelecidas na
            Bíblia e formuladas em credos pelos grandes concílios ecumênicos da
            Igreja Primitiva. Ela é um relacionamento com Deus, através da
            mediação de Jesus Cristo, baseado no Evangelho revelado por Ele e
            pelas Escrituras Sagradas.
          </p>

          <p className="text-p text-sm md:text-lg md:mt-2 font-thin text-center">
            O conteúdo desse trabalho é seletivo e não abrange toda a fé cristã;
            não se pretende nem objetiva oferecer um resumo exaustivo da fé
            Reformada, antes aborda os princípios reformados, a Teocentricidade,
            a eleição, o sacrifício de Cristo e a Graça Irresistível de Jesus
            por nós, pecadores.
          </p>
          <hr className="border-t border-gray-300 my-4" />
        </div>
        <div className="p-4 flex flex-col items-center">
          <div className="bg-green-500 inline-flex items-center justify-center w-12 h-12 text-white leading-12 rounded-full relative">
            <svg
              className="svg-inline--fa fa-bible fa-w-14 w-6 h-6"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bible"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M448 358.4V25.6c0-16-9.6-25.6-25.6-25.6H96C41.6 0 0 41.6 0 96v320c0 54.4 41.6 96 96 96h326.4c12.8 0 25.6-9.6 25.6-25.6v-16c0-6.4-3.2-12.8-9.6-19.2-3.2-16-3.2-60.8 0-73.6 6.4-3.2 9.6-9.6 9.6-19.2zM144 144c0-8.84 7.16-16 16-16h48V80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v48h48c8.84 0 16 7.16 16 16v32c0 8.84-7.16 16-16 16h-48v112c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16V192h-48c-8.84 0-16-7.16-16-16v-32zm236.8 304H96c-19.2 0-32-12.8-32-32s16-32 32-32h284.8v64z"
              ></path>
            </svg>
          </div>

          <h2 className="text-md md:text-xl font-bold my-4 md:my-6 text-[#4DA186]">
            DOUTRINA
          </h2>
          <p className="text-p text-sm md:text-lg md:mt-2 font-thin text-center">
            Os Símbolos de Fé oficiais da Igreja Presbiteriana do Brasil são:
            Confissão de Fé de Westminster, Catecismo Maior de Westminster e
            Breve Catecismo de Westminster.
          </p>
          <hr className="border-t border-gray-300 my-4" />
        </div>
      </div>
    </>
  );
}
