const initialState = {
  data: [
    {
      id: 1,
      title: "Beneath the Surface",
      artist: "Dream Theater",
      album: "Dramatic Turn of Events"
    },
    {
      id: 2,
      title: "As Death Embraces",
      artist: "Haken",
      album: "The Mountain"
    },
    {
      id: 3,
      title: "Prodigal Son",
      artist: "Kamelot",
      album: "Silverthorn"
    }
  ]
};

const songReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_ALL_SONGS":
      return {
        ...state,
        data: payload
      };
    default:
      return state;
  }
};

export default songReducer;
