const infos = [
  {
    id: 'Poke',
    title: 'poke',
    description: '설명',
    server : 'https://main-jina-pokemon-scy6500.endpoint.ainize.ai/api/search',
    githubLink : 'github',
    ainizeLink : 'ainize'
  },
  {
    id: 'CrossModal',
    title : 'Jina - Cross Modal Search System',
    description: 'It allows the user to search for images given a caption description.',
    server : 'https://master-crossmodal-dleunji.endpoint.ainize.ai/api/search',
    githubLink : 'https://github.com/jina-ai/examples/tree/master/cross-modal-search',
    ainizeLink: 'https://ainize.ai/dleunji/crossmodal'
  },
  {
    id: 'Object Detection',
    title: 'Jina - Object Detection',
    description: 'It allows the user to find the most relevant parent photo.',
    server: 'https://master-object-search-dleunji.endpoint.ainize.ai/api/search',
    ainizeLink: 'https://ainize.ai/dleunji/object-search?branch=master'
  }
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