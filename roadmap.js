// console.log('supppppp');
let stories = [];
let story_number = 0;
let score = 0;
let isValidForm = false;
let isValidStep2 = false;

// step 1
const input_developer = document.querySelector("#developer");
const input_custom_persona = document.querySelector("#custom_persona");
const input_will_be_able = document.querySelector("#will_be_able");
const input_how_is_it_done = document.querySelector("#how_is_it_done");
const input_custom_how_is_it_done = document.querySelector(
  "#custom_how_is_it_done"
);
const btn_continue = document.querySelector("#btn_continue");
const custom_persona_wrapper = document.querySelector(
  '[data-name="custom_persona_wrapper"]'
);
const custom_how_is_it_done_wrapper = document.querySelector(
  '[data-name="custom_how_is_it_done_wrapper"]'
);
const fill_buttons = document.querySelectorAll(".price-item-body-cel .button");
const planner_trigger = document.querySelector(".planner-ideas-trigger");
const planner_content = document.querySelector(".planner-ideas-content");

const error_1_1 = document.querySelector('[data-name="error_step_1_1"]');
const error_1_2 = document.querySelector('[data-name="error_step_1_2"]');
const error_1_3 = document.querySelector('[data-name="error_step_1_3"]');

// step 2
const step_2 = document.querySelector("#step_2");
const input_team_usage = document.querySelector("#input_team_usage");
const input_freq = document.querySelector("#input_freq");
const input_value = document.querySelector("#input_value");
const input_time = document.querySelector("#input_time");
const btn_add = document.querySelector("#btn_add_submit"); // submit
const btn_add_fake = document.querySelector("#btn_add_fake");

const planner_line_dot = document.querySelectorAll(".planner-line-dot");
const planner_line_inner = document.querySelector(".planner-line-inner");
const text_persona = document.querySelector("#text_persona");
const error_2_1 = document.querySelector('[data-name="error_step_2_1"]');
const error_2_2 = document.querySelector('[data-name="error_step_2_2"]');
const error_2_3 = document.querySelector('[data-name="error_step_2_3"]');
const error_2_4 = document.querySelector('[data-name="error_step_2_4"]');

// step 3
const step_3 = document.querySelector("#step_3");
const backlogItems = document.querySelector(".backlog-grid");
const btn_download = document.querySelector("#btn_download");
const btn_add_new = document.querySelector("#btn_add_new");
const clear_btn = document.querySelector(".clear_btn");

// sections
const start_section = document.querySelector("#section_start");
const section_priority = document.querySelector("#section_priority");
const section_results = document.querySelector("#section_results");

// hidden form
const hidden_form = document.querySelector("#roadmap_planner");
const hiden_persona = document.querySelector("#hiden_persona");
const hiden_will_be_able_to = document.querySelector("#hiden_will_be_able_to");
const hiden_how_is_it_done_today_ = document.querySelector(
  "#hiden_how_is_it_done_today"
);
const hiden_how_often_will_this_feature_be_used_ = document.querySelector(
  "#hiden_how_often_will_this_feature_be_used"
);
const hiden_how_much_time_will_be_required_to_implement_the_feature_ =
  document.querySelector(
    "#hiden_how_much_time_will_be_required_to_implement_the_feature"
  );
const hiden_how_essential_is_this_feature_to_your_users_ =
  document.querySelector("#hiden_how_essential_is_this_feature_to_your_users");
const hiden_what_percentage_of_the_team_will_be_using_this_feature_ =
  document.querySelector(
    "#hiden_what_percentage_of_the_team_will_be_using_this_feature"
  );

