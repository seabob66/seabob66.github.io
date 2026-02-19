function showFilter() {
    const filterForm = document.getElementById("filterContent");
    if (filterForm.style.display == "none") {
        filterForm.style.display = "block";
    } else {
        filterForm.style.display = "none";
    }
}

function showAddNew() {
    const newForm = document.getElementById("newContent");
    if (newForm.style.display == "none" || newForm.style.display === ""){
        newForm.style.display = "flex";
    } else {
        newForm.style.display = "none";

    }
}

function filterArticles() {
    const showOpinion = document.getElementById("opinionCheckbox").checked;
    const showRecipe = document.getElementById("recipeCheckbox").checked;
    const showUpdate = document.getElementById("updateCheckbox").checked;

    const articles = document.querySelectorAll("#articleList article");

    articles.forEach(article => {
        if (article.classList.contains("opinion")) {
            article.style.display = showOpinion ? "block" : "none";
 }else if (article.classList.contains("recipe")) {
    article.style.display = showRecipe ? "block" : "none";
    }else if (article.classList.contains("update")) {
        article.style.display = showUpdate ? "block" : "none";
    }
});

}
function addNewArticle() {
    const title = document.getElementById("inputHeader").value;
    const text = document.getElementById("inputArticle").value;

    let type = "";
    if (document.getElementById("opinionRadio").checked) type = "opinion";
    else if (document.getElementById("recipeRadio").checked) type = "recipe";
    else if (document.getElementById("lifeRadio").checked) type = "update";


const markerLabels = {opinion: "Opinion", recipe: "Recipe", update: "Update" };

const article = document.createElement("article");
article.classList.add(type);

article.innerHTML = `
<span class = "marker">${markerLabels[type]}</span>
<h2>${title}</h2>
<p>${text}</p>
<p><a href="moreDetails.html">Read more...</a></p>
`;

document.getElementById("articleList").appendChild(article);

document.getElementById("inputHeader").value = "";
document.getElementById("inputArticle").value = "";
document.getElementById("opinionRadio").checked = false;
document.getElementById("recipeRadio").checked = false;
document.getElementById("lifeRadio").checked = false;

}


