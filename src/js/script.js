// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

window.addEventListener("click", function (e) {
  if (e.target !== hamburger && e.target !== navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Chat Bot System
const toggleBtn = document.getElementById("chat-toggle");
const popup = document.getElementById("chat-popup");
const chatClose = document.getElementById("chat-close");
const chatBody = document.getElementById("chat-body");
const optionsContainer = document.getElementById("chat-options");

let currentStep = "start";

toggleBtn.addEventListener("click", () => {
  popup.classList.toggle("hidden");

  if (!popup.classList.contains("hidden") && chatBody.innerHTML === "") {
    setTimeout(() => renderStep(currentStep), 300);
  }
});

chatClose.addEventListener("click", () => {
  popup.classList.add("hidden");
});

window.addEventListener("click", (e) => {
  if (!popup.contains(e.target) && !toggleBtn.contains(e.target)) {
    popup.classList.add("hidden");
  }
});

popup.addEventListener("click", (e) => {
  e.stopPropagation();
});

document.addEventListener("click", (e) => {
  const link = e.target.closest("a");
  if (link && link.getAttribute("href")?.startsWith("#")) {
    popup.classList.add("hidden");
  }
});

function renderStep(step) {
  const data = responses[step] || responses["fallback"];
  showTyping(() => {
    addMessage(data.message);
    renderOptions(data.options);
  });
}

function renderOptions(options = []) {
  optionsContainer.innerHTML = "";

  options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className =
      "text-xs bg-slate-200 hover:bg-primary hover:text-white transition px-3 py-1.5 rounded-full";
    btn.innerText = opt.text;

    btn.onclick = () => {
      addUserMessage(opt.text);
      optionsContainer.innerHTML = "";
      currentStep = opt.next;
      setTimeout(() => renderStep(opt.next), 500);
    };

    optionsContainer.appendChild(btn);
  });

  scrollToBottom();
}

function addMessage(text) {
  const wrapper = document.createElement("div");
  wrapper.className = "flex";

  const div = document.createElement("div");
  div.className =
    "max-w-[75%] bg-white px-3 py-2 rounded-2xl rounded-bl-sm shadow text-sm leading-relaxed";
  div.innerHTML = text;

  wrapper.appendChild(div);
  chatBody.appendChild(wrapper);
  scrollToBottom();
}

function addUserMessage(text) {
  const wrapper = document.createElement("div");
  wrapper.className = "flex justify-end";

  const div = document.createElement("div");
  div.className =
    "max-w-[75%] bg-primary text-white px-3 py-2 rounded-2xl rounded-br-sm text-sm";

  div.innerText = text;

  wrapper.appendChild(div);
  chatBody.appendChild(wrapper);
  scrollToBottom();
}

function showTyping(callback) {
  const wrapper = document.createElement("div");
  wrapper.className = "flex";

  const typing = document.createElement("div");
  typing.className =
    "bg-white px-3 py-2 rounded-2xl rounded-bl-sm shadow text-sm flex gap-1";

  typing.innerHTML = `
    <span class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
    <span class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-150"></span>
    <span class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-300"></span>
  `;

  wrapper.appendChild(typing);
  chatBody.appendChild(wrapper);
  scrollToBottom();

  setTimeout(() => {
    chatBody.removeChild(wrapper);
    callback();
  }, 800);
}

function scrollToBottom() {
  chatBody.scrollTo({
    top: chatBody.scrollHeight,
    behavior: "smooth",
  });
}