const setCookie = (name, value, days) => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie =
    name + "=" + (JSON.stringify(value) || "") + expires + "; path=/";
};
const getCookie = (name) => {
  const nameEQ = name + "=";
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) === " ")
      cookie = cookie.substring(1, cookie.length);
    if (cookie.indexOf(nameEQ) === 0)
      return JSON.parse(cookie.substring(nameEQ.length, cookie.length));
  }
  return null;
};
const checkRowLength = () => {
  if (stories.length === 0) {
    step_3.style.display = "none";
  } else {
    step_3.style.display = "block";
  }
};
const handleCustomInputs = (input, wrapper, customInput) => {
  if (input.value === "Custom") {
    wrapper.style.display = "flex";
  } else {
    wrapper.style.display = "none";
    customInput.value = "";
  }
};
const handleFormValidation = () => {
  if (
    (input_developer.value !== "" && input_developer.value !== "Custom") ||
    (input_developer.value === "Custom" && input_custom_persona.value !== "")
  ) {
    if (
      (input_how_is_it_done.value !== "" &&
        input_how_is_it_done.value !== "Custom") ||
      (input_how_is_it_done.value === "Custom" &&
        input_custom_how_is_it_done.value !== "")
    ) {
      if (input_will_be_able.value !== "") {
        isValidForm = true;
      }
    }
  } else {
    isValidForm = false;
  }
};
const handleScrollToSection = (section) => {
  let scrollTo = section.offsetTop;
  window.scrollTo({ top: scrollTo, behavior: "smooth" });
};
const handleInputDeveloper = () => {
  if (
    input_developer.value === "" ||
    (input_custom_persona.value === "" && input_developer.value === "Custom")
  ) {
    error_1_1.style.display = "block";
  } else {
    error_1_1.style.display = "none";
  }
};
const handleInputWillBeAble = () => {
  if (input_will_be_able.value === "") {
    error_1_2.style.display = "block";
  } else {
    error_1_2.style.display = "none";
  }
};
const handleInputHowIsItDone = () => {
  if (
    input_how_is_it_done.value === "" ||
    (input_custom_how_is_it_done.value === "" &&
      input_how_is_it_done.value === "Custom")
  ) {
    error_1_3.style.display = "block";
  } else {
    error_1_3.style.display = "none";
  }
};
const handleBacklogFormSubmit = () => {
  if (isValidForm) {
    step_2.style.display = "block";
    handleScrollToSection(section_priority);

    error_1_1.style.display = "none";
    error_1_2.style.display = "none";
    error_1_3.style.display = "none";
  } else {
    handleInputDeveloper();
    handleInputWillBeAble();
    handleInputHowIsItDone();
  }

  if (input_developer.value !== "Custom") {
    text_persona.innerHTML = input_developer.value;
  } else {
    text_persona.innerHTML = input_custom_persona.value;
  }
};
const handleInputTeamUse = () => {
  if (input_team_usage.value === "") {
    error_2_1.style.display = "block";
  } else {
    error_2_1.style.display = "none";
  }
};
const handleInputFreq = () => {
  if (input_freq.value === "") {
    error_2_2.style.display = "block";
  } else {
    error_2_2.style.display = "none";
  }
};
const handleInputValue = () => {
  if (input_value.value === "") {
    error_2_3.style.display = "block";
  } else {
    error_2_3.style.display = "none";
  }
};
const handleInputTime = () => {
  if (input_time.value === "") {
    error_2_4.style.display = "block";
  } else {
    error_2_4.style.display = "none";
  }
};
const handleHideSubmitButton = () => {
  btn_add.style.display = "none";
  btn_add_fake.style.display = "block";
};
const handleShowSubmitButton = () => {
  btn_add.style.display = "block";
  btn_add_fake.style.display = "none";
};

