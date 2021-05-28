const servers = {
  'Poke': 'https://main-jina-pokemon-scy6500.endpoint.ainize.ai/api/search',
  'CrossModal' : 'https://master-crossmodal-dleunji.endpoint.ainize.ai/api/search'
}

const initialState = {
  mode : 'Poke',
  server : servers[this.mode]
};

export const mode = (state = initialState, action) => {
  switch (action.type) {
    case 'MODE_CHANGE':
      return {
        ...state,
        mode : action.name,
        server : servers[action.name]
      };
    default:
      return{
        ...state
      };
  };
};