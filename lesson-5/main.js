let movies = [
  {
    id: 0,
    imdb: 0,
    imgUrl:
      'https://occ-0-2621-784.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABV8-zaSs7QqHtb6MOr36GVPo4ejL9mp8EVqYvfplt-A3it4-PIkgckevX0yRIeYllXUIAtBh8sxFfAfuYQNdLOeNLXs.jpg?r=f4e',
    name: 'bad-boys',
    year: 2005,
    rating: '7 / 10',
    vikipediaLink:
      'https://he.wikipedia.org/wiki/%D7%A2%D7%9E%D7%95%D7%93_%D7%A8%D7%90%D7%A9%D7%99',
  },
  {
    id: 1,
    imdb: 5/10,
    imgUrl:
      'https://occ-0-2621-784.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS6FiRDEKzdE82hzdgwTpmJHSGvHJHfV9nO3NDJqDyGEcg7ZXBWcPrddonfn82w23AbeGvzgJUgqzukBCn5nIG5o7PTUMmwXAPO8SJXDokYGXIqhMV9nLoqLU-B_.jpg?r=1d4',
    name: 'spong-bob',
    year: 2007,
    rating: '5 / 10',
    vikipediaLink:
      'https://he.wikipedia.org/wiki/%D7%A2%D7%9E%D7%95%D7%93_%D7%A8%D7%90%D7%A9%D7%99',
  },
  {
    id: 2,
    imdb: 9/10,
    imgUrl:
      'https://occ-0-2621-784.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbYZ1wvu_8YlYTK1ceQnyCbunaJa0VH2w9JHxcYO5tJNf_uDe8fosEEergI1mT4VmDBss5w0n0kGSt5vZ9i9b_Dj9bI.jpg?r=ddf',
    name: 'fast',
    year: 2011,
    rating: '9 / 10',
    vikipediaLink:
      'https://he.wikipedia.org/wiki/%D7%A2%D7%9E%D7%95%D7%93_%D7%A8%D7%90%D7%A9%D7%99',
  },
  {
    id: 3,
    imdb: 8/10,
    imgUrl:
      'https://occ-0-2621-784.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcVsFe8-WWp2o8tikv6ehQcgqAGC8Bv1hUTvomxp2fgiw45VQw08DvSC7hOMT3wRNsPxNSrnkAwUjD6B4wsWt9UOAad7wNd6gim2ZBvxdu1OuhRYJ3sNI6Bjnz_k.jpg?r=333',
    name: 'mogly',
    year: 2003,
    rating: '8 / 10',
    vikipediaLink:
      'https://he.wikipedia.org/wiki/%D7%A2%D7%9E%D7%95%D7%93_%D7%A8%D7%90%D7%A9%D7%99',
  },
  {
    id: 4,
    imdb: 7/10,
    imgUrl:
      'https://occ-0-2621-784.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX2P3BGCJ49g1lqsKTe7UtezEclw6TsezsK2VJwAT8sUY-5appe-Cq0e6QP_F2SOHkaL9hIrLmWSvLbZra7mVcBhthU.jpg?r=0ed',
    name: 'spider-man',
    year: 2020,
    rating: '7 / 10',
    vikipediaLink:
      'https://he.wikipedia.org/wiki/%D7%A2%D7%9E%D7%95%D7%93_%D7%A8%D7%90%D7%A9%D7%99',
  },
  {
    id: 5,
    imdb: 7/10,
    imgUrl:
      'https://occ-0-2621-784.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUK8u0tsNn5oWiozSIGznyAZoluO_0lWrTxlopbQNhK8GY9ghoSx3NqUktduatKkBgXmtV3o13YFli4nEymgxk3yz_0.jpg?r=3fa',
    name: 'kong-foo-panda',
    year: 2017,
    rating: '7 / 10',
    vikipediaLink:
      'https://he.wikipedia.org/wiki/%D7%A2%D7%9E%D7%95%D7%93_%D7%A8%D7%90%D7%A9%D7%99',
  },
  {
    id: 6,
    imdb: 7/10,
    imgUrl:
      'https://occ-0-2621-784.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVbjvpEDVuKs4iVFJF71hwE1ZstZjTmWzDoukqdXBI-D3yPCyGKnhrRHWnMPJ420HqFRWUZWUQBcfjElYc48zRlsAiY.jpg?r=d07',
    name: 'minions',
    year: 2015,
    rating: '7 / 10',
    vikipediaLink:
      'https://he.wikipedia.org/wiki/%D7%A2%D7%9E%D7%95%D7%93_%D7%A8%D7%90%D7%A9%D7%99',
  },
  {
    id: 7,
    imdb: 7/10,
    imgUrl:
      'https://occ-0-2621-784.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQlXDjpT5bMOylYhtj6PC_qbDllGKXJ7tmF4RaYDwJK5q8LpHLzOj01evsRxLKlSCgznVUSiu2lPylGv8yuGEa9_p0NdMs07mQEHLja5D1ogPdFh_oQHDMxwua2_dXS4rA2sPLOypaH77_5b3FN-edhe0RqJj6C3JNs9cIH2zoHmMhYchMKzYrgMDUb5fcQPSbllCuHmiYwNQ2hYymbYdD2t.jpg?r=b26',
    name: 'animals',
    year: 2014,
    rating: '7 / 10',
    vikipediaLink:
      'https://he.wikipedia.org/wiki/%D7%A2%D7%9E%D7%95%D7%93_%D7%A8%D7%90%D7%A9%D7%99',
  },
  {
    id: 8,
    imdb: 7/10,
    imgUrl:
      'https://occ-0-2621-784.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYcekSd7_v7j-2he_tw9At3N2QH4LCcIdzpV-g1L_UWO5KCLVQAta1HlTW4gyVxkOeabSgbjvmDRvTUPbv_i0l2z8Tw.jpg?r=27d',
    name: 'madagaskar',
    year: 2015,
    rating: '7 / 10',
    vikipediaLink:
      'https://he.wikipedia.org/wiki/%D7%A2%D7%9E%D7%95%D7%93_%D7%A8%D7%90%D7%A9%D7%99',
  },
  {
    id: 9,
    imdb: 7/10,
    imgUrl:
      'https://occ-0-2621-784.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSffWAidCU06VaFQRaFg9yP62ctm3CKjP6EnMXK1vsKUJgcSQ4Um2toyeQ_dFdE8HApwukkyCHNtv4JxmaypZMiL0Q0.jpg?r=e96',
    name: 'karate-kid',
    year: 2019,
    rating: '7 / 10',
    vikipediaLink:

'https://he.wikipedia.org/wiki/%D7%A2%D7%9E%D7%95%D7%93_%D7%A8%D7%90%D7%A9%D7%99',
  },
  {
    id: 10,
    imdb: 6/10,
    imgUrl:
      'https://occ-0-2621-784.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdmdeH-M_TQalhGc7nxQh4qUF5BcEhCoAuntCvCkdpTjeusxP2nnAZUoNAdo672TIZ5tTOm8qkw2MnDgLMzU7utCxnM.jpg?r=b60',
    name: 'norbit',
    year: 2012,
    rating: '6 / 10',
    vikipediaLink:
      'https://he.wikipedia.org/wiki/%D7%A2%D7%9E%D7%95%D7%93_%D7%A8%D7%90%D7%A9%D7%99',
  },
  {
    id: 11,
    imdb: 9/10,
    imgUrl:
      'https://occ-0-2621-784.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbMUAOZ3-sI4R8tMZlxtGz5vdH6A-QOhyTCj4Z1GsS8cG0Sqp3iMmYv_QcHQMZ6VzNzxuZ25bI3kj30muHpuAe_dh0w.jpg?r=717',
    name: 'fast-2',
    year: 2008,
    rating: '9 / 10',
    vikipediaLink:
      'https://he.wikipedia.org/wiki/%D7%A2%D7%9E%D7%95%D7%93_%D7%A8%D7%90%D7%A9%D7%99',
  },
];
let moviesContainer = document.getElementById('movie_id');
let moviesContent = "";
movies.forEach(movie => {
  let movieContent = "";
  for (let key in movie) {
    if (key === 'imgUrl') {
      movieContent += `<a href="${movie.vikipediaLink}" target="_blank"/><img src="${movie[key]}"/></a>`;
    }
    if (key === 'name') {
      movieContent += `<h2>${movie[key]}</h2>`;
    }
    if (key === 'year') {
      movieContent += `<h3>${movie[key]}</h3>`;
    }
    if (key === 'rating') {
      movieContent += `<h4>${movie[key]}</h4>`;
    }
    if (key === 'imdb') {
      movieContent += `<h4>${movie[key]}</h4>`;
    }
  }
  moviesContent += `<div class="movie" id="card${movie.id}">${movieContent}</div>`;

});

moviesContainer.innerHTML += moviesContent;