const handleSecondFormValidation = () => {
  if (
    input_team_usage.value === "" ||
    input_freq.value === "" ||
    input_value.value === "" ||
    input_time.value === ""
  ) {
    isValidStep2 = false;
    handleHideSubmitButton();
  } else {
    isValidStep2 = true;
    handleShowSubmitButton();
  }
};
const removeActiveFromDots = () => {
  planner_line_dot.forEach((dot) => {
    dot.classList.remove("active");
  });
};
const handleCalc = () => {
  removeActiveFromDots();
  score =
    +input_team_usage.value +
    +input_freq.value +
    +input_value.value +
    +input_time.value;

  const translateYValue = 100 - ((score - 1) / 14) * 100;

  if (score < 8) {
    planner_line_dot[2].classList.add("active");
    planner_line_inner.style.transform = `translateY(${translateYValue}%)`;
  } else if (score >= 8 && score <= 14) {
    planner_line_dot[1].classList.add("active");
    planner_line_dot[2].classList.add("active");
    planner_line_inner.style.transform = `translateY(${translateYValue}%)`;
  } else {
    planner_line_dot.forEach((dot) => {
      dot.classList.add("active");
    });
    planner_line_inner.style.transform = "translateY(0%)";
  }
};
const handleResetStep1 = () => {
  input_developer.value = "";
  input_custom_persona.value = "";
  input_will_be_able.value = "";
  input_how_is_it_done.value = "";
  input_custom_how_is_it_done.value = "";
  custom_persona_wrapper.style.display = "none";
  custom_how_is_it_done_wrapper.style.display = "none";
};
const handleResetStep2 = () => {
  removeActiveFromDots();
  planner_line_inner.style.transform = "translateY(100%)";
  input_team_usage.value = "";
  input_freq.value = "";
  input_value.value = "";
  input_time.value = "";
};
const getSelectedOptionText = (selectElement) => {
  if (!selectElement) {
    return null;
  }
  const selectedIndex = selectElement.selectedIndex;
  if (selectedIndex !== -1) {
    return selectElement.options[selectedIndex].text;
  } else {
    return null;
  }
};
const handleDeleteItem = (storyNumber) => {
  const itemIndex = stories.findIndex(
    (item) => item.storyNumber === storyNumber
  );
  if (itemIndex !== -1) {
    stories.splice(itemIndex, 1); // Remove item from stories array
  }
  document.querySelector(`[data-name="${storyNumber}"]`).remove(); // Remove item from DOM
  checkRowLength();
  setCookie("stories", stories, 30);
};
const handleCollapseItem = (event) => {
  const collapseButton = event.currentTarget;
  const item = collapseButton.closest(".backlog-grid-item");
  item.querySelector(".backlog-grid-item-bottom").classList.toggle("active");
  collapseButton.classList.toggle("active");
};

