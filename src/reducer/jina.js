const infos = [
  {
    id: 'CrossModal',
    title : 'Jina - Cross Modal Search System',
    description: 'It allows the user to search for images given a caption description.',
    server : 'https://master-crossmodal-dleunji.endpoint.ainize.ai/api/search',
    githubLink : 'https://github.com/jina-ai/examples/tree/master/cross-modal-search',
<<<<<<< HEAD
    ainizeLink: 'https://ainize.ai/dleunji/crossmodal'
  },
  {
    id: 'Object Detection',
    title: 'Jina - Object Detection',
    description: 'It allows the user to find the most relevant parent photo.',
    server: 'https://master-object-search-dleunji.endpoint.ainize.ai/api/search',
    ainizeLink: 'https://ainize.ai/dleunji/object-search?branch=master'
=======
    ainizeLink: 'https://ainize.ai/dleunji/crossmodal',
    inputType: "text",
    input: "a dog running in the meadow",
    output: "/images/CrossModalExample.png",
  },
  {
    id: 'Poke',
    title: 'Jina - Search Pokemon Images',
    description: 'This example finds similar Pokémon by uploading a image.',
    server : 'https://main-jina-pokemon-scy6500.endpoint.ainize.ai/api/search',
    githubLink : 'https://github.com/jina-ai/examples/tree/master/pokedex-with-bit',
    ainizeLink : 'https://ainize.ai/scy6500/jina-pokemon?branch=main',
    inputType: "image",
    input: "/images/PokeInput.jpeg",
    output: "/images/PokeExample.png",
>>>>>>> 3255437632ff0a108e104adcc7dd4849949a63b7
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