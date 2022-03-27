const data = [
    {
        id: 1,
        data: "Janeiro 04, 2022",
        img: "../images/post-1.png",
        title: "Começando no ReactJS em 2022",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iusto nostrum possimus voluptatibus perspiciatis similique sit sapiente ut earum nobis! At velit harumquo autem corporis eaque sapiente facilis. Quidem?",
    },

    {
        id: 2,
        data: "Janeiro 04, 2022",
        img: "",
        title: "Começando no ReactJS em 2022",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iusto nostrum possimus voluptatibus perspiciatis similique sit sapiente ut earum nobis! At velit harumquo autem corporis eaque sapiente facilis. Quidem?",
    },

    {
        id: 3,
        data: "Janeiro 04, 2022",
        img: "",
        title: "Começando no ReactJS em 2022",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iusto nostrum possimus voluptatibus perspiciatis similique sit sapiente ut earum nobis! At velit harumquo autem corporis eaque sapiente facilis. Quidem?",
    },

    {
        id: 4,
        data: "Janeiro 04, 2022",
        img: "../images/post-2.png",
        title: "Começando no ReactJS em 2022",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iusto nostrum possimus voluptatibus perspiciatis similique sit sapiente ut earum nobis! At velit harumquo autem corporis eaque sapiente facilis. Quidem?",
    },

    {
        id: 5,
        data: "Janeiro 04, 2022",
        img: "../images/post-3.png",
        title: "Começando no ReactJS em 2022",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iusto nostrum possimus voluptatibus perspiciatis similique sit sapiente ut earum nobis! At velit harumquo autem corporis eaque sapiente facilis. Quidem?",
    },

    {
        id: 6,
        data: "Janeiro 04, 2022",
        img: "../images/post-4.png",
        title: "Começando no ReactJS em 2022",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iusto nostrum possimus voluptatibus perspiciatis similique sit sapiente ut earum nobis! At velit harumquo autem corporis eaque sapiente facilis. Quidem?",
    },
];

const poster = document.querySelector(".poster");

data.forEach((data) => {
    const post = `
        <img src="${data.img}" alt="" />
        <p class="date">${data.data}</p>
        <h2>${data.title}</h2>
        <p class="text">${data.text}</p>
    `;

    if (data.id === 1) {
        document.querySelector(".container-left").innerHTML = post;
    }

    if (data.id === 2) {
        document.querySelector(".post-one").innerHTML = post;
    }

    if (data.id === 3) {
        document.querySelector(".post-two").innerHTML = post;
    }

    if (data.id === 4) {
        document.querySelector(".post-first").innerHTML = post;
    }

    if (data.id === 5) {
        document.querySelector(".post-second").innerHTML = post;
    }

    if (data.id === 6) {
        document.querySelector(".post-terc").innerHTML = post;
    }
});
