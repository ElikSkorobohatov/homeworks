// Фотографії взяв з https://jsonplaceholder.typicode.com
let photoDataBased = [
    {
        albumId: 1,
        id: 1,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url: "https://via.placeholder.com/600/92c952",
        thumbnailUrl: "https://via.placeholder.com/150/92c952"
    },
    {
        albumId: 1,
        id: 2,
        title: "reprehenderit est deserunt velit ipsam",
        url: "https://via.placeholder.com/600/771796",
        thumbnailUrl: "https://via.placeholder.com/150/771796"
    },
    {
        albumId: 1,
        id: 3,
        title: "officia porro iure quia iusto qui ipsa ut modi",
        url: "https://via.placeholder.com/600/24f355",
        thumbnailUrl: "https://via.placeholder.com/150/24f355"
    },
    {
        albumId: 1,
        id: 4,
        title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        url: "https://via.placeholder.com/600/d32776",
        thumbnailUrl: "https://via.placeholder.com/150/d32776"
    },
    {
        albumId: 1,
        id: 5,
        title: "natus nisi omnis corporis facere molestiae rerum in",
        url: "https://via.placeholder.com/600/f66b97",
        thumbnailUrl: "https://via.placeholder.com/150/f66b97"
    },
    {
        albumId: 1,
        id: 6,
        title: "accusamus ea aliquid et amet sequi nemo",
        url: "https://via.placeholder.com/600/56a8c2",
        thumbnailUrl: "https://via.placeholder.com/150/56a8c2"
    },
    {
        albumId: 1,
        id: 7,
        title: "officia delectus consequatur vero aut veniam explicabo molestias",
        url: "https://via.placeholder.com/600/b0f7cc",
        thumbnailUrl: "https://via.placeholder.com/150/b0f7cc"
    },
    {
        albumId: 1,
        id: 8,
        title: "aut porro officiis laborum odit ea laudantium corporis",
        url: "https://via.placeholder.com/600/54176f",
        thumbnailUrl: "https://via.placeholder.com/150/54176f"
    },
    {
        albumId: 1,
        id: 9,
        title: "qui eius qui autem sed",
        url: "https://via.placeholder.com/600/51aa97",
        thumbnailUrl: "https://via.placeholder.com/150/51aa97"
    },
    {
        albumId: 1,
        id: 10,
        title: "beatae et provident et ut vel",
        url: "https://via.placeholder.com/600/810b14",
        thumbnailUrl: "https://via.placeholder.com/150/810b14"
    },
    {
        albumId: 1,
        id: 11,
        title: "nihil at amet non hic quia qui",
        url: "https://via.placeholder.com/600/1ee8a4",
        thumbnailUrl: "https://via.placeholder.com/150/1ee8a4"
    },
    {
        albumId: 1,
        id: 12,
        title: "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
        url: "https://via.placeholder.com/600/66b7d2",
        thumbnailUrl: "https://via.placeholder.com/150/66b7d2"
    },
    {
        albumId: 1,
        id: 13,
        title: "repudiandae iusto deleniti rerum",
        url: "https://via.placeholder.com/600/197d29",
        thumbnailUrl: "https://via.placeholder.com/150/197d29"
    },
    {
        albumId: 1,
        id: 14,
        title: "est necessitatibus architecto ut laborum",
        url: "https://via.placeholder.com/600/61a65",
        thumbnailUrl: "https://via.placeholder.com/150/61a65"
    },
    {
        albumId: 1,
        id: 15,
        title: "harum dicta similique quis dolore earum ex qui",
        url: "https://via.placeholder.com/600/f9cee5",
        thumbnailUrl: "https://via.placeholder.com/150/f9cee5"
    },
    {
        albumId: 1,
        id: 16,
        title: "iusto sunt nobis quasi veritatis quas expedita voluptatum deserunt",
        url: "https://via.placeholder.com/600/fdf73e",
        thumbnailUrl: "https://via.placeholder.com/150/fdf73e"
    },
    {
        albumId: 1,
        id: 17,
        title: "natus doloribus necessitatibus ipsa",
        url: "https://via.placeholder.com/600/9c184f",
        thumbnailUrl: "https://via.placeholder.com/150/9c184f"
    },
    {
        albumId: 1,
        id: 18,
        title: "laboriosam odit nam necessitatibus et illum dolores reiciendis",
        url: "https://via.placeholder.com/600/1fe46f",
        thumbnailUrl: "https://via.placeholder.com/150/1fe46f"
    },
    {
        albumId: 1,
        id: 19,
        title: "perferendis nesciunt eveniet et optio a",
        url: "https://via.placeholder.com/600/56acb2",
        thumbnailUrl: "https://via.placeholder.com/150/56acb2"
    },
    {
        albumId: 1,
        id: 20,
        title: "assumenda voluptatem laboriosam enim consequatur veniam placeat reiciendis error",
        url: "https://via.placeholder.com/600/8985dc",
        thumbnailUrl: "https://via.placeholder.com/150/8985dc"
    }
]

