// Image Preview Logic
const photoIcon = document.querySelector(".preview .photo__icon"),
  imgPreview = document.querySelector(".preview .img__preview"),
  previewContainer = document.querySelector(".preview");

function preview(event) {
  const reader = new FileReader();

  reader.onloadend = () => {
    previewContainer.style.backgroundColor = "transparent";
    photoIcon.style.display = "none";
    imgPreview.style.display = "block";
    imgPreview.src = reader.result;
  };

  reader.readAsDataURL(event);
}

// Add Blog Logic

let blogs = [];
function addBlog(event) {
  event.preventDefault();

  // Input Value
  const projectName = document.getElementById("name").value,
    startDate = document.getElementById("start-date").value,
    endDate = document.getElementById("end-date").value,
    description = document.getElementById("description").value,
    // Checkboxes
    nodejs = document.getElementById("nodejs"),
    reactjs = document.getElementById("reactjs"),
    nextjs = document.getElementById("nextjs"),
    typescript = document.getElementById("typescript");

  // image
  let image = document.getElementById("upload");

  image = URL.createObjectURL(image.files[0]);

  //   Technologies checkboxessss
  const checkboxes = [nodejs, nextjs, reactjs, typescript];

  const blog = {
    projectName,
    description,
    image,
    startDate,
    endDate,
    technologies: checkboxes.filter((c) => c.checked == true),
  };

  blogs.push(blog);

  renderBlog();
}

// Render Blog
function renderBlog() {
  let blogContainer = document.querySelector(".blog__container");

  blogContainer.innerHTML = "";

  for (let i; i <= blogs.length; i++) {
    blogContainer.innerHTML += `
      <div class="blog__items">
        <a href="#">
          <div class="blog__image">
            <img src="${blogs[i].image}" alt="Blog Image" />
          </div>
          <div class="blog__title">
            <h4 class="truncate">${blogs[i].projectName}</h4>
            <p class="truncate">
              ${blogs[i].description}
            </p>
          </div>
          <div class="blog__date">
            <p class="truncate">${blogs[i].startDate} - ${blogs[i].endDate}</p>
          </div>
        </a>
        <div class="blog__actions">
          <button type="button" class="action__btn">Edit</button>
          <button type="button" class="action__btn">Delete</button>
        </div>
      </div>
        `;
  }
}
