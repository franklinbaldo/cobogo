export const exploracoes = [
  {
    id: 'cheio-vazio-grid-001',
    numero: '001',
    titulo: 'Cheio e vazio',
    pergunta: 'Cheio e vazio sem desenhar um cobogó.',
    resumo: 'Vazios deliberados em um grid editorial como fonte de ritmo e identidade.',
    familia: 'Cheio / vazio',
    status: 'selected',
    href: '/cobogo/laboratorio/cheio-vazio-grid-001/',
  },
  {
    id: 'mapa-002',
    numero: '002',
    titulo: 'Mapa vazado',
    pergunta: 'Quanto vazio um mapa aguenta?',
    resumo: 'O vazio entra num conjunto navegável sem perder sequência nem fechamento.',
    familia: 'Cheio / vazio',
    status: 'selected',
    href: '/cobogo/laboratorio/mapa-002/',
  },
  {
    id: 'mobile-003',
    numero: '003',
    titulo: 'Vazio móvel',
    pergunta: 'O vazio ainda funciona quando a tela estreita?',
    resumo: 'A pausa vertical vira variável em telas pequenas e encontra um orçamento menor.',
    familia: 'Cheio / vazio',
    status: 'selected',
    href: '/cobogo/laboratorio/mobile-003/',
  },
  {
    id: 'irregularidade-004',
    numero: '004',
    titulo: 'Irregularidade',
    pergunta: 'Quando ritmo vira ruído?',
    resumo: 'Irregularidade localizada como contrapeso sem dispersar a hierarquia.',
    familia: 'Cheio / vazio',
    status: 'selected',
    href: '/cobogo/laboratorio/irregularidade-004/',
  },
  {
    id: 'regra-jogo-005',
    numero: '005',
    titulo: 'Regra e jogo',
    pergunta: 'Regra suficiente. Jogo suficiente.',
    resumo: 'Uma gramática comum tolera liberdade quando as diferenças respondem ao conjunto.',
    familia: 'Regra / jogo',
    status: 'selected',
    href: '/cobogo/laboratorio/regra-jogo-005/',
  },
  {
    id: 'estrutura-aparente-006',
    numero: '006',
    titulo: 'Estrutura aparente',
    pergunta: 'Mostrar como se sustenta.',
    resumo: 'Junções visíveis só permanecem quando compram uma relação perceptível.',
    familia: 'Estrutura aparente',
    status: 'selected',
    href: '/cobogo/laboratorio/estrutura-aparente-006/',
  },
  {
    id: 'campos-interligados-007',
    numero: '007',
    titulo: 'Campos interligados',
    pergunta: 'Campos que respondem uns aos outros.',
    resumo: 'Movimento visual nasce de contato e passagem, não de deslocamento gratuito.',
    familia: 'Campos interligados',
    status: 'selected',
    href: '/cobogo/laboratorio/campos-interligados-007/',
  },
] as const

export type ExploracaoId = (typeof exploracoes)[number]['id']

export function vizinhosDaExploracao(id: ExploracaoId) {
  const index = exploracoes.findIndex((item) => item.id === id)
  return {
    atual: exploracoes[index],
    anterior: index > 0 ? exploracoes[index - 1] : undefined,
    proxima: index < exploracoes.length - 1 ? exploracoes[index + 1] : undefined,
  }
}