const valuePhotoOnSlider = 20;//Можна змінити від 2 до 20
let positionSlider = 0

//Ця функція генерує картинки, кнопки та крапки
function renderSlider(countPicters, dataBased){
    //debugger

    let sliderPushPhoto = document.querySelector(".contains")
    let template = "<div class = 'slider'>";

    for (let i = 0; i < countPicters; i++) {
        template += "<img class = 'slide' src=" + dataBased[i].url + ">"
    }
    template += "</div>" +
                "<h1 id='befor'><</h1> <h1 id='next'>></h1>" +
                "<div class='dotSelector'>" +
                    "<h2 class = 'active' data-index = 1 >*</h2>";
    for (let i = 1; i < countPicters; i++) {
        template += "<h2 data-index='"+ (i+1) +"'>*</h2>"
    }
    template += "</div>"

    sliderPushPhoto.innerHTML = template;
}

//Цією функцією рахуємо потрібну позицію при натискані кнопки вперед
function nextSlideCalculatePositions() {
    positionSlider += weightSlider;
    changeColorDot();
}

//Цією функцією рахуємо потрібну позицію при натискані кнопки назад
function previousSlideCalculatePositions() {
    positionSlider -= weightSlider;
    changeColorDot();
}


//Цією функцією рахуємо потрібну позицію при натискані кнопкою
function calculateDotChangePositions(event) {
    if (event.target.closest('h2')) {
        let taskNumber = parseInt(event.target.getAttribute('data-index'), 10);
        positionSlider = (taskNumber - 1) * weightSlider;
        changeColorDot ();
    }
}

//Цією функцією міняємо колір крапок та відпрапвляемось на функію зміни позиції
function changeColorDot(){

    for(let i = 1; i <= valuePhotoOnSlider; i++){
        let removeActiveDot = document.querySelector(`[data-index="${i}"]`);
        removeActiveDot.classList.remove('active')
    }

    let clickDot = (positionSlider / weightSlider) + 1;
    let addActiveDot = document.querySelector(`[data-index="${clickDot}"]`);
    addActiveDot.classList.add('active');

    moveSliderPicturesPositionAndHideButton(positionSlider);
}

//Цією функцією ховаємо стрілки та міняємо позицію слайдера
function moveSliderPicturesPositionAndHideButton(positions) {
    if (positionSlider === maxPositionSlider){
        beforButton.style.display = 'block'
        nextButton.style.display = 'none'
    }else if (positionSlider === 0){
        beforButton.style.display = 'none'
        nextButton.style.display = 'block'
    } else{
        beforButton.style.display = 'block'
        nextButton.style.display = 'block'
    }
    sliderPhoto.style.right = positions + 'px';
}

    renderSlider(valuePhotoOnSlider, photoDataBased);

    const weightSlider = document.querySelector(".slider").offsetWidth;
    const maxPositionSlider = weightSlider * (valuePhotoOnSlider - 1);
    const sliderPhoto = document.querySelector(".slider");

    const nextButton = document.getElementById("next");
    const beforButton = document.getElementById("befor");
    const containerDot = document.querySelector(".dotSelector");

    nextButton.addEventListener('click', nextSlideCalculatePositions);
    beforButton.addEventListener('click', previousSlideCalculatePositions);
    containerDot.addEventListener("click", calculateDotChangePositions);