const infos = [
  {
    id: 'CrossModal',
    title : 'Jina - Cross Modal Search System',
    description: 'This example allows the user to search for images given a caption description.',
    server : 'https://master-crossmodal-dleunji.endpoint.ainize.ai/api/search',
    githubLink : 'https://github.com/jina-ai/examples/tree/master/cross-modal-search',
    ainizeLink: 'https://ainize.ai/dleunji/crossmodal'
  },
  {
    id: 'Poke',
    title: 'Jina - Search Pokemon Images',
    description: 'This example allows the user to search for Pokemon images given a image',
    server : 'https://main-jina-pokemon-scy6500.endpoint.ainize.ai/api/search',
    githubLink : 'https://github.com/jina-ai/examples/tree/master/pokedex-with-bit',
    ainizeLink : 'https://ainize.ai/scy6500/jina-pokemon?branch=main'
  },
];

const initialState = {
  info : infos[0]
};

export const jina = (state = initialState, action) => {
  switch (action.type) {
    case 'MODE_CHANGE':
      return {
        ...state,
        info : infos[action.id]
      };
    default:
      return state;
  };
};