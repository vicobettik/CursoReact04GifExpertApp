
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=TvngPI5lHDL9rlHO01xiLIr4DV2h8cu8&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data = [] } = await resp.json();
  
    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }));

    return gifs

  };