const createBacklogItem = (item) => {
  const html = `
    <div data-name="${item.storyNumber}" class="backlog-grid-item">
      <div class="backlog-grid-item-top">
        <div
          id="w-node-d25e039c-6517-b1c1-e4f8-edac8273acd5-df940cd0"
          class="backglog-grid-top-cel"
        >
        ${item.persona} will be able to ${item.beAbleTo}
        </div>
        <div
          id="w-node-_1def7098-f9a1-7731-011e-b0f368d4b733-df940cd0"
          class="backglog-grid-top-cel"
        >
          <div class="tag ${
            score < 8
              ? "is-blue"
              : score >= 8 && score <= 14
              ? "is-yellow"
              : "is-pink"
          }">${
    score < 8 ? "Nice to have" : score >= 8 && score <= 14 ? "Medium" : "High"
  }</div>
        </div>
        <div
          id="w-node-bd1ec271-98dd-18d9-5678-15552ab69392-df940cd0"
          class="backglog-grid-top-cel is-right"
        >
          <button
            onClick="handleCollapseItem(event)"
            class="backglog-grid-top-cel-btn is-colepse active"
            data-name="toggle-open"
          >
            <div class="flex w-embed">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 5.75002L12 9.75002L11.0667 10.6833L8 7.61668L4.93333 10.6833L4 9.75002L8 5.75002Z"
                  fill="black"
                ></path>
              </svg>
            </div>
          </button>
          <!--<div class="w-embed">
            <div
              style="width:1px;height:1.6rem;background-color:#E3E3E3;"
            ></div>
          </div>-->
          <button
            onClick="handleDeleteItem(${item.storyNumber})"
            class="backglog-grid-top-cel-btn is-delete"
            data-name="delete-${item.storyNumber}"
          >
            <div class="flex w-embed">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.66666 14C4.3 14 3.98611 13.8694 3.725 13.6083C3.46389 13.3472 3.33333 13.0333 3.33333 12.6667V4H2.66666V2.66667H6V2H10V2.66667H13.3333V4H12.6667V12.6667C12.6667 13.0333 12.5361 13.3472 12.275 13.6083C12.0139 13.8694 11.7 14 11.3333 14H4.66666ZM6 11.3333H7.33333V5.33333H6V11.3333ZM8.66666 11.3333H10V5.33333H8.66666V11.3333Z"
                  fill="black"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
      <div class="backlog-grid-item-bottom">
        <div class="backlog-grid-item-bottom-inner">
          <div class="backlog-grid-item-bottom-inner-border-top"></div>
          <div class="backlog-grid-item-bottom-inner-flex">
            <div data-name="table_persona">${item.persona}</div>
            <div class="text-gray">will be able to</div>
            <div data-name="table_able_to">${item.beAbleTo}</div>
          </div>
          <div class="backlog-grid-item-bottom-inner-flex">
            <div class="text-gray">How is it done today?</div>
            <div data-name="table_done_today">${item.howIsItDone}</div>
          </div>
          <div class="backlog-grid-item-bottom-inner-flex">
            <div>
              <span class="text-gray">Team usage percentage:</span>
              <span data-name="table_team_usage">${
                item.teamUsagePercentage
              }</span>
            </div>
            <div>
              <span class="text-gray">Usage frequency:</span>
              <span data-name="table_usage_frequency">${
                item.usageFrequency
              }</span>
            </div>
          </div>
          <div class="backlog-grid-item-bottom-inner-flex no-border">
            <div>
              <span class="text-gray">Expected value:</span>
              <span data-name="table_value">${item.expectedValue}</span>
            </div>
            <div>
              <span class="text-gray">Time to implement:</span>
              <span data-name="table_time_to_implement">${
                item.timeToImplement
              }</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  return html;
};
const handleTableCreateOnLoad = () => {
  if (stories.length > 0) {
    stories.forEach((story) => {
      const backlogItemHtml = createBacklogItem(story);
      backlogItems.insertAdjacentHTML("beforeend", backlogItemHtml);
    });
  }
};
const handleAddToTable = () => {
  story_number = story_number += 1;
  const newItem = {
    storyNumber: story_number,
    persona:
      input_developer.value !== "Custom"
        ? input_developer.value
        : input_custom_persona.value,
    beAbleTo: input_will_be_able.value,
    howIsItDone:
      input_how_is_it_done.value !== "Custom"
        ? input_how_is_it_done.value
        : input_custom_how_is_it_done.value,
    teamUsagePercentage: getSelectedOptionText(input_team_usage),
    usageFrequency: getSelectedOptionText(input_freq),
    expectedValue: getSelectedOptionText(input_value),
    timeToImplement: getSelectedOptionText(input_time),
  };

  const backlogItemHtml = createBacklogItem(newItem);
  backlogItems.insertAdjacentHTML("beforeend", backlogItemHtml);

  stories.push(...[newItem]);
};
const saveFile = (blob, filename) => {
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(blob, filename);
  } else {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.href = url;
    a.download = filename;
    a.click();
    setTimeout(() => {
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    }, 0);
  }
};
// https://www.youtube.com/watch?v=LMzGotR_2UU&ab_channel=scriptpapi
const createCsv = () => {
  let csvContent =
    "User story,persona,How is it done,Team usage percentage,Usage frequency,Expected value,Time to implement,Priority\n";
  stories.forEach((story) => {
    const priority =
      story.score < 8
        ? "Nice to have"
        : story.score >= 8 && story.score <= 14
        ? "Medium"
        : "High";
    let row = `${story.persona} will be able to ${story.beAbleTo},${story.persona},${story.howIsItDone},${story.teamUsagePercentage},${story.expectedValue},${story.usageFrequency},${story.timeToImplement},${priority}\n`;
    csvContent += row;
  });
  let data = new Blob([csvContent], { type: "text/csv" });

  saveFile(data, "roadmap.csv");
};
const handleFillButton = (btn) => {
  handleScrollToSection(start_section);

  const personaValue = btn.getAttribute("data-persona") || "";
  const storyValue = btn.getAttribute("data-story") || "";

  input_developer.value = personaValue;
  input_will_be_able.value = storyValue;

  planner_trigger.click();
  planner_trigger.classList.toggle("active");
};
const handleDropdownTrigger = () => {
  planner_content.classList.toggle("active");
  planner_trigger.classList.toggle("active");
};
const handleClearAll = () => {
  document
    .querySelectorAll(".backlog-grid-item")
    .forEach((item) => item.remove());
  handleResetStep1();
  handleResetStep2();
  handleScrollToSection(start_section);
  stories = [];
  setCookie("stories", stories, 30);
  checkRowLength();
};
const handleChangeInputsValue = () => {
  hiden_persona.value =
    input_developer.value === "Custom"
      ? input_custom_persona.value
      : input_developer.value;
  hiden_will_be_able_to.value = input_will_be_able.value;
  hiden_how_is_it_done_today_.value =
    input_how_is_it_done.value === "Custom"
      ? input_custom_how_is_it_done.value
      : input_how_is_it_done.value;

  hiden_what_percentage_of_the_team_will_be_using_this_feature_.value =
    getSelectedOptionText(input_team_usage);
  hiden_how_often_will_this_feature_be_used_.value =
    getSelectedOptionText(input_freq);
  hiden_how_much_time_will_be_required_to_implement_the_feature_.value =
    getSelectedOptionText(input_time);
  hiden_how_essential_is_this_feature_to_your_users_.value =
    getSelectedOptionText(input_value);
};

// events
clear_btn.addEventListener("click", () => {
  handleClearAll();
  handleHideSubmitButton();
});

fill_buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    handleFillButton(btn);
    handleInputWillBeAble();
    handleInputDeveloper();
  });
});
planner_trigger.addEventListener("click", handleDropdownTrigger);
btn_download.addEventListener("click", () => {
  createCsv();
});
btn_add_new.addEventListener("click", () => {
  handleScrollToSection(start_section);

  handleHideSubmitButton();
  handleResetStep1();
  handleResetStep2();
  isValidForm = false;
  isValidStep2 = false;
});
btn_continue.addEventListener("click", () => {
  handleBacklogFormSubmit();
});
input_team_usage.addEventListener("input", () => {
  handleInputTeamUse();
  handleSecondFormValidation();
  handleCalc();
  handleChangeInputsValue();
});
input_freq.addEventListener("input", () => {
  handleInputFreq();
  handleSecondFormValidation();
  handleCalc();
  handleChangeInputsValue();
});
input_value.addEventListener("input", () => {
  handleInputValue();
  handleSecondFormValidation();
  handleCalc();
  handleChangeInputsValue();
});
input_time.addEventListener("input", () => {
  handleInputTime();
  handleSecondFormValidation();
  handleCalc();
  handleChangeInputsValue();
});
input_will_be_able.addEventListener("input", () => {
  handleInputWillBeAble();
  handleFormValidation();
  handleChangeInputsValue();
});
input_custom_how_is_it_done.addEventListener("input", () => {
  handleInputHowIsItDone();
  handleFormValidation();
  handleChangeInputsValue();
});
input_custom_persona.addEventListener("input", () => {
  handleInputDeveloper();
  handleFormValidation();
  handleChangeInputsValue();
});
input_developer.addEventListener("input", () => {
  handleCustomInputs(
    input_developer,
    custom_persona_wrapper,
    input_custom_persona
  );
  handleInputDeveloper();
  handleFormValidation();
  handleChangeInputsValue();
});
input_how_is_it_done.addEventListener("input", () => {
  handleInputHowIsItDone();
  handleCustomInputs(
    input_how_is_it_done,
    custom_how_is_it_done_wrapper,
    input_custom_how_is_it_done
  );
  handleFormValidation();
  handleChangeInputsValue();
});
document.addEventListener("DOMContentLoaded", () => {
  const storedStories = getCookie("stories");
  if (storedStories) {
    stories = storedStories;
  }

  btn_add.style.display = "none";
  error_1_1.style.display = "none";
  error_1_2.style.display = "none";
  error_1_3.style.display = "none";
  error_2_1.style.display = "none";
  error_2_2.style.display = "none";
  error_2_3.style.display = "none";
  error_2_4.style.display = "none";

  custom_persona_wrapper.style.display = "none";
  custom_how_is_it_done_wrapper.style.display = "none";
  step_2.style.display = "none";
  planner_trigger.classList.remove("active");
  planner_content.classList.remove("active");
  checkRowLength();
  handleTableCreateOnLoad();
});

btn_add_fake.addEventListener("click", () => {
  handleInputTeamUse();
  handleInputFreq();
  handleInputValue();
  handleInputTime();
});

hidden_form.addEventListener("submit", (event) => {
  event.preventDefault();

  hidden_form.style.display = "block !important";

  handleAddToTable();
  checkRowLength();
  handleScrollToSection(section_results);
  setCookie("stories", stories, 30);

  error_2_1.style.display = "none";
  error_2_2.style.display = "none";
  error_2_3.style.display = "none";
  error_2_4.style.display = "none";
});

// https://gist.github.com/joziahg/b895c7791306802f43978932e9e38fd7
// POST https://api.hsforms.com/submissions/v3/integration/submit/21928972/b6c129c5-a96a-4158-9ef8-8afc9bb81983
