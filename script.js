$('.randomize img').each(function() {
    var rando = 1 + Math.floor(Math.random() * 16);
    var url = $(this).attr('src');
    if (rando == 4 || rando == 6 || rando == 9 || rando == 11 || rando == 16 ) {
      rando = rando - 1;
    }
    if (rando == 7 ) {
      rando = rando - 7;
    }
    $(this).attr('src', url + "?image=" + rando);
  });

  const data = [
    {
        "name": "card1",
        "description": "Card number 1 is part of the sample dataset."
    },
    {
        "name": "card2",
        "description": "Card number 2 is part of the sample dataset."
    },
    {
        "name": "card3",
        "description": "Card number 3 is part of the sample dataset."
    },
    {
        "name": "card4",
        "description": "Card number 4 is part of the sample dataset."
    },
    {
        "name": "card5",
        "description": "Card number 5 is part of the sample dataset."
    },
    {
        "name": "card6",
        "description": "Card number 6 is part of the sample dataset."
    },
    {
        "name": "card7",
        "description": "Card number 7 is part of the sample dataset."
    },
    {
        "name": "card8",
        "description": "Card number 8 is part of the sample dataset."
    },
    {
        "name": "card9",
        "description": "Card number 9 is part of the sample dataset."
    },
    {
        "name": "card10",
        "description": "Card number 10 is part of the sample dataset."
    },
    {
        "name": "card11",
        "description": "Card number 11 is part of the sample dataset."
    },
    {
        "name": "card12",
        "description": "Card number 12 is part of the sample dataset."
    },
    {
        "name": "card13",
        "description": "Card number 13 is part of the sample dataset."
    },
    {
        "name": "card14",
        "description": "Card number 14 is part of the sample dataset."
    },
    {
        "name": "card15",
        "description": "Card number 15 is part of the sample dataset."
    },
    {
        "name": "card16",
        "description": "Card number 16 is part of the sample dataset."
    },
    {
        "name": "card17",
        "description": "Card number 17 is part of the sample dataset."
    },
    {
        "name": "card18",
        "description": "Card number 18 is part of the sample dataset."
    },
    {
        "name": "card19",
        "description": "Card number 19 is part of the sample dataset."
    },
    {
        "name": "card20",
        "description": "Card number 20 is part of the sample dataset."
    }
  ]


  const cardContainer = document.getElementById("cardContainer");
  const pagination = document.getElementById("pagination");
  const resultsPerPageSelect = document.getElementById("resultsPerPage");

  let currentPage = 1;
  let resultsPerPage = parseInt(resultsPerPageSelect.value);

  function renderCards(page, perPage) {
    cardContainer.innerHTML = "";
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const pageData = data.slice(start, end);
    pageData.forEach(card => {
      const div = document.createElement("div");
      div.className = "flex flex-col justify-center items-center card w-full rounded-lg bg-slate-900 p-10 text-sm text-indigo-300 mt-18 min-h-[250px]";
      div.innerHTML = `<p class="mb-8 text-center text-xl text-white">${card.name}</p><p class="mb-6 text-center text-sm">${card.description}</p>`;
      cardContainer.appendChild(div);
    });
  }

  function renderPagination() {
    pagination.innerHTML = "";
    const totalPages = Math.ceil(data.length / resultsPerPage);

    const createButton = (type,values, onClick, isActive = false) => {
      const btn = document.createElement("button");
      if(type === "btn"){
        btn.className = `py-3 px-2 rounded font-medium tracking-wide cursor-pointer ${values}`;
      }if(type=== "val"){
        btn.className = `mx-2 rounded font-medium tracking-wide cursor-pointer page-num`;
        btn.textContent = values;
      }
      if (isActive) btn.classList.add("active");
      btn.onclick = onClick;
      return btn;
    };

    pagination.appendChild(createButton("btn","first pg-btn", () => changePage(1)));
    pagination.appendChild(createButton("btn","prev pg-btn", () => changePage(Math.max(1, currentPage - 1))));

    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, currentPage + 1);

    if (currentPage === 1) endPage = Math.min(3, totalPages);
    if (currentPage === totalPages) startPage = Math.max(1, totalPages - 2);

    for (let i = startPage; i <= endPage; i++) {
      pagination.appendChild(createButton("val",i, () => changePage(i), i === currentPage));
    }

    pagination.appendChild(createButton("btn","next pg-btn", () => changePage(Math.min(totalPages, currentPage + 1))));
    pagination.appendChild(createButton("btn","last pg-btn", () => changePage(totalPages)));
  }

  function changePage(page) {
    const totalPages = Math.ceil(data.length / resultsPerPage);
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    renderCards(currentPage, resultsPerPage);
    renderPagination();
  }

  resultsPerPageSelect.addEventListener("change", () => {
    resultsPerPage = parseInt(resultsPerPageSelect.value);
    currentPage = 1;
    renderCards(currentPage, resultsPerPage);
    renderPagination();
  });

  // Initial render
  renderCards(currentPage, resultsPerPage);
  renderPagination();


  const slides = document.querySelectorAll(".carousel div")
        const firstSlide = 0
        const lastSlide = slides.length - 1
        let activeSlide = 0

        const goToPreviousSlide = () => {
            slides[activeSlide].classList.remove("active")
            if (activeSlide !== firstSlide) {
                activeSlide = activeSlide - 1
            } else {
                activeSlide = lastSlide
            }
            slides[activeSlide].classList.add("active")
        }

        const goToNextSlide = () => {
            slides[activeSlide].classList.remove("active")
            if (activeSlide !== lastSlide) {
                activeSlide = activeSlide + 1
            } else {
                activeSlide = firstSlide
            }
            slides[activeSlide].classList.add("active")
        }

        const slides1 = document.querySelectorAll(".carousel1 div")
        const firstSlide1 = 0
        const lastSlide1 = slides1.length - 1
        let activeSlide1 = 0

        const goToPreviousSlide1 = () => {
            slides1[activeSlide1].classList.remove("active1")
            if (activeSlide1 !== firstSlide1) {
                activeSlide1 = activeSlide1 - 1
            } else {
                activeSlide1 = lastSlide1
            }
            slides1[activeSlide1].classList.add("active1")
        }

        const goToNextSlide1 = () => {
            slides1[activeSlide1].classList.remove("active1")
            if (activeSlide1 !== lastSlide1) {
                activeSlide1 = activeSlide1 + 1;
            } else {
                activeSlide1 = firstSlide1
            }
            slides1[activeSlide1].classList.add("active1")
        }

        window.addEventListener('wheel', function (event) {
            if (event.deltaY > 0) {
                goToNextSlide();
                goToNextSlide1();
                playAudio('https://tim-school.com/codepen/book/sound.mp3');
            } else {
                goToPreviousSlide();
                goToPreviousSlide1();
                playAudio('https://tim-school.com/codepen/book/sound.mp3');
            }
        });

        var audio_;

        function playAudio(src) {
            if (audio_) audio_.pause();
            const audio = audio_ = new Audio(src);
            audio.play();
            audio.currentTime = 0;
        }

        