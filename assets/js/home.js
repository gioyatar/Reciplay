// Heading
const display = document.getElementById("mainHeading");
const target = "Cooking Skills";
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}<>?/"; 

let revealed = "";
let i = 0;

// Course Card
const difficultyOrder = {
    Beginner: 1,
    Intermediate: 2,
    Advanced: 3
};

const difficultySVGs = {
    Beginner: `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
            <rect width="3" height="3" transform="matrix(1 0 0 -1 3 14)" fill="#F4A261" fill-opacity="1"></rect>
            <rect width="3" height="6" transform="matrix(1 0 0 -1 7.5 14)" fill="#64748B" fill-opacity="0.5"></rect>
            <rect width="3" height="9" transform="matrix(1 0 0 -1 12 14)" fill="#64748B" fill-opacity="0.5"></rect>
        </svg>
    `,
    Intermediate: `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
            <rect width="3" height="3" transform="matrix(1 0 0 -1 3 14)" fill="#F4A261" fill-opacity="1"></rect>
            <rect width="3" height="6" transform="matrix(1 0 0 -1 7.5 14)" fill="#F4A261" fill-opacity="0.5"></rect>
            <rect width="3" height="9" transform="matrix(1 0 0 -1 12 14)" fill="#64748B" fill-opacity="0.5"></rect>
        </svg>
    `,
    Advanced: `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
            <rect width="3" height="3" transform="matrix(1 0 0 -1 3 14)" fill="#F4A261" fill-opacity="1"></rect>
            <rect width="3" height="6" transform="matrix(1 0 0 -1 7.5 14)" fill="#F4A261" fill-opacity="0.5"></rect>
            <rect width="3" height="9" transform="matrix(1 0 0 -1 12 14)" fill="#F4A261" fill-opacity="0.5"></rect>
        </svg>
    `
}

const courses = [
    {
        category: "appetizer",
        img: "",
        num: "Appetizer",
        title: "Chicken Empanada",
        desc: 'Chicken empanadas are a popular type of stuffed, savory pastry with a flaky or crispy crust, found in Latin America, Spain, and the Philippines. The filling typically features shredded chicken combined with various vegetables and spices, and the pastries can be either baked or fried.',
        difficulty: "Intermediate",
        file: ""
    },
    {
        category: "main",
        img: "",
        num: "Main",
        title: "Bistek",
        desc: 'Bistek, also known as bistek tagalog or karne frita, is a Filipino dish consisting of thinly sliced beefsteak braised in soy sauce, calamansi juice, garlic, ground black pepper, and onions cut into rings. It is a common staple in the Tagalog and Western Visayan regions of the Philippines. It is eaten over white rice.',
        difficulty: "Beginner",
        file: ""
    },
    {
        category: "dessert",
        img: "",
        num: "Dessert",
        title: "Halo-halo",
        desc: '"Halo-halo" (or haluhalo) is a popular and vibrant Filipino cold dessert made with a mixture of crushed or shaved ice, evaporated milk, and various sweet ingredients. The name literally translates to "mix-mix" in Tagalog, which is the key instruction for how to eat it: you use a long spoon to mix all the layers together into an icy, creamy, and textured treat.',
        difficulty: "Beginner",
        file: ""
    },
    {
        category: "dessert",
        img: "",
        num: "Dessert",
        title: "Creamy Coffee Jelly",
        desc: 'Coffee jelly is a jelly dessert flavored with coffee and sugar. Although once common in British and American cookbooks, it is now most common in Japan, where it can be found in most restaurants and convenience stores. Coffee jelly can be made using an instant mix or from scratch. It is served in restaurants and cafés.',
        difficulty: "Beginner",
        file: "coffee-jelly.html"
    }
]

function decodeLetter() {
    if (i >= target.length) return;

    let iterations = 0;
    const interval = setInterval(() => {
        const randomChar = chars[Math.floor(Math.random() * chars.length)];
        display.textContent = revealed + randomChar;

        iterations++;

        // After some random iterations, lock the correct character
        if (iterations > 5 + Math.random() * 10) {
            clearInterval(interval);
            revealed += target[i];
            display.textContent = revealed;
            i++;
            decodeLetter();
        }
    }, 15);
}

function showCategory(category) {
    const container = document.getElementById("coursesList");
    container.innerHTML = ""; // Clear previous content

    const filteredCourses = courses.filter(course => course.category === category);
    filteredCourses.sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);

    filteredCourses.forEach(course => {
        const card = document.createElement("div");
        card.className = "courseCard";

        card.innerHTML = `
            <a href="../../public/foods/${course.file}">
                <div class="pixelBorder bottomCard">
                    <div class="pixelBorder topCard">
                        <div class="courseCardIMG">
                            <img src="${course.img}" alt="Course Banner Image">
                        </div>
                        <div class="courseCardTexts">
                            <p class="courseNum">${course.num}</p>
                            <h3 class="courseCardTitle">${course.title}</h3>
                            <p class="courseCardDesc">${course.desc}</p>
                        </div>
                        <div class="courseCardDifficulty">
                            <div class="difficultyTab">
                                ${difficultySVGs[course.difficulty]}
                                <p>${course.difficulty}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        `;
        container.appendChild(card);
    });
}

decodeLetter();

document.addEventListener('DOMContentLoaded', function() {
    showCategory('appetizer');
});