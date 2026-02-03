
import { ClinicalCase } from '../types';

export const CLINICAL_CASES: ClinicalCase[] = [
  {
    id: 1,
    title: "Caso 1",
    difficulty: "Fácil",
    stages: [
      { id: 1, name: "História Inicial", content: "A.M.L., 35 anos, professora. Queixa de olho vermelho com lacrimejamento intenso em OD há 3 dias, progredindo para OE. Relata coriza e febre baixa há 5 dias.", goal: "Qual sua principal suspeita diagnóstica inicial?" },
      { id: 2, name: "Antecedentes", content: "Paciente nega dor intensa ou redução visual. Refere que dois de seus alunos apresentaram quadros semelhantes na semana passada.", goal: "Quais achados você buscaria no exame físico para confirmar a etiologia?" },
      { id: 3, name: "Exame Físico", content: "AV 20/25 em AO. Biomicroscopia: Hiperemia difusa, folículos em fórnice inferior, secreção aquosa. Linfonodo pré-auricular aumentado e doloroso.", goal: "Qual o diagnóstico e o agente mais provável?" },
      { id: 4, name: "Diagnóstico", content: "Trata-se de uma Conjuntivite Viral (Adenovírus). O quadro é autolimitado, mas o risco de transmissão é altíssimo.", goal: "Quais as orientações de isolamento e suporte?" },
      { id: 5, name: "Evolução", content: "O quadro pode piorar nos primeiros 7 dias antes de melhorar. Podem surgir infiltrados corneanos tardios.", goal: "Qual o período de afastamento recomendado?" }
    ],
    finalDiagnosis: "Conjuntivite Viral",
    explanation: "A conjuntivite viral por Adenovírus é altamente contagiosa e frequentemente associada a quadros gripais prévios. Caracteriza-se por secreção aquosa e presença de folículos."
  },
  {
    id: 2,
    title: "Caso 2",
    difficulty: "Difícil",
    stages: [
      { id: 1, name: "História", content: "E.C.S., 58 anos, advogado. Queixa de 'cortina escura' no campo visual superior de OD há 1 dia.", goal: "Quais sintomas precursores devem ser investigados?" },
      { id: 2, name: "Fatores de Risco", content: "Há 2 semanas iniciou flashes de luz e aumento de moscas volantes. Paciente tem alta miopia (-8.00 DE em AO). Pai teve DR aos 60 anos.", goal: "Por que a alta miopia é um fator de risco importante?" },
      { id: 3, name: "Exame", content: "AV OD: movimentos de mão. PIO OD: 8 mmHg (hipotonia relativa). Fundoscopia: Retina ondulante e descolada em quadrantes superior e temporal.", goal: "Qual o diagnóstico e o que a hipotonia sugere?" },
      { id: 4, name: "Status Macular", content: "Confirmado DR regmatogênico com rotura em ferradura às 11h. Mácula ainda aplicada (macula-on).", goal: "Qual a urgência e recomendação de repouso?" },
      { id: 5, name: "Definição", content: "O sucesso visual depende da mácula permanecer aplicada até a cirurgia.", goal: "O que define um descolamento como 'regmatogênico'?" }
    ],
    finalDiagnosis: "Descolamento de Retina (DR)",
    explanation: "O descolamento regmatogênico ocorre devido a uma ruptura na retina que permite a passagem de fluido. É uma emergência cirúrgica."
  },
  {
    id: 3,
    title: "Caso 3",
    difficulty: "Difícil",
    stages: [
      { id: 1, name: "Início", content: "H.P.L., 72 anos. Perda visual súbita, completa e indolor em olho esquerdo (OE) há 3 horas, logo ao acordar.", goal: "Quais as principais hipóteses vasculares para perda súbita indolor?" },
      { id: 2, name: "Antecedentes", content: "Paciente hipertenso, diabético e ex-tabagista. Relata episódio de amaurose fugaz em OE há 1 mês.", goal: "O que a amaurose fugaz sugere?" },
      { id: 3, name: "Exame", content: "AV OE: Percepção Luminosa. Marcus Gunn positivo. Fundoscopia: Palidez retiniana difusa com mancha vermelho-cereja na fóvea.", goal: "Por que a fóvea mantém a cor vermelha?" },
      { id: 4, name: "Janela Terapêutica", content: "Emergência máxima. A janela terapêutica para tentar restaurar o fluxo é de apenas 4 a 6 horas.", goal: "Quais manobras imediatas podem ser feitas?" },
      { id: 5, name: "Prevenção", content: "O prognóstico visual é reservado, mas a investigação sistêmica é vital para prevenir um AVC.", goal: "Qual a principal causa embólica a investigar?" }
    ],
    finalDiagnosis: "Oclusão da Artéria Central da Retina (OACR)",
    explanation: "A OACR causa isquemia retiniana aguda. A mancha vermelho-cereja é patognomônica devido à circulação coroideana visível através da fóvea afinada."
  },
  {
    id: 4,
    title: "Caso 4",
    difficulty: "Médio",
    stages: [
      { id: 1, name: "Apresentação", content: "G.H.N., 8 anos. Inchaço, vermelhidão e dor intensa em OD há 2 dias. Iniciou quadro de sinusite há 5 dias.", goal: "Qual sua principal preocupação diagnóstica?" },
      { id: 2, name: "Sintomas de Alerta", content: "Criança prostrada, febre de 38,8°C. Piora da dor e dificuldade para movimentar o olho nas últimas 24h.", goal: "Como diferenciar da celulite pré-septal?" },
      { id: 3, name: "Exame Clínico", content: "Inspeção: Proptose, quemose conjuntival e limitação dolorosa da motilidade ocular.", goal: "Qual exame de imagem solicitar?" },
      { id: 4, name: "Diagnóstico por Imagem", content: "TC de órbitas mostra borramento da gordura orbitária e sinusite etmoidal.", goal: "Qual a conduta imediata?" },
      { id: 5, name: "Complicações", content: "Complicações podem incluir abscesso subperiostal, meningite ou perda visual.", goal: "Quais sinais indicam drenagem cirúrgica?" }
    ],
    finalDiagnosis: "Celulite Orbitária",
    explanation: "Infecção retroseptal grave, geralmente secundária a sinusite. Requer internação e antibióticos endovenosos."
  },
  {
    id: 5,
    title: "Caso 5",
    difficulty: "Médio",
    stages: [
      { id: 1, name: "Queixa", content: "Y.M.P., 19 anos, estudante. Queixa de piora progressiva da visão e necessidade de trocar óculos a cada 6 meses.", goal: "Qual hábito comportamental deve ser investigado?" },
      { id: 2, name: "Sinais Iniciais", content: "Paciente tem rinite alérgica intensa. Refere que a visão não fica perfeita mesmo com o grau novo.", goal: "Quais sinais na biomicroscopia sugerem o diagnóstico?" },
      { id: 3, name: "Exames", content: "AV OD 20/80. Topografia: Astigmatismo irregular e curvatura corneana elevada (padrão em cone).", goal: "Qual a utilidade da paquimetria?" },
      { id: 4, name: "Tratamento", content: "O caso é um Ceratocone progressivo. É necessário estabilizar a córnea.", goal: "Quais as opções para estabilizar a progressão?" },
      { id: 5, name: "Procedimento", content: "Paciente orientado a parar de coçar os olhos e tratar a rinite.", goal: "O que é o Crosslinking?" }
    ],
    finalDiagnosis: "Ceratocone",
    explanation: "Ectasia corneana progressiva associada ao ato de coçar os olhos. O Crosslinking estabiliza as fibras de colágeno."
  },
  {
    id: 6,
    title: "Caso 6",
    difficulty: "Difícil",
    stages: [
      { id: 1, name: "Quadro Agudo", content: "M.S.A., 65 anos, feminina. Dor ocular intensa em OD há 4 horas, náuseas, vômitos e visão de halos coloridos após sala escura.", goal: "Por que o ambiente escuro foi um gatilho?" },
      { id: 2, name: "Fatores Anatômicos", content: "Paciente tem hipermetropia (+4,00 DE). OD com hiperemia intensa e midríase média arreativa.", goal: "Quais manobras de exame são cruciais?" },
      { id: 3, name: "Achados", content: "AV OD: conta dedos. Biomicroscopia: Edema de córnea, câmara anterior rasa. Tonometria: 52 mmHg.", goal: "Como a hipermetropia predispõe a este evento?" },
      { id: 4, name: "Conduta", content: "É necessário reduzir a PIO rapidamente para evitar danos permanentes.", goal: "Quais medicações administrar na emergência?" },
      { id: 5, name: "Definitivo", content: "PIO controlada. A paciente precisará de tratamento definitivo.", goal: "Qual procedimento a laser indicado?" }
    ],
    finalDiagnosis: "Glaucoma Agudo de Ângulo Fechado",
    explanation: "Elevação súbita da PIO por bloqueio pupilar. Comum em hipermétropes devido ao olho menor e câmara rasa."
  },
  {
    id: 7,
    title: "Caso 7",
    difficulty: "Fácil",
    stages: [
      { id: 1, name: "História", content: "J.P.S., 28 anos. Olho vermelho com secreção amarelada abundante há 2 dias. Pálpebras 'coladas' ao acordar.", goal: "Quais as principais causas de secreção purulenta?" },
      { id: 2, name: "Evolução", content: "Iniciou em um olho e passou para o outro. Nega dor intensa ou redução da visão.", goal: "Como diferenciar de conjuntivite viral?" },
      { id: 3, name: "Exame", content: "AV 20/20. Biomicroscopia: Hiperemia conjuntival difusa, secreção mucopurulenta abundante.", goal: "Qual o diagnóstico e recomendação de higiene?" },
      { id: 4, name: "Tratamento", content: "O tratamento requer o uso de antibióticos tópicos.", goal: "Cite opções de antibióticos indicados." },
      { id: 5, name: "Orientações", content: "Paciente questiona sobre volta ao trabalho e compartilhamento de itens.", goal: "Quais orientações sobre contágio fornecer?" }
    ],
    finalDiagnosis: "Conjuntivite Bacteriana",
    explanation: "Infecção bacteriana da conjuntiva, autolimitada ou tratada com antibióticos para reduzir sintomas e contágio."
  },
  {
    id: 8,
    title: "Caso 8",
    difficulty: "Fácil",
    stages: [
      { id: 1, name: "Sintoma Guia", content: "L.R.F., 22 anos. Coceira intensa nos olhos há 1 semana, bilateral, associada a lacrimejamento.", goal: "Quais antecedentes pessoais investigar?" },
      { id: 2, name: "Gatilhos", content: "Paciente tem rinite alérgica e asma. Sintomas pioram na primavera.", goal: "Como o histórico de atopia reforça a suspeita?" },
      { id: 3, name: "Exame Físico", content: "Biomicroscopia: Papilas em 'paralelepípedo' na conjuntiva tarsal superior, secreção mucosa.", goal: "Qual a importância de everter a pálpebra superior?" },
      { id: 4, name: "Conduta", content: "O tratamento visa o controle da resposta inflamatória.", goal: "Quais classes de colírios são indicadas?" },
      { id: 5, name: "Hábito", content: "Paciente pergunta se pode coçar o olho quando a coceira for insuportável.", goal: "Por que coçar é contraindicado?" }
    ],
    finalDiagnosis: "Conjuntivite Alérgica",
    explanation: "Reação de hipersensibilidade tipo I. O prurido é o sintoma principal. Associada a papilas tarsais."
  },
  {
    id: 9,
    title: "Caso 9",
    difficulty: "Difícil",
    stages: [
      { id: 1, name: "Urgência", content: "R.T.M., 42 anos. Dor intensa em OE há 2 dias, fotofobia e redução visual. Usuário de lentes de contato.", goal: "Qual sua principal suspeita diagnóstica?" },
      { id: 2, name: "Risco", content: "Dormiu com as lentes. Visão em OE é conta dedos. Blefaroespasmo presente.", goal: "Quais agentes etiológicos suspeitar em usuários de lentes?" },
      { id: 3, name: "Achados", content: "Infiltrado corneano denso esbranquiçado de 3x2mm, fluoresceína positiva, hipópio de 1mm.", goal: "O que o hipópio revela?" },
      { id: 4, name: "Conduta", content: "Trata-se de uma emergência. A conduta deve ser agressiva.", goal: "Qual a conduta inicial quanto à coleta de material?" },
      { id: 5, name: "Erro Comum", content: "O paciente pergunta se pode ocluir o olho para aliviar a dor.", goal: "Por que a oclusão é contraindicada?" }
    ],
    finalDiagnosis: "Úlcera de Córnea (Ceratite Bacteriana)",
    explanation: "Infecção grave da córnea. O uso de lentes de contato é o maior fator de risco, com risco de perfuração ocular."
  },
  {
    id: 10,
    title: "Caso 10",
    difficulty: "Médio",
    stages: [
      { id: 1, name: "Doença Sistêmica", content: "M.A.P., 56 anos, diabética há 15 anos. Visão borrada e 'manchas' há 1 mês.", goal: "Quais alterações retinianas são esperadas?" },
      { id: 2, name: "Miodesopsias", content: "HbA1c recente: 9,2%. Refere manchas escuras flutuantes.", goal: "O que as miodesopsias sugerem neste caso?" },
      { id: 3, name: "Achados de Fundo", content: "Fundoscopia: Neovasos no disco óptico, hemorragias pré-retinianas e edema macular.", goal: "Qual a classificação e risco iminente?" },
      { id: 4, name: "Terapia", content: "O tratamento visa regredir os neovasos e tratar o edema.", goal: "Qual o papel do laser e Anti-VEGF?" },
      { id: 5, name: "Dúvida do Paciente", content: "Pergunta se o controle do diabetes 'limpa' os vasos que já cresceram.", goal: "Qual a importância do controle sistêmico?" }
    ],
    finalDiagnosis: "Retinopatia Diabética Proliferativa",
    explanation: "Presença de neovasos devido à isquemia retiniana crônica. Requer panfotocoagulação a laser."
  },
  {
    id: 11,
    title: "Caso 11",
    difficulty: "Médio",
    stages: [
      { id: 1, name: "Queixa", content: "I.S.M., 78 anos. Distorção de imagens (metamorfopsia) e mancha central em OD há 2 semanas.", goal: "A metamorfopsia é sintoma de qual região?" },
      { id: 2, name: "Risco", content: "Dificuldade para reconhecer rostos. Ex-tabagista. Mãe teve problema semelhante.", goal: "Quais fatores de risco estão presentes?" },
      { id: 3, name: "Formas", content: "Tela de Amsler com distorção. Fundoscopia: Drusas, hemorragia e líquido subretiniano.", goal: "Qual a forma da doença (seca ou úmida)?" },
      { id: 4, name: "Tratamento", content: "O tratamento da forma neovascular deve ser iniciado o mais breve possível.", goal: "Qual a terapia padrão ouro?" },
      { id: 5, name: "Suplementação", content: "Paciente pergunta sobre vitaminas e influência do cigarro.", goal: "Qual o papel do AREDS2?" }
    ],
    finalDiagnosis: "Degeneração Macular Relacionada à Idade (DMRI)",
    explanation: "Doença degenerativa da mácula. A forma exsudativa (úmida) requer injeções intravítreas urgentes."
  },
  {
    id: 12,
    title: "Caso 12",
    difficulty: "Fácil",
    stages: [
      { id: 1, name: "História", content: "O.F.A., 68 anos. Visão embaçada progressiva bilateral há 2 anos. Piora importante ao dirigir à noite.", goal: "Como a opacificação altera a percepção de luzes?" },
      { id: 2, name: "Evolução", content: "Necessidade de trocar óculos com frequência. Nega dor ou hiperemia.", goal: "Por que ocorre o ofuscamento noturno?" },
      { id: 3, name: "Exame", content: "AV 20/200. Biomicroscopia: Cristalino com opacificação nuclear 3+. Reflexo vermelho diminuído.", goal: "Qual o critério para indicar cirurgia?" },
      { id: 4, name: "Cirurgia", content: "O tratamento é a substituição da lente natural por uma prótese.", goal: "Como se chama a técnica com ultrassom?" },
      { id: 5, name: "Pós-Op", content: "Paciente pergunta se a doença pode 'voltar' após a cirurgia.", goal: "O que é a opacificação da cápsula posterior?" }
    ],
    finalDiagnosis: "Catarata Senil",
    explanation: "Opacificação do cristalino. Principal causa de cegueira reversível no mundo."
  },
  {
    id: 13,
    title: "Caso 13",
    difficulty: "Fácil",
    stages: [
      { id: 1, name: "Quadro", content: "C.M.R., 32 anos. Inchaço doloroso, avermelhado e quente na borda da pálpebra há 2 dias.", goal: "Qual a diferença para o calázio?" },
      { id: 2, name: "Localização", content: "Notou um ponto amarelado na base de um cílio. Usa maquiagem diariamente.", goal: "Quais glândulas podem estar envolvidas?" },
      { id: 3, name: "Agente", content: "Nódulo eritematoso com ponto de supuração visível. Blefarite associada.", goal: "Qual o principal agente bacteriano?" },
      { id: 4, name: "Manejo", content: "A maioria dos casos responde a medidas conservadoras.", goal: "Qual o papel das compressas mornas?" },
      { id: 5, name: "Orientação", content: "Paciente pergunta se pode 'espremer' a lesão.", goal: "Por que espremer é perigoso?" }
    ],
    finalDiagnosis: "Hordéolo (Terçol)",
    explanation: "Infecção bacteriana aguda das glândulas ciliares ou de Meibomius. Tratado com calor local."
  },
  {
    id: 14,
    title: "Caso 14",
    difficulty: "Fácil",
    stages: [
      { id: 1, name: "Diferença", content: "F.L.S., 45 anos. Nódulo indolor na pálpebra inferior há 3 semanas. Aumento lento.", goal: "Qual a diferença fisiopatológica para o hordéolo?" },
      { id: 2, name: "Dermatologia", content: "Refere blefarite crônica e rosácea. Nega dor ou secreção.", goal: "Como a rosácea se relaciona com o caso?" },
      { id: 3, name: "Biomicroscopia", content: "Nódulo firme, indolor e móvel. Eversão revela área elevada na conjuntiva tarsal.", goal: "Por que pode causar astigmatismo?" },
      { id: 4, name: "Tratamento", content: "Tratamento inicial conservador, mas pode exigir intervenção.", goal: "Descreva as opções (injeção/cirurgia)." },
      { id: 5, name: "Malignidade", content: "Paciente teme tumor. Nódulo não regride.", goal: "Quando suspeitar de malignidade?" }
    ],
    finalDiagnosis: "Calázio",
    explanation: "Granuloma crônico por obstrução glandular. Indolor, ao contrário do hordéolo."
  },
  {
    id: 15,
    title: "Caso 15",
    difficulty: "Médio",
    stages: [
      { id: 1, name: "Tríade", content: "D.A.M., 38 anos. Dor ocular, olho vermelho e fotofobia intensa em OD há 2 dias.", goal: "Qual quadro inflamatório esta tríade sugere?" },
      { id: 2, name: "Sistêmico", content: "Refere dor lombar crônica que melhora com exercício e piora no repouso.", goal: "Qual a associação com doenças da coluna?" },
      { id: 3, name: "Biomicroscopia", content: "Injeção ciliar, Tyndall em câmara anterior e sinéquias posteriores.", goal: "O que são sinéquias posteriores?" },
      { id: 4, name: "Terapêutica", content: "O tratamento visa reduzir inflamação e evitar bloqueio pupilar.", goal: "Por que midriáticos são essenciais?" },
      { id: 5, name: "Marcador", content: "Paciente pergunta se deve investigar a coluna.", goal: "Qual o papel do HLA-B27?" }
    ],
    finalDiagnosis: "Uveíte Anterior Aguda",
    explanation: "Inflamação da úvea anterior. Frequentemente associada a espondiloartropatias positivas para HLA-B27."
  },
  {
    id: 16,
    title: "Caso 16",
    difficulty: "Difícil",
    stages: [
      { id: 1, name: "Neuro", content: "B.S.L., 29 anos. Perda visual súbita em OE e dor ao movimentar o olho. Cores 'desbotadas'.", goal: "Qual estrutura nervosa está envolvida?" },
      { id: 2, name: "Dormência", content: "Refere dormência transitória em uma perna há 6 meses. Tia com Esclerose Múltipla.", goal: "Qual a correlação com doenças desmielinizantes?" },
      { id: 3, name: "Achados", content: "AV 20/200. Marcus Gunn +++. Fundoscopia normal.", goal: "O que significa 'neurite retrobulbar'?" },
      { id: 4, name: "Imagens", content: "Necessário avaliar o nervo óptico e o parênquima cerebral.", goal: "Qual o tratamento inicial recomendado (ONTT)?" },
      { id: 5, name: "Futuro", content: "Ansiedade sobre risco de Esclerose Múltipla.", goal: "Qual o prognóstico visual típico?" }
    ],
    finalDiagnosis: "Neurite Óptica",
    explanation: "Inflamação do nervo óptico, comum em adultos jovens e forte associação com Esclerose Múltipla."
  },
  {
    id: 17,
    title: "Caso 17",
    difficulty: "Médio",
    stages: [
      { id: 1, name: "Trauma", content: "T.P.C., 15 anos. Trauma por bola de futebol em OE há 3 horas. Dor e visão borrada.", goal: "O que é hifema e qual o mecanismo?" },
      { id: 2, name: "Falciforme", content: "Notou camada de sangue no olho. Tem traço falciforme.", goal: "Por que o traço falciforme torna o caso perigoso?" },
      { id: 3, name: "Nível", content: "Sangue ocupando 1/3 da câmara anterior. PIO elevada (24 mmHg).", goal: "Qual a complicação aguda além da re-hemorragia?" },
      { id: 4, name: "Manejo", content: "O tratamento visa estabilizar o coágulo e controlar a PIO.", goal: "Qual a posição ideal da cabeceira?" },
      { id: 5, name: "Repouso", content: "Paciente quer voltar a jogar amanhã.", goal: "Qual o risco de re-hemorragia e o período crítico?" }
    ],
    finalDiagnosis: "Hifema Traumático",
    explanation: "Presença de sangue na câmara anterior pós-trauma. Exige repouso absoluto e controle da pressão intraocular."
  },
  {
    id: 18,
    title: "Caso 18",
    difficulty: "Difícil",
    stages: [
      { id: 1, name: "Químico", content: "V.M.S., 35 anos. Respingo de soda cáustica (álcali) há 30 minutos. Dor insuportável.", goal: "Por que álcalis são mais graves que ácidos?" },
      { id: 2, name: "Socorro", content: "Colegas lavaram com pouca água. Visão turva.", goal: "Qual a conduta de primeiros socorros imediata?" },
      { id: 3, name: "Isquemia", content: "pH conjuntival elevado (9,5). Isquemia límbica (olho muito branco) e opacidade.", goal: "O que a isquemia límbica representa?" },
      { id: 4, name: "Irrigação", content: "Prioridade é remoção do agente químico remanescente.", goal: "Qual o objetivo quanto ao pH lacrimal?" },
      { id: 5, name: "Recuperação", content: "Paciente questiona se voltará a enxergar.", goal: "Cite medicações adjuvantes essenciais." }
    ],
    finalDiagnosis: "Queimadura Química Ocular",
    explanation: "Urgência oftalmológica absoluta. Requer lavagem profusa imediata com soro fisiológico ou água."
  },
  {
    id: 19,
    title: "Caso 19",
    difficulty: "Fácil",
    stages: [
      { id: 1, name: "Fatores", content: "N.R.A., 52 anos, agricultor. 'Carne crescida' no canto do olho há anos. Irritação.", goal: "Quais os fatores de risco ambientais?" },
      { id: 2, name: "Visão", content: "Lesão avançando para a pupila. Sente a visão 'puxando'.", goal: "Como a lesão altera a acuidade?" },
      { id: 3, name: "Exame", content: "Lesão triangular fibrovascular crescendo da conjuntiva nasal sobre a córnea.", goal: "Diferença para pinguécula?" },
      { id: 4, name: "Cirurgia", content: "Casos avançados exigem cirurgia.", goal: "Qual técnica reduz a recorrência?" },
      { id: 5, name: "Proteção", content: "Paciente pergunta se a 'carne' volta.", goal: "Qual o papel da proteção UV?" }
    ],
    finalDiagnosis: "Pterígio",
    explanation: "Degeneração elástica da conjuntiva. O autotransplante conjuntival é a técnica cirúrgica de escolha."
  },
  {
    id: 20,
    title: "Caso 20",
    difficulty: "Fácil",
    stages: [
      { id: 1, name: "Telas", content: "P.L.M., 58 anos, secretária. Sensação de areia, ardência e lacrimejamento paradoxal.", goal: "Como o computador contribui para o quadro?" },
      { id: 2, name: "Autoimune", content: "Refere boca seca e Artrite Reumatoide.", goal: "Qual a associação com Sjögren?" },
      { id: 3, name: "Testes", content: "Ceratite punctata e tempo de ruptura do filme lacrimal (BUT) reduzido.", goal: "O que significa o lacrimejamento paradoxal?" },
      { id: 4, name: "Lubrificação", content: "Tratamento foca em repor a lágrima e reduzir evaporação.", goal: "Quais as opções terapêuticas iniciais?" },
      { id: 5, name: "Vasoconstritores", content: "Quer usar colírio que 'tira o vermelho'.", goal: "Por que vasoconstritores são prejudiciais?" }
    ],
    finalDiagnosis: "Síndrome do Olho Seco",
    explanation: "Disfunção do filme lacrimal. Pode ser evaporativo ou por deficiência aquosa (Sjögren)."
  },
  {
    id: 21,
    title: "Caso 21",
    difficulty: "Difícil",
    stages: [
      { id: 1, name: "Miodesopsias", content: "W.S.F., 63 anos. Perda visual súbita em OD. Refere nuvens pretas antes de escurecer.", goal: "Sugere sangramento em qual cavidade?" },
      { id: 2, name: "Diabetes", content: "Diabético há 20 anos. Outro olho com 'problema de laser'.", goal: "Causa mais comum de hemorragia espontânea em diabéticos?" },
      { id: 3, name: "Opacidade", content: "Ausência de reflexo vermelho. Impossível ver a retina.", goal: "Qual exame de imagem é mandatório?" },
      { id: 4, name: "Manejo", content: "Depende da causa base e descolamento associado.", goal: "Qual o papel da Vitrectomia?" },
      { id: 5, name: "Laser", content: "Pergunta se o laser resolve o sangue.", goal: "Qual o papel do laser (PFC) na prevenção?" }
    ],
    finalDiagnosis: "Hemorragia Vítrea",
    explanation: "Presença de sangue no corpo vítreo. No diabético, é complicação da fase proliferativa."
  },
  {
    id: 22,
    title: "Caso 22",
    difficulty: "Médio",
    stages: [
      { id: 1, name: "Cefaleia", content: "K.A.S., 25 anos. Cefaleia intensa, náuseas e visão turva curta. Obesa.", goal: "Diferença entre papiledema e edema de papila?" },
      { id: 2, name: "HIC", content: "Usa anticoncepcional. Zumbido pulsátil.", goal: "Por que obesidade é fator de risco?" },
      { id: 3, name: "Exame de Fundo", content: "Edema bilateral de disco óptico. Ausência de pulsação venosa.", goal: "Qual a gravidade da falta de pulsação venosa?" },
      { id: 4, name: "Próximos Passos", content: "Necessário investigar causas estruturais.", goal: "Quais exames (imagem e punção) solicitar?" },
      { id: 5, name: "Sequelas", content: "Pergunta se perda de peso ajuda.", goal: "Possíveis sequelas visuais se não controlado?" }
    ],
    finalDiagnosis: "Papiledema",
    explanation: "Edema de papila bilateral por aumento da pressão intracraniana. Requer investigação neurológica urgente."
  }
